const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// mongoose.set('StrictQuery', true);

const productRoute = require('./routes/productRoute');

// Initializing express
const app = express()

// Body parser middleware
app.use(express.json())
app.use(cors())

//DB config

const MONGODB_URI= process.env.MONGODB_URI ||

require('./config').mongoDB_URI

// Connect to MongoDB

mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true  })

// Check Connection

let db = mongoose.connection;

db.once('open', ()=>{

   console.log('Database connected successfully')

})

// Check for DB Errors

db.on('error', (error)=>{

   console.log(error);

   // Use Routes

 })
 app.use('/product', productRoute)  //new code
 
//  // Serve our static assets if in production
// if(process.env.NODE_ENV === 'production'){
//    // set a static folder
//    app.use(express.static('client/build'));

//    app.get('*', (req,res)=>{
//        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
//    })

// }
 
// Define the PORT
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
   console.log(`Server listening on port ${PORT}`)
})

