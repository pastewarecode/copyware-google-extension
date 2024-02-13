// Listen for messages from content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

    // Forward the message to Python code
    chrome.runtime.sendNativeMessage(

        'com.my_company.my_application',

        {text: 'Hello'},

        function (response) {
          console.log('Received ' + response);
        }
      );
      
});
