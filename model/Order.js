const mongoose=require('mongoose');

const orderSchema= new mongoose.Schema({
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
    med:{
        type:String,
        required:true,
        max:1000,
        min:1
            
    },
    location:{
        type:String,
        required:true,
        max:1000,
        min:1
            
    },
    
    dateoforder:{
        type: Date,
        default:Date.now
    }
});


module.exports=mongoose.model('Order', orderSchema);