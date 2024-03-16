chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.greeting == "Hello from the popup") {
      sendResponse({farewell: "Goodbye from background"});
    }
  });
  