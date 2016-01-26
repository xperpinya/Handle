$(document).ready(function() {

    var source = $("#beer-template").html();
    
    var template = Handlebars.compile(source);
    
	// This is just static sample data.  In a practical situation, this would be replaced with a database operation.
    var data = {beers: [
      {name: "Guinness", type: "Stout", website: "http://www.guinness.com"},
      {name: "Fat Tire", type: "Amber Ale", website: "http://www.newbelgium.com"},
      {name: "Sierra Nevada", type: "Pale Ale", website: "http://www.sierranevada.com/beer"}
    ]};
    
    var outMarkup = template(data);
    
    $("#beer-list").append(outMarkup);
    //document.getElementById("beer-list").innerHTML = outMarkup;
});