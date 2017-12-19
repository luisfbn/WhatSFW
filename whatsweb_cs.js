

var imgBack;


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "aplicarEstilos") {
 		
		if( $('#styleSFW').length ) {
			document.getElementById("styleSFW").remove();
		}
		
		//Mensaje de 
		if( $('.m6ZEb').length ) {
			$('.m6ZEb').remove();
		}
		
		//console.log(imgBack);
		
		
		var css = document.createElement("style");
		css.setAttribute("id", "styleSFW");
		css.type = "text/css";
		
		css.innerHTML = "";
		
		//Opacar imágenes del chat
		css.innerHTML += ".image-thumb {opacity: 0.05; transition: visibility 0s, opacity 0.5s linear;} ";
		css.innerHTML += ".image-thumb:hover {opacity: 1;} ";
		
		//css.innerHTML += ".pane-body * {background-color: black!important; color: gray!important;} ";
		
		//css.innerHTML += ".pane-body { background-image:url('http://listas.eleconomista.es/system/items/000/074/589/medium/E95.jpg?1464076950') !important; }";
		
		console.log(imgBack);
		
		if (imgBack) {
			console.log("ok");
			css.innerHTML = css.innerHTML + ".pane-body { background-image:url('" + imgBack + "') !important; }";
		}
		
		
		//css.innerHTML += ".chat-status { color: gray;} ";
		css.innerHTML += ".chat-avatar { background-color: rgba(0, 0, 0, 1);} ";
		css.innerHTML += ".chat-body { background-color: rgba(0, 0, 0, 1);} ";
		css.innerHTML += ".pane-chat-header { background-color: rgba(0, 0, 0, 1);} ";
		
		//experiment
		css.innerHTML += ".ellipsify { color: white;} "; 
		css.innerHTML += ".chat-status{ color: yellow;} "; 
		css.innerHTML += ".chat-body *{ color: gray!important;} ";
		css.innerHTML += ".chatlist-panel-search *{ background-color: rgba(0, 0, 0, 1); background-color: black!important; color: gray!important;} ";
		
		//media-content
		//.media-content .media
		
		//Mensajes
		css.innerHTML += ".bubble, .text-quote { background-color: rgba(0, 0, 0, 1); border-radius: 7.5px; color: white!important;} ";
		
		//text-quote es cuando se cita un mensaje
		css.innerHTML += ".text-quote * { color: gray;} ";
		
		//Buscador
		css.innerHTML += ".pane-header.pane-list-header { background-color: rgba(0, 0, 0, 1);} ";
		css.innerHTML += ".chatlist-panel-search { background-color: rgba(0, 0, 0, 1);} ";
		
		//Imagen del chat
		css.innerHTML += ".app-wrapper { background-color: rgba(0, 0, 0, 0.7);} ";
		css.innerHTML += ".bubble-image  { background-color: rgba(0, 0, 0, 0.7); color: gray!important;} ";
		css.innerHTML += ".bubble-image-caption-text  { color: white!important;} ";
		
		//Titulos del chat
		css.innerHTML += ".pane-chat * .chat-body .chat-main .chat-title * { color: yellow!important;} ";
		css.innerHTML += ".chat-main .ellipsify { color: cyan!important;} ";
		
		
		//Media
		css.innerHTML += ".media-viewer * { background-color: black!important;} ";
		css.innerHTML += ".media-content * { background-color: black!important;} ";
		css.innerHTML += ".media * { background-color: black!important;} ";
		
		
		
		
		//css.innerHTML += ".two  {width: 10% !important;} "; //.k1feT
		
		document.body.appendChild(css);
		
    }

    if (request.action == "quitarEstilos") {
 
		document.getElementById("styleSFW").remove(); 

    }
	
    if (request.action == "makeSortable") {
        $('.course').dataTable({ "bPaginate": false });
    }
});


chrome.storage.sync.get('imgBack', function (items) {
	imgBack = items.imgBack;
});


chrome.runtime.sendMessage({ action: "show" });




//formato tabla
//var jq = document.createElement("script");
//jq.setAttribute("id", "jqSFW");
//jq.setAttribute("src", "http://www.jtable.org/Scripts/jtable/jquery.jtable.js");
//document.body.appendChild(jq);

//$('.pane-chat-msgs').dataTable({ "bPaginate": false });
//$('.bubble').dataTable({ "bPaginate": false });
//$('#main').dataTable({ "bPaginate": false });







//https:code.jquery.com/jquery-1.10.2.js
		

		//if( $('#jsSFW').length ) {
		//	document.getElementById("jsSFW").remove();
		//}

		/*
		
		var jq = document.createElement("script");
		jq.setAttribute("id", "jqSFW");
		jq.setAttribute("src", "https://code.jquery.com/jquery-1.10.2.js");
		document.body.appendChild(jq);
		
		var js = document.createElement("script");
		js.setAttribute("id", "jsSFW");
		js.type = "text/javascript";
		
		js.innerHTML = "";
		js.innerHTML += "$(document).ready(function(){";
		//js.innerHTML += "$('.image-thumb-body').fadeOut();";
		js.innerHTML += "$('.image-thumb-body').click(function(){"; // $('.image-thumb-body').hover(";
		js.innerHTML += "console.log('hola');function(){$('.image-thumb-body').fadeIn(3000);}, ";
		js.innerHTML += "function(){$('.image-thumb-body').fadeOut();});";
		js.innerHTML += "});";
		
		document.body.appendChild(js);
		
		*/
	
		
		
		//document.getElementById("jsSFW").remove();
		//document.getElementById("jqSFW").remove();