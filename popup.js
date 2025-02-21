document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnAplicarEstilos").addEventListener("click", function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "aplicarEstilos" });
        });
    });

    document.getElementById("btnQuitarEstilos").addEventListener("click", function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "quitarEstilos" });
        });
    });
});