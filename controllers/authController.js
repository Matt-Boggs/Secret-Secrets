const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('../models/user');

module.exports = {
    register: async function(req, res) {
        console.log(res.body)
        try{
            let { email, password, passwordCheck, displayName } = req.body
    
            // validate
    
            if (!email || !password || !passwordCheck) {
                return res.status(400).json({msg: 'not all fields have been filled'});
            };
            if (password.length < 5) {
                return res.status(400).json({msg: 'password must be at least 5 characters'})
            };
            if (password !== passwordCheck) {
                return res.status(400).json({msg: 'passwords must match for verification'})
            };
            const existingUser = await User.findOne({email: email})
            if (existingUser) {
                return res.status(400).json({msg: 'account with this email already exists'})
            };
            if (!displayName) {displayName = email};
    
            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(password, salt)
    
            const newUser = new User({
                email,
                password: passwordHash,
                displayName
            });
            const savedUser = await newUser.save();
            res.json(savedUser);
    
            
        } catch (err) {
            res.status(500).json({error: err.message});
        }
    },
    login: async function(req, res) {
        try {
            const { email, password } = req.body;
    
            // validate
            if (!email || !password){
                return res.status(400).json({msg: 'not all fields have been filled'});
            }
            const user = await User.findOne({email: email});
            if (!user) {
                return res.status(400).json({msg: "no account with that email found"})
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({msg: 'invalid password'});
            }
    
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
            res.json({
                token,
                user: {
                    id: user._id,
                    displayName: user.displayName,
                    email: user.email,
                }
            })
    
        } catch (err) {
            res.status(500).json({error: err.message})
        }
    }
    
};