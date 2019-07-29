server = require("./server")

mongoConnection = require("./src/mongo/mongoConnection")
Home = require("./src/mongo/mongoHome")

mongoConnection.connect( (db) => {

    clienteHome = new Home ("clientes",db)
    choferHome = new Home("choferes",db)

    server.register(clienteHome)
    server.register(choferHome)
  
    server.init();

})

