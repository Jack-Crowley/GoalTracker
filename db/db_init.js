const db = require('./db_connection');
const fs = require("fs");

const drop_stuff_table_sql = fs.readFileSync(__dirname + "/queries/init/drop_goals_table.sql", { encoding: "UTF-8" });
const create_stuff_table_sql = fs.readFileSync(__dirname + "/queries/init/create_goals_table.sql", { encoding: "UTF-8" });
const insert_stuff_table_sql = fs.readFileSync(__dirname + "/queries/init/insert_goals_table.sql", { encoding: "UTF-8" });
const read_stuff_table_sql = fs.readFileSync(__dirname + "/queries/init/read_goals_table.sql", { encoding: "UTF-8" });


db.execute(drop_stuff_table_sql);

db.execute(create_stuff_table_sql);

db.execute(insert_stuff_table_sql, ["Complete HI", '2022-4-26', null, "There is a description"]);
 
db.execute(insert_stuff_table_sql, ["Testings", null, null, "There is a description"]);

db.execute(read_stuff_table_sql, 
    (error, results) => {
        if (error) 
            throw error;

        console.log("Table 'goals' initialized with:")
        console.log(results);
    }
);

db.end();