$(function () {
	
    chrome.storage.sync.get('imgBack', function (items) {
    
		if (items.imgBack != '')
		{
			$("#txtImgBack").val(items.imgBack);
		}
		
    });
	
	chrome.storage.sync.get('chkFondoOscuro', function (items) {
    	
		$('#chkFondoOscuro')[0].checked = items.chkFondoOscuro;
		
    });
	
	

    $('#btnGuardar').click(function () {
        
		var imgBack = $('#txtImgBack').val();
		var chkFondoOscuro = $('#chkFondoOscuro')[0].checked;
		
        chrome.storage.sync.set({'imgBack': imgBack });
        chrome.storage.sync.set({'chkFondoOscuro': chkFondoOscuro });
        
		close();
		
    });

	
    $('#btnReiniciar').click(function () {
		
		close();

    });
});