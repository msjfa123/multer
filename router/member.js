const{Router} =require('express');
const multer = require('multer');
const {add} = require('../controller/member')
const router = Router()


router.post("/rt/",add)

module.exports = router