const { Router } = require('express');
const session = require('express-session');
const flash = require('connect-flash');

module.exports = function({middlewares,UserController}){
    const router = Router();

    router.use(middlewares);
    router.use(session({
        secret: 'mysecretkey',
        resave: false,
        saveUninitialized: false
    }));

    router.use(flash());
    router.use((req, res, next) => {
        //router.locals.messages = req.flash('success');
        console.log(req.session.user_data);
        next();
    });

    //paginas
    router.get('/',UserController.pagHome.bind(UserController));
    router.get('/login',UserController.pagLogin.bind(UserController));
    router.get('/registrar',UserController.pagRegistrar.bind(UserController));

    //peticiones POST GET PUT DELETE
    router.post('/users',UserController.createUsers.bind(UserController));
    router.post('/session',UserController.getSession.bind(UserController));
    return router;
}