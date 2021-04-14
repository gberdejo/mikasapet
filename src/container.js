const { asClass, createContainer, asFunction , asValue } = require('awilix');
const Server = require('./server');
const StartUp = require('./start');
const middlewares = require('./middlewares');
const router = require('./routes');
const  UserModel  = require('./models/user.model');
const { UserController } = require('./controller');
const mySqlDB  = require('./db/mysql.db');
const User = require('./schema/user.schema');
const container = createContainer();

container.register({
    app: asClass(StartUp),
    Server: asClass(Server)
})
.register({
    router: asFunction(router)
})
.register({
    middlewares: asFunction(middlewares)
})
.register({
    UserModel: asClass(UserModel)
})
.register({
    UserController: asClass(UserController)
})
.register({
    mySqlDB: asValue(mySqlDB)
})
.register({
    User: asClass(User)
})

module.exports = container;