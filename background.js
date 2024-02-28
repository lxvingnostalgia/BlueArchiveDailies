chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "getResetTime") {
      const resetTime = new Date(); // Get the current time and date
      resetTime.setUTCHours(19, 1, 0, 0); // Set the reset time to 19:00 UTC (added 1 minute for better accuracy)
  
      const currentTime = new Date();
      // Calculate remaining time until reset
      let timeRemaining = resetTime - currentTime;

      // If the time remaining is less than or equal to 0, it means the daily missions have already reset
      if (timeRemaining <= 0) {
        sendResponse({ message: "Daily missions have already reset." });
      } else {
        // Calculate the time remaining until the reset time
        const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        // Send remaining time as a response
        sendResponse({ hours: hoursRemaining, minutes: minutesRemaining, seconds: secondsRemaining });
      }
    }
  });
  