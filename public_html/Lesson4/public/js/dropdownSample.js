$(document).ready( function() {
    var source = $("#beerDropdownTemplate").html();
    
    var template = Handlebars.compile(source);
    
    
    // This is just static sample data.  In a practical situation, this would be replaced with a database operation.
    var data = {beers: [
        {name: "Guinness", type: "Stout", website: "http://www.guinness.com", description: "Super delicious.  Better get a draught or it's not a Guinness."},
        {name: "Fat Tire", type: "Amber Ale", website: "http://www.newbelgium.com", description: "My favorite Amber Ale.  Plus the picture is cool."},
        {name: "Sierra Nevada", type: "Pale Ale", website: "http://www.sierranevada.com/beer", description: "The best Pale Ale.  Need I say more?"},
    ]};
    
    var outMarkup = template(data);
     
    $("#menuItems").append(outMarkup);
    
    $(".dropdown-toggle").dropdown("toggle");
});