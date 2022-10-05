const Pool = require("pg").Pool;

const pool = new Pool({
    //setting up configurations
    user : "postgres",
    password: "26@ug2002",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;