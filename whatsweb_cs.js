var imgBack;
var chkFondoOscuro;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "aplicarEstilos") {
 		AplicarEstilosSFW();
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

chrome.storage.sync.get('chkFondoOscuro', function (items) {
	chkFondoOscuro = items.chkFondoOscuro;
});

chrome.runtime.sendMessage({ action: "show" });




function AplicarEstilosSFW() {
	
	
	if($('#styleSFW').length) {
		document.getElementById("styleSFW").remove();
	}
		
	//"Mensaje de" 
	if($('.m6ZEb').length) {
		$('.m6ZEb').remove();
	}


	var estilos = 
	{
		lista: [
				
				{
					objects : "#main img,#main video,#main .video-thumb",
					styles  : "-webkit-filter: blur(30px); filter: blur(30px);"
				},
				{
					objects : "#main img:hover,#main video:hover,#main .selectable-text",
					styles  : "-webkit-filter: blur(0px); filter: blur(0px);"
				},
				{
					objects : "#main, #pane-side",
					styles  : "-webkit-filter: blur(30px); filter: blur(5px);"
				},
				{
					objects : "#main:hover, #pane-side:hover",
					styles  : "-webkit-filter: blur(0px); filter: blur(0px);"
				}
			],
		getInfo: function (i) {
			return this.lista[i].objects + ' {' + this.lista[i].styles + '} ';
		  }
	 };
	  
	  

	//Elemento con el CSS
	var css = document.createElement("style");
	css.setAttribute("id", "styleSFW");
	css.type = "text/css";
	
	css.innerHTML = "";
	
	for (i=0; i < estilos.lista.length; i++)
	{
		css.innerHTML += estilos.getInfo(i);
	}
	
	document.body.appendChild(css);
	
}


	
	
	
	
	/*
	
	//Emoticons
	//css.innerHTML += ".large-emoji, .emoji {opacity: 1!important;} ";
	
	//.image-thumb, .video-thumb,
	css.innerHTML += "img, video, .message-video, .message-image, .message-gif {opacity: 0.08!important; transition: visibility 0s, opacity 0.1s linear; } ";
	
	//.image-thumb:hover, .video-thumb:hover,
	css.innerHTML += "img:hover, video:hover, .message-video:hover, .message-image:hover, .message-gif:hover {opacity: 1!important; transition: visibility 0s, opacity 1.5s linear;} ";
	
	
	
	//css.innerHTML += ".message {background-color: rgba(0, 0, 0, 0.05); } ";
	
	//css.innerHTML += ".image-thumb::before, .video-thumb::before, img::before, video::before {content: ''; background-color: black!important;} ";
	
	
	//css.innerHTML += "large-emoji-container * .image-thumb, emoji-xlarge * .image-thumb, large-emoji-container * img, emoji-xlarge * img {opacity: 1!important;} ";
	
	
	
	
	//Opacar imágenes del chat
	//css.innerHTML += ".image-thumb {opacity: 0.05; transition: visibility 0s, opacity 0.5s linear;} ";
	//css.innerHTML += ".image-thumb:hover {opacity: 1; transition: visibility 0s, opacity 0.5s linear;} ";
	
	//css.innerHTML += ".video-thumb {opacity: 0.05; transition: visibility 0s, opacity 0.5s linear;} ";
	//css.innerHTML += ".video-thumb:hover {opacity: 1; transition: visibility 0s, opacity 0.5s linear;} ";
	
	//css.innerHTML += "img {opacity: 0.05; transition: visibility 0s, opacity 0.5s linear;} ";
	//css.innerHTML += "img:hover  {opacity: 1; transition: visibility 0s, opacity 0.5s linear;} ";
	
	//css.innerHTML += "video {opacity: 0.05; transition: visibility 0s, opacity 0.5s linear;} ";
	//css.innerHTML += "video:hover {opacity: 1; transition: visibility 0s, opacity 0.5s linear;} ";
	
	
	//css.innerHTML += ".two  {width: 10% !important;} "; //.k1feT
	
	
	
	
	
	
	if (imgBack) {
		if (!chkFondoOscuro) {
			css.innerHTML = css.innerHTML + ".pane-body { background-image:url('" + imgBack + "') !important; }";
		}
		else
		{
			css.innerHTML += ".pane-body * {background-color: black!important; color: gray!important;} ";
		}
	}
	
	
	//color
	//background-color
	//border-radius
	
	
	//css.innerHTML += ".chat-status { color: gray;} ";
	css.innerHTML += ".chat-avatar { background-color: rgba(0, 0, 0, 1);} ";
	css.innerHTML += ".chat-body { background-color: rgba(0, 0, 0, 1);} ";
	css.innerHTML += ".pane-chat-header { background-color: rgba(0, 0, 0, 1);} ";
	
	//experiment
	css.innerHTML += ".ellipsify { color: white;} "; 
	css.innerHTML += ".chat-status{ color: yellow;} "; 
	css.innerHTML += ".chat-body *{ color: gray!important;} ";
	//css.innerHTML += ".chatlist-panel-search *{ background-color: rgba(0, 0, 0, 1); color: gray!important;} ";
	
	
	//Mensajes
	
	
	css.innerHTML += ".message-chat, .bubble, .text-quote { background-color: rgba(0, 0, 0, 1); border-radius: 7.5px; color: white!important;} ";
	
	//Hora del mensaje
	css.innerHTML += ".bubble-text-meta * { color: gray!important;} ";
	
	
	//message message-chat message-in tail message-chat
	//css.innerHTML += ".message-chat.hover *  { background-color: black!important;} ";
	
	
	
	//Cuando el mensaje tiene negritas
	css.innerHTML += ".message strong { color: white!important;} ";
	
	//text-quote es cuando se cita un mensaje
	css.innerHTML += ".text-quote * { color: gray;} ";
	
	//Buscador
	css.innerHTML += ".pane-header.pane-list-header { background-color: rgba(0, 0, 0, 1);} ";
	css.innerHTML += ".chatlist-panel-search * { background-color: black!important; color: gray!important;} "; //rgba(0, 0, 0, 1)
	
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
	
	
	
	
	
	*/