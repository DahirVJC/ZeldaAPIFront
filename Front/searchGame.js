function searchGame(buscar){
    if (buscar == "") {
        $("#game").html('');
        $("#game").append("Introduzca el nombre de un juego")
        return;
    }
    $("#game").html('');
    $.ajax({
        method: 'GET',
        url: "https://zelda.fanapis.com/api/games?name=" + buscar,
        dataType: 'JSON',
        success: function (game) {
            if (game) {
                console.log("data", game);
                $("#game").append(defaultApi(game));
            } else {
                $("#game").append("ID no valida");
            }
        },
        error: function () {
            $("#game").append("Error");
        }
    });
}

function defaultApi(game) {
    return (
        "<tr>" +
            "<td colspan='3' style='font-weight: bold;'>" + game.data[0].name + " #" + game.data[0].id + "</td>" +
        "</tr>" +
        "<br>" +
        "<tr>" +
            "<td style='vertical-align: text-top;'> Datos: </td>" +
            "<br>" +
            "<td colspan='2'>" +
                "<br>" +
                "Desc: "+ game.data[0].description + "<br>" +
                "<br>" +
                "Desarrollador: " + game.data[0].developer + "<br>" +
                "<br>" +
                "Publicador : "+ game.data[0].publisher + "<br>" +
                "<br>" +
                "Fecha de Lanzamiento: "+ game.data[0].released_date + "<br>" +
                "<br>" +
            "</td>" +
        "</tr>"
    );
}