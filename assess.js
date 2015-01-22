var express = require( 'express' );
var app = express();

app.get( '/', function ( req, res ) {
	res.render( 'ajaxRequest.ejs', {
	} );
} );

app.get( '/salad', function ( req, res ) {



	var salad = {
		name: "Basic Salad",
		ingredients: ["Lettuce", "Tomatoes", "Chicken", "Cheese", "Croutons"]
	}
	

		

		
		res.json({results: salad})
		console.log(salad);
	} )


app.listen( 3000 );

console.log( 'listening on port 3000!' );