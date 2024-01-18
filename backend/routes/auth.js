const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

// sign up
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // Use the 'new' keyword to create a new instance of the User model
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({
            username: username,
            email: email,
            password: hashedPassword,
        });

        // Save the user to the database
        await user.save().then(() => {
            res.status(200).json({ message:"User Signup successfully!" });
        });
    } catch (error) {
        console.log(error);
        res.status(200).json({ message: 'user already exist' });
    }
});

//login 
router.post('/login', async (req, res) => {
    try {
         const user=await User.findOne({email:req.body.email});
         console.log(user)
         if(!user){
            res.status(200).json({ message: 'please sign up first' });
         }
         const isMatch = await bcrypt.compare(req.body.password, user.password);
         if(!isMatch){
            res.status(200).json({ message: 'password or email is not correct' });
         }
         const {password,...others}=user._doc;
        
            res.status(200).json({ others });
         
    } catch (error) {
        res.status(200).json({ message: 'something wrong' });
    }
});

module.exports = router;
