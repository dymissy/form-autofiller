//main JS file
chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.executeScript(null, { file: "assets/js/autoFiller.js" });
});
