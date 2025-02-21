chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "show") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) {
                chrome.action.enable(tabs[0].id);
            }
        });
    }
});
