class StartUp{
    constructor({Server}){
        this._server = Server;
    }
    async startUp(){
        await this._server.start();
    }
}
module.exports = StartUp;