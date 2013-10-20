//click on icon
chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.executeScript(null, { file: "assets/js/autoFiller.js" });
});

//
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.method == "getStorage") {
            sendResponse({farewell: localStorage['options']});
        } else {
            sendResponse({});
        }
    }
);