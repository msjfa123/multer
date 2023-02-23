const multer = require('multer');


const imageFilter = (req, file, cb) => {
    if (file.mimetype == "image/png") {
      cb(null, true);
    } else {
      cb("Please upload only images.", false);
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null,"./public/upload/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}---${file.originalname}`);
      },
    })

const uploadfile = multer({storage:storage,fileFilter:imageFilter}).any("save");

uploadfile((req,res,file)=>{

})

module.exports=uploadfile;


 

  