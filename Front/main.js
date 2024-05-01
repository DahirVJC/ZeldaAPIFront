$(document).ready(function () {
    $("#btnBuscar").click(function () {
        let buscar = $("#txtBuscar").val();
        searchGame(buscar);
    });
});