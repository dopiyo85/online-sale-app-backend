const multer = require('multer');
const path = require('path');


// Set Storage engine
const storage = multer.diskStorage({
   destination: './images/',
   filename: function(req, file, cb){
       cb(null, file.originalname);
   }
})

// Initialize upload
const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000},
    fileFilter: function(req,file, cb){
        // Allowed extensions
        let fileTypes = /jpg|jpeg|png|gif/;
        // check file extension
        let extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        // check mime type
        let mimetype = fileTypes.test(file.mimetype);
       
        if (mimetype && extname){
            return cb(null, true);
        }else{
            cb('Error: Images Only!!')
        }
    }
 }).single('image');



module.exports = upload;