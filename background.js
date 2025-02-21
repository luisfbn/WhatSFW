chrome.runtime.onInstalled.addListener(() => {
    console.log("Whatsfw Extension instalada.");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "show") {
        chrome.action.setPopup({ popup: "popup.html" });
    }
});
