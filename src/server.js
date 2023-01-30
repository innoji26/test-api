const Hapi = require("@hapi/hapi");
const mysql = require("mysql");

const init = async() => {
    const server = Hapi.server({
        port: 3000,
        host: "localhost",
    });

    server.route({
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "Hello World!";
        },
    });

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });

    await server.start();
    console.log("Server running on %s", server.info.uri);
};

init();