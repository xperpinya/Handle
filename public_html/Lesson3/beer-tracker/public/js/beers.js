$(document).ready( function() {

	loadAllBeers();
	
	function loadAllBeers() {
		dpd.beers.get( function(beers, error) { //Use dpd.js to access the API
			$('#beer-list').empty(); //Empty the list
			beers.forEach( function( beer) { //Loop through the result
				appendBeer( beer); //Add it to the DOM.
			});
			var source = $( '#beer-template').html();
    
    		var template = Handlebars.compile( source);

    		var outMarkup = template( myBeers);
    
    		$( '#hbs-beer-list').append( outMarkup);
		});
		$.get( 'http://localhost:2403/beers', function(data, status){
			console.log('get request to beers' + data);
		});
	}

	function appendBeer( beer) {
		$( '<div class="well">')
			.append('<div class="beer">Name: ' + beer.name + '</div>')
			.append('<p>Type: ' + beer.type + '</p>')
			.append('<p>Website: ' + beer.website + '</p>')
			.append('<p>Description: ' + beer.description + '</p>')
			.appendTo('#beer-list');
	}

    // var myBeers = [];
    // console.log('Declared myBeers');

    // dpd.beers.get( function( beers, error){
    // 	beers.forEach( function( beer){
    // 		console.log( beer.name);
    // 		myBeers.push( new Object( beer));
    // 	});
    // 	myBeers.forEach( function( myBeer){
    // 		console.log( myBeer.name);
    // 	});
    // });
});