require('dotenv').config();
const container = require('./src/container');
const path = require('path');
global.ROOT_PATH = require('app-root-path').toString();
global.ROOT_PATH_VIEWS = path.join(ROOT_PATH,'src/views');
const app = container.resolve('app');
app.startUp().catch(err=>{
    console.log(err);
    process.exit;
});