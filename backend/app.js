server = require("./server")

mongoConnection = require("./src/mongo/mongoConnection")
Home = require("./src/mongo/mongoHome")

mongoConnection.connect( (db) => {

    clienteHome = new Home ("clientes",db)
    choferHome = new Home("choferes",db)
    // clienteHome.insert({nombre:"alondra",razonsocial:"programacion",email:"@alondra"})
    // choferHome.insert({nombre:"nicanor",dni:"23444555",enviaje:"true"})

    server.register(clienteHome)
    server.register(choferHome)
  
    server.init();

})

