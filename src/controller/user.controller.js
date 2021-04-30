class UserController{
    constructor({UserModel}){
        this._userModel = UserModel;
    }

    //Paginas
    pagHome(req,res){
        const user = req.session.user_data;
        //const user = await this._userModel.getUsers();
        const list = [{id: 1,name: "Cambo"},{id:2,name:'Mimaskot'},{id:3,name:"SuperCan"},
                    {id:4,name:"Go!"},{id:5, name:"SuperPet"}  ]
        console.log(user); 
        return res.render(ROOT_PATH_VIEWS+'/links/home',{list,user});
    }
    pagRegistrar(req,res){//formulario de registro
        return res.render(ROOT_PATH_VIEWS+'/links/registrar');
    }
    pagLogin(req,res){
        
        return res.render(ROOT_PATH_VIEWS+'/links/login');
    }

    //Peticiones 
    /*async getUsers(req,res){
        const user = await this._userModel.getUsers();
            return res.json({
                data: user
            });
    };*/
    //registro de un nuevo cliente

    createUsers(req,res){
        //const userData = await this._userModel.createUsers(req.body); 
        console.log(req.body);
        return res.redirect('/');   
    }
    getSession(req,res){
        req.session.user_data = req.body;
        const user = req.session.user_data;
        return res.render(ROOT_PATH_VIEWS+'/links/home',{user});
    }
    /*async updateUsers(req,res){
        const status = await this._userModel.updateUsers(req.params.id,req.body);
        if(status == 1){
            return res.json({success : "se actualizo"});
        }{   
            return res.json({success : "No se actualizo, los datos ya son existentes",});
        }
    };
    async deleteUsers(req,res){
        const status = await this._userModel.deleteUsers(req.params.id);
        console.log(status);
        if(status == 1){
            return res.json({success:"Se Elimino!"})
        }{
            return res.json({info:"Ya se elimino anteriormente"});
        }
    }*/


}
module.exports = UserController;