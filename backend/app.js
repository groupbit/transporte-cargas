server = require("./server")

mongoConnection = require("./src/mongo/mongoConnection")
Home = require("./src/mongo/mongoHome")
mongoConnection.connect( (db) => {
    clienteHome = new Home("clientes", db)    
    server.register(clienteHome)
    server.init();
})

