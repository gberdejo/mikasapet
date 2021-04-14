const express = require('express');
const { Router} = require('express');

const path = require('path');
const cors = require('cors');
const morgan = require('morgan');


module.exports = function(){
    const router = Router();
    router.use(morgan('dev'));
    router.use(cors());
    router.use(express.json());
    router.use(express.urlencoded({extended:false}));
    router.use(express.static(path.join(ROOT_PATH,'public')));
    return router;
}