const bcrypt = require("bcrypt");
const member = require("../model/member");

exports.add = async(req,res,next)=>{
    let{fullName,phoneNumber,password,age,imageName} = req.body

    const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __basedir + "/PUBLIC/upload/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}---${file.originalname}`);
      },
      
})
storage.filename()
const uploadFile = multer({ storage: storage });



member.create({
    fullName:fullName,
    phoneNumber:phoneNumber,
    password:password,
    age:age,
    imageName:uploadFile
})
}