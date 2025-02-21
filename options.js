$(function () {
    // Cargar valores almacenados
    chrome.storage.sync.get(["imgBack", "chkFondoOscuro"], function (items) {
        $("#txtImgBack").val(items.imgBack || ""); // Evita undefined
        $("#chkFondoOscuro").prop("checked", items.chkFondoOscuro || false);
    });

    // Guardar configuración
    $("#btnGuardar").click(function () {
        let imgBack = $("#txtImgBack").val();
        let chkFondoOscuro = $("#chkFondoOscuro").prop("checked");

        chrome.storage.sync.set({
            imgBack: imgBack,
            chkFondoOscuro: chkFondoOscuro
        }, function () {
            alert("Configuración guardada.");
        });
    });

    // Restablecer valores
    $("#btnReiniciar").click(function () {
        chrome.storage.sync.clear(function () {
            $("#txtImgBack").val("");
            $("#chkFondoOscuro").prop("checked", false);
            alert("Configuración reiniciada.");
        });
    });
});
