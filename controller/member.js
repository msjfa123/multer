const bcrypt = require("bcrypt");
const member = require("../model/member");
const multer = require('multer');
const path = require('path');

exports.add = async(req,res,next)=>{
  // let{fullName,phoneNumber,password,age} = req.fields

  // await member.create({
  //   fullName:fullName,
  //   phoneNumber:phoneNumber,
  //   password:password,
  //   age:age,
  //   imageName:storage.filename()
  // })
  return res.status(200).json({message:"okey"})
}