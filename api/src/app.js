const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')

class App{

  constructor(){
    this.server = express();
    this.server.set('view engine', 'ejs'); 
    this.server.set('views','./src/views')    
    this.server.use(expressLayouts);          
    this.server.use(bodyParser.urlencoded({extended: true}));
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(express.json());
  }

  routes(){
    this.server.use(routes);
  }

}

module.exports = new App().server;