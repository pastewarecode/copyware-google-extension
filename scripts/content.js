// Extract Instagram profile username from the page
const profileUsername = document.querySelector('meta[property="profile:username"]').getAttribute('content');

// Send the username to background script
chrome.runtime.sendMessage({profile: profileUsername}, function(response) {

    // Handle response from background script if needed

});
