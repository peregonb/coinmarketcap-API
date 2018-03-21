$.get("https://api.coinmarketcap.com/v1/ticker/", function (data, status) {
    for (var i = 0; i < data.length - 1; i++) {
        if (data[i].id == "bitcoin") {
            $("#my_cell11").html(data[i].name);
            $("#my_cell12").html(data[i].symbol);
            $("#my_cell13").html(data[i].price_usd);
            $("#my_cell14").html(data[i].market_cap_usd);
        }
        else if (data[i].id == "ethereum") {
            $("#my_cell21").html(data[i].name);
            $("#my_cell22").html(data[i].symbol);
            $("#my_cell23").html(data[i].price_usd);
            $("#my_cell24").html(data[i].market_cap_usd);
        }
    }
});
