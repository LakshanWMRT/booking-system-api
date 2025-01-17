
const express = require('express')
const router = express.Router()
const Parent = require('../models/parent');

router.route('/signup').post((req, res) => {

  

    const { 
        firstName,
        lastName,
        email,
        password,
        confirmpassword,
        nic,
        address,
        contactNumbers,
        childName,
        childSchool,
     
    } = req.body;


    var newParent = new Parent({
       
        firstName,
        lastName,
        email,
        password,
        confirmpassword,
        nic,
        address,
        contactNumbers,
        childName,
        childSchool,
        
      
    });

    newParent.save().then(() => {
        res.json("Parent Added.");
    }).catch((err) => {
        res.send(err);
    });
})

router.route('/').get((req, res) => {
    Parent.find().then((parent) => {
        res.json(parent);
    }).catch((err) => {
        res.send(err);
    });
})

router.route('/update/:id').put((req, res) => {
    var parentId = req.params.id;
    const { 
        firstName,
        lastName,
        email,
        password,
        confirmpassword,
        nic,
        address,
        contactNumbers,
        childName,
        childSchool,
      
       
    } = req.body;
    var updateParent = {
        firstName,
        lastName,
        email,
        password,
        confirmpassword,
        nic,
        address,
        contactNumbers,
        childName,
        childSchool,
    
       
    };
    var update = Parent.findByIdAndUpdate(parentId, updateParent).then((update) => {
        res.json(update);
    }).catch((err) => {
        res.send(err);
    });
})

router.route('/delete/:id').delete((req, res) => {
    var parentId = req.params.id;
    Parent.findByIdAndDelete(parentId).then((parent) => {
        res.json(parent);
    }).catch((err) => {
        res.send(err);
    });
})

router.route('/:id').get((req, res) => {
    var parentId = req.params.id;
    Parent.findById(parentId).then((parent) => {
        res.json(parent);
    }).catch((err) => {
        res.send(err);
    });
})

module.exports = router;
