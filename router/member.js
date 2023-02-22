const{Router} =require('express');
const multer = require('multer');
const {add} = require('../controller/member')
const {uploadfile} = require('../middlewares/upload');
const router = Router()


router.post("/rt/",uploadfile,add)

module.exports = router