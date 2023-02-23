const bcrypt = require("bcrypt");
const member = require("../model/member");
const multer = require("multer");
const path = require("path");
// const {uploadfile} = require('../middlewares/upload');

exports.add = async (req, res, next) => {
  console.log("55555555555555555555555555555555555555555");

  const imageFilter = (req, file, cb) => {
    if (file.mimetype == "image/png") {
      cb(null, true);
    } else {
      cb("Please upload only images.", false);
    }
  };

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/upload/");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}---${file.originalname}`);
    },
  });

 

  const  uploadfile = multer({
    storage: storage,
    fileFilter: imageFilter,
  }).single("save");

  uploadfile(req, res, (err) => {
    if (err) {
      res.send(err);
    } else {
      if (req.file) {
        let { fullName, phoneNumber, password, age } = req.body;
        member.create({
          fullName: fullName,
          phoneNumber: phoneNumber,
          password: password,
          age: age,
          imageName:req.file.filename
        });
        return res.status(200).json({message:"uploaded"});
      } else {
        return res.send("nooo");
      }
    }
  });

};
