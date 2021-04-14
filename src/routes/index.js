const { Router } = require('express');

module.exports = function({middlewares,UserController}){
    const router = Router();
    router.use(middlewares);

    router.get('/',UserController.getHome.bind(UserController));
    router.get('/users',UserController.getUsers.bind(UserController));

    router.post('/users',UserController.createUsers.bind(UserController));
    router.put('/users/:id',UserController.updateUsers.bind(UserController));
    router.delete('/users/:id',UserController.deleteUsers.bind(UserController));
    return router;
}