//set up the server
const express = require( "express" );
const app = express();
const port = 8080;
const logger = require("morgan");

app.use(logger("dev"));

app.use(express.static(__dirname+'/public'))

// define a route for the default home page
app.get( "/", ( req, res ) => {
    console.log(`${req.method} ${req.url}`);
    res.sendFile( __dirname + "/views/index.html" );
} );

// define a route for the stuff inventory page
app.get( "/home", ( req, res ) => {
    console.log(`${req.method} ${req.url}`);
    res.sendFile( __dirname + "/views/home.html" );
} );

// define a route for the item detail page
app.get( "/folderpage", ( req, res ) => {
    console.log(`${req.method} ${req.url}`);
    res.sendFile( __dirname + "/views/folderpage.html" );
} );

// start the server
app.listen( port, () => {
    console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
} );