express = require("express");
bodyParser = require("body-parser");
cors = require("cors")
var server= express();
var morgan= require("morgan");
server= server.use(morgan(`dev`));
var path = require("path");
var homes = {}


function register(home) {
  console.log(` registering handlers for ${home.type}`)
  homes[home.type] = home 
}

function init() {
  server.set('port',process.env.PORT||8889)
  server.use(express.json())
  server.use(cors())
 
  server.use("(/:type/*)|(/:type)", (req, res, next) => {
      if (!homes[req.params.type]) {
          console.log(` home de ${req.params.type} no existe`  )
          res.status(404).end()
      }
      else {
        console.log(` home de ${req.params.type} si existe `  )
        next()
      }
  })
  
  server.get("/:type", (req, res) => {
    home = homes[req.params.type]
    home.all((allObjects) => {
        res.json(allObjects) 
        res.end() })       
  })

  server.get("/:type/:id", (req, res) => {
    home = homes[req.params.type]
    home.get(req.params.id, (myObject) => { 
      res.json(myObject) 
      res.end() })  
  })

  server.put("/:type", (req, res) => {
    home = homes[req.params.type]
    home.update(req.body)
    res.status(204).end();  
  })

  server.post("/:type", (req, res) => {
    home = homes[req.params.type]
    home.insert(req.body)
    res.status(204).end();  
  })

  server.delete("/:type/:id", (req, res) => {
    home = homes[req.params.type]
    home.delete(req.params.id)
    res.status(204).end();  
  });

  server.listen(server.get('port'), () => {
    console.log(`Server on port ${server.get('port')}`);
  });
}

exports.init = init;
exports.register = register;
