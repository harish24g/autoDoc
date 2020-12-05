const router = require('express').Router();
const bcrypt=require('bcryptjs');
const {doctorValidation} = require('../validation');
const Doc=require('../model/Doc');

router.get('/docdash',(req,res)=>{
    res.render('prescription.ejs');
});

 //DocDash
 router.post('/Docdash', async (req,res) =>{
     //basic validation
    const {error}=doctorValidation(req.body);
   
    if(error) return res.status(400).send(error.details[0].message);

     //new prescription
     const doc= new Doc({
        name:req.body.name,
        email:req.body.email,
        med:req.body.med
    });
    try{
        const savedUser= await doc.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
 });

 router.get('/patientdash/:email', async (req,res)=>{
    const pres = await Doc.find({email : req.params.email});
    // res.send(pres);
    res.render("patient.ejs",{pres : pres});

});


module.exports = router;