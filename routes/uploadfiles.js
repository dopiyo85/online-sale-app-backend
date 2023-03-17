const express = require('express')
const router = express.Router();
const upload = require('../upload');
const Product = require("../models/Product");

router.post('/upload-image/:prodId', (req,res)=>{
    let prodId = req.params.prodId;
    upload(req, res, (err)=>{
        console.log(req.file);
        if (err){
            console.log(err)
            res.render('index', {msg: err})
        }else{
            // Uncomment if you want to save the 'physical' file to the destination
        // let newImage = new Image({
        //      name:req.file.originalname,
        //      path:'/public/images/'+ req.file.originalname,
        //      date:Date.now()
        //  }) 

        // Update image name on the product already uploaded
         Product.findOne({_id: prodId}, (err, data)=>{
            data.image = req.file.originalname;
            data.save();
        })
        //  newImage.save();
    console.log(req.file);
    res.send("Upload success!")
        }
    })
 })

module.exports  = router;