// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/form',{ useNewUrlParser: true, useUnifiedTopology: true })
// .then(()=>console.log('Database Connected'))
// .catch(()=>{
//     console.log("Failed to connect");
// })

const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/form';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;

db.on('error', console.error.bind(console,'connection error'));
db.once('open',function(){
    console.log("Connected to Mongodb server");
})

const loginSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model('collection1',loginSchema)

module.exports = collection