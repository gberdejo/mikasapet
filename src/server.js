const express = require('express');
const path = require('path');
const express_handlebars = require('express-handlebars');
class Server{
    constructor({router}){
        this._port = process.env.PORT;
        this._server = express();
        this._server.use(router);
    }
    start(){
        //this._getConnection();
        this._server.engine('hbs',express_handlebars({
            defaultLayout:'main',
            layoutsDir: path.join(ROOT_PATH_VIEWS,'layouts'),
            partialsDir: path.join(ROOT_PATH_VIEWS,'partials'),
            extname:'hbs'
        }));
        this._server.set('view engine', 'hbs');
        
        return new Promise((resolve)=>{
            const http = this._server.listen(this._port,()=>{
                const { port } =http.address();
                console.log("Server on in Port: " + port);
            });
            resolve();
        });
    }
}
module.exports = Server;