const bcrypt = require("bcrypt");
const member = require("../model/member");
const multer = require('multer');

exports.add = async(req,res,next)=>{
  console.log("000000000000000000000000000000000000000000");
  JSON.stringify(req.fields)
  console.log(req.body);
  console.log("888888888888888888888888888888888");
    let{fullName,phoneNumber,password,age} = req.body
  

    const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __basedir + "/public/upload/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}---${file.originalname}`);
      },
    })
    const uploadFile = multer({storage:storage}).single("save");

    console.log("999999999999999999999999999999999999999999999999");

    await member.create({
      fullName:fullName,
      phoneNumber:phoneNumber,
      password:password,
      age:age,
      imageName:uploadFile.fullName
  })
}