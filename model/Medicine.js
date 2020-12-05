const mongoose=require('mongoose');

const medSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true,
        max:255
        
    },
    email: {
        type: String,
        required: true,
        max:255,
        min:6
    },
    date:{
        type: String,
        required:true,
        max:100,
        min:4
  
    }, med:{
        type:String,
        required:true,
        max:1000,
        min:1
            
    },
    m:{
        type: String,
        required:true
    },
    a:{
        type: String,
        required:true
    },
    n:{
        type: String,
        required:true
    },
    days:{
        type:String,
        required:true
    }   

});


module.exports=mongoose.model('Med', medSchema);