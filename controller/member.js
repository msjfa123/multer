const bcrypt = require("bcrypt");
const member = require("../model/member");
const multer = require('multer');
const path = require('path');

exports.add = async(req,res,next)=>{
  console.log("000000000000000000000000000000000000000000");
  console.log(req.body);
  console.log("888888888888888888888888888888888");
    let{fullName,phoneNumber,password,age} = req.fields;
  console.log(req.fields);
  console.log(fullName);
  console.log("7777777777777777777777777777777");
  console.log(req);
  const storage = await multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __basedir + "/public/upload/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}---${path.extname(file.originalname)}`);
      },
    })
    
    console.log("55555555555555555");
    console.log(storage.getFilename());
  const uploadFile = multer({storage:storage}).single("save");
    console.log("666666666666666666666666");
    console.log(req.file);
    console.log("999999999999999999999999999999999999999999999999");
    console.log(storage.filename);

  await member.create({
    fullName:fullName,
    phoneNumber:phoneNumber,
    password:password,
    age:age,
    imageName:storage.filename()
  })

  console.log("33333333333333333333333333333333333333333");

  return res.status(200).json({message:"okey"})
}