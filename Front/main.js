$(document).ready(function () {

    $("#chkApi").click(function () {
        $('#chkApi').is(":checked") ? $("#crud").show() : $("#crud").hide();
    });
    $('#chkApi').is(":checked") ? $("#crud").show() : $("#crud").hide();
    
    $("#btnBuscar").click(function () {
        let buscar = $("#txtBuscar").val();
        searchPkmn(buscar,"");
    });

    $("#btnAlta").click(function(){
        formPkmn("Registro de Pokemon");
        $("#btnSubir").click(function(){
            savePkmn();
        });
    });

    $("#btnCambio").click(function(){
        let buscar = $("#txtBuscar").val();
        askChangePkmn(buscar);
        $('#pkmn').on('click', '#btnConfirmarCambiar', function() {
            formPkmn("Cambio de informacion");
            $("#btnSubir").click(function(){
                changePkmn(buscar);
            });
        });
    });

    $("#btnBaja").click(function(){
        let buscar = $("#txtBuscar").val();
        askDeletePkmn(buscar);
        $('#pkmn').on('click', '#btnConfirmarBorrar', function() {
            deletePkmn(buscar);
        });
    })
});