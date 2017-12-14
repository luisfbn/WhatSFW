chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "aplicarEstilos") {
 
		
		if( $('#styleSFW').length ) {
			document.getElementById("styleSFW").remove();
		}
		
		if( $('.m6ZEb').length ) {
			$('.m6ZEb').remove();
		}
		
		var css = document.createElement("style");
		css.setAttribute("id", "styleSFW");
		css.type = "text/css";
		
		css.innerHTML = "";
		css.innerHTML += ".image-thumb {opacity: 0.05; transition: visibility 0s, opacity 0.5s linear;} ";
		css.innerHTML += ".image-thumb:hover {opacity: 1;} ";
		
		//css.innerHTML += ".pane-body * {background-color: black!important; color: gray!important;} ";
		
		css.innerHTML += ".pane-body { background-image:url('http://listas.eleconomista.es/system/items/000/074/589/medium/E95.jpg?1464076950') !important; }";
		
		
		//css.innerHTML += ".chat-status { color: gray;} ";
		css.innerHTML += ".chat-avatar { background-color: rgba(0, 0, 0, 1);} ";
		css.innerHTML += ".chat-body { background-color: rgba(0, 0, 0, 1);} ";
		css.innerHTML += ".pane-chat-header { background-color: rgba(0, 0, 0, 1);} ";
		
		//experiment
		css.innerHTML += ".ellipsify { color: white;} "; //.starred-title-main 
		css.innerHTML += ".chat-status{ color: yellow;} "; // .chat-secondary, .header-secondary 
		css.innerHTML += ".chat-body *{ color: gray!important;} ";
		css.innerHTML += ".chatlist-panel-search *{ background-color: black!important; color: gray!important;} ";
		
		
		css.innerHTML += ".pane-header.pane-list-header { background-color: rgba(0, 0, 0, 1);} ";
		css.innerHTML += ".chatlist-panel-search { background-color: rgba(0, 0, 0, 1);} ";
		
		
		css.innerHTML += ".app-wrapper { background-color: rgba(0, 0, 0, 0.7);} ";
		css.innerHTML += ".bubble-image  { background-color: rgba(0, 0, 0, 0.7);} ";
		
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