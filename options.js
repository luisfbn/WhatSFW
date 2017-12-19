$(function () {
	
	
    chrome.storage.sync.get('imgBack', function (items) {
        
		$('#txtImgBack').val(items.imgBack);
		
		if (items.imgBack != '')
		{
			var mat = items.matriculas.split(',');
			$("#txtImgBack").val(mat.length);
		}
    });
	
	

    $('#save').click(function () {
        
		var imgBack = $('#txtImgBack').val();
		
        if (imgBack) {
            chrome.storage.sync.set({ 'imgBack': imgBack });
        }
		
		close();
		
    });

    $('#reset').click(function () {
		
		
		// http://listas.eleconomista.es/system/items/000/074/589/medium/E95.jpg?1464076950
		
		
		chrome.storage.sync.set({ 'matriculas': '' }, function () {
            
			var opt = {
                type: "basic",
                title: "Reset!",
                message: "Valores reseteados",
                iconUrl: "icon.png"
            }
			
			$('#txtImgBack').val("");
			
            chrome.notifications.create('reset', opt, function () { });
			
        });
		
		chrome.storage.sync.set({ 'matriculasOK': '' });
    });
});