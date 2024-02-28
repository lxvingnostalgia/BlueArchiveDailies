// Send a message to background.js to get the reset time when the popup is opened
chrome.runtime.sendMessage({ action: "getResetTime" }, function(response) {
    // Check if the response contains a message indicating that the missions have already reset
    if (response.message) {
      document.getElementById('timer').innerText = response.message;
    } else {
      document.getElementById('timer').innerText = `Time remaining for reset: ${response.hours} hours and ${response.minutes} minutes`;
      // Update the popup content to show the remaining time until the missions reset
    }
  });
  