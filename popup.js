$(function() {
	$('#btnAplicarEstilos').click(function () {
			chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {action: "aplicarEstilos" });
			});
	});
	
	$('#btnQuitarEstilos').click(function () {
			chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
				chrome.tabs.sendMessage(tabs[0].id, {action: "quitarEstilos" });
			});
	});
	
	
});