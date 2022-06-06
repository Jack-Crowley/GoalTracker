//set up the server
const express = require( "express" );
const app = express();
const port = process.env.PORT;
const logger = require("morgan");

//set up the database
const db = require('./db/db_pool');
const fs = require('fs')



//configure Express to use EJS
app.set("views", __dirname + "/views")
app.set("view engine", "ejs")

app.use(express.urlencoded({extended : false}))

app.use(logger("dev"));

app.use(express.static(__dirname+'/public'))

app.get('/', (req, res) => {
    res.render('index');
});

const read_goals_all_sql = fs.readFileSync(__dirname + "/db/queries/init/read_goals_all_sql.sql", { encoding: "UTF-8" })
const insert_stuff_table_sql = fs.readFileSync(__dirname + "/db/queries/init/insert_goals_table.sql", { encoding: "UTF-8" });

// define a route for the stuff inventory page
app.get( "/home", ( req, res ) => {
    res.render("home");
} );


app.get('/goals', (req, res) => {
    db.execute(read_goals_all_sql, (error, results) => {
        if (error)
            res.status(500).send(error)
        else
            res.send(results)
    })
})

// define a route for the item detail page
app.get( "/folderpage", ( req, res ) => {
    db.execute(read_goals_all_sql, (error, results) => {
        if (error)
            res.status(500).send(error)
        else {
            res.render('folderpage', { inventory : results });
        }
    })
} );

const delete_goal_sql = `
    DELETE
    FROM 
        goals
    WHERE
        id = ?
`

app.get( "/folderpage/delete/:id", ( req, res ) => {
    db.execute(delete_goal_sql, [req.params.id], (error, results) => {
        if (error)
            res.status(500).send(error)
        else {
            res.redirect("/folderpage")
        }
    })
} );

app.post('/folderpage', (req, res) => {
    //req.body.name, req.body.startdate, req.body.enddate, req.body.description
    if (req.body.action == 'create') {
        db.execute(insert_stuff_table_sql, [req.body.name, req.body.startdate, req.body.enddate, req.body.description], (error, results) => {
            if (error)
                res.status(500).send(error)
            else
                res.redirect('/folderpage')
        });
    }
    else {
        db.execute(update_item_sql, [req.body.name, req.body.startdate, req.body.enddate, req.body.description, req.body.id], (error, results) => {
            if (error)
                res.status(500).send(error); //Internal Server Error
            else {
                res.redirect(`/folderpage`);
            }
        });
    }
})

// start the server
app.listen( port, () => {
    console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
} );