server = require("./server")

mongoConnection = require("./src/mongo/mongoConnection")
Home = require("./src/mongo/mongoHome")
Chofer = require("./src/chofer")
Cliente = require("./src/cliente")

mongoConnection.connect( (db) => {
   // clienteHome = new Home("clientes", db)
   // seferino = new Cliente("seferino","marroquineria")
   // clienteHome.insert(seferino) 
   

    server.register(clienteHome)
   
    server.init();

})

