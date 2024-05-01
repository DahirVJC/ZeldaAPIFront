function searchPkmn(buscar, operacion){
    if (buscar == "") {
        $("#pkmn").html('');
        $("#pkmn").append("Introduzca el ID de un Pokemon")
        return;
    }
    let apiLink = ""
    $('#chkApi').is(":checked") ? apiLink = "http://localhost:4444/pokemon/find/" : apiLink = "https://pokeapi.co/api/v2/pokemon/"
    $("#pkmn").html('');
    $.ajax({
        method: 'GET',
        url: apiLink + buscar,
        dataType: 'JSON',
        contentType: 'application/json',
        success: function (pokemon) {
            if (pokemon) {
                console.log("data", pokemon);
                pkmnPresentation = ""
                $('#chkApi').is(":checked") ? pkmnPresentation = customApi(pokemon) : pkmnPresentation = defaultApi(pokemon)
                $("#pkmn").append(pkmnPresentation);
                $("#pkmn").append(operacion)
            } else {
                $("#pkmn").append("ID no valida");
            }
        },
        error: function () {
        }
    });
}

function defaultApi(pokemon) {
    var tipos = typesButtons(pokemon);
    return (
        "<tr>" +
            "<td colspan='3' style='font-weight: bold;'>" + pokemon.name + " #" + pokemon.id + "</td>" +
        "</tr>" +
        "<tr>" +
            "<td rowspan='2'>" +
                "<img src='" + pokemon.sprites.front_default + "'/>" +
            "</td>" +
            "<td> Tipos:<br>" + tipos + "</td>" +
            "<td> Tamaño:<br>" + pokemon.height + "0 cm, " + pokemon.weight + "00 g</td>" +
        "</tr>" +
        "<tr>" +
            "<td> Habilidad:<br>" + pokemon.abilities[0].ability.name + "</td>" +
        "</tr>" +
        "<tr>" +
            "<td style='vertical-align: text-top;'> Base stats: </td>" +
            "<td colspan='2'>" +
                "<br>" +
                pokemon.stats[0].stat.name + ": " + pokemon.stats[0].base_stat + "<br>" +
                pokemon.stats[1].stat.name + ": " + pokemon.stats[1].base_stat + "<br>" +
                pokemon.stats[2].stat.name + ": " + pokemon.stats[2].base_stat + "<br>" +
                pokemon.stats[3].stat.name + ": " + pokemon.stats[3].base_stat + "<br>" +
                pokemon.stats[4].stat.name + ": " + pokemon.stats[4].base_stat + "<br>" +
                pokemon.stats[5].stat.name + ": " + pokemon.stats[5].base_stat + "<br>" +
                "Total: " + (pokemon.stats[0].base_stat + pokemon.stats[1].base_stat + pokemon.stats[2].base_stat + pokemon.stats[3].base_stat + pokemon.stats[4].base_stat + pokemon.stats[5].base_stat) + "<br>" +
            "</td>" +
        "</tr>"
    );
}
function typesButtons(pokemon){
    var tipos = pokemon.types.length < 2 ?
        "<button style='font-family:JetBrains Mono; background-color: " + pokemonTypesColors[pokemon.types[0].type.name] + "; color: black; border: none; border-radius: 10px'>" +
            pokemon.types[0].type.name +
        "</button>" :
        "<button style='font-family:JetBrains Mono; background-color: " + pokemonTypesColors[pokemon.types[0].type.name] + "; color: black; border: none; border-radius: 10px'>" +
            pokemon.types[0].type.name +
        "</button>" + " " +
        "<button style='font-family:JetBrains Mono; background-color: " + pokemonTypesColors[pokemon.types[1].type.name] + "; color: black; border: none; border-radius: 10px'>" +
            pokemon.types[1].type.name +
        "</button>";
    return tipos;
}

function customApi(pokemon) {
    return (
        "<tr>" +
            "<td colspan='3' style='font-weight: bold;'>" + pokemon.nombre + " #" + pokemon.id + "</td>" +
        "</tr>" +
        "<tr>" +
            "<td rowspan='2'>" +
                "<img src='" + pokemon.urlSprite + "'/>" +
            "</td>" +
        "</tr>" +
        "<tr/>" +
        "<tr>" +
            "<td>" + pokemon.tipo + "</td>" +
        "</tr>"
    );
}