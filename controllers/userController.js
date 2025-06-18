const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/config');

const userController = {
    register: async (req, res) => {
        try {
            // get the details from the request body
            const { username, email, password } = req.body;

            // check if the user already exists
            const user = await User.findOne({ email });

            if (user) {
                return res.status(500).json({ message: 'User already exists' });
            }

           /* const hashedPassword = await bcrypt.hash(password, 10);*/

            // create a new user model object
            const newUser = new User({
                username,
                email,
                password 
            });

            // save to the database
            await newUser.save();

            // send a response back to the client
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error("❌ Registration failed:", error); // LOG THE ERROR
            res.status(500).json({ message: 'Registration failed', error: error.message });
        }
    },
    login: async (req, res) => {
        try {
            // get the data from the request body
            const { email, password } = req.body;

            // check if the user exists
            const user = await User.findOne({ email });
            console.log(user);

            if (!user) {
                return res.status(401).json({ message: 'Invalid email' });
            }

            // check if the password is correct
            const isMatch = await user.comparePassword(password);

            // isMatch either true or false
            // true -> password is correct
            // false -> password is incorrect
            if (!isMatch) {
                console.log("❌ Invalid password for:", email);
                return res.status(401).json({ message: 'Invalid password' });
            }

            // create a token for the user
            const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1hr' });

            // send a response back to the client
            res.status(200).json({ message: 'Login successful', token });
        } catch (error) {
            res.status(500).json({ message: 'Login failed' });
        }
    },
    logout: async (req, res) => {
        try {
            res.status(200).json({ message: 'User logged out successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Logout failed' });
        }
    },
    me:  async (req, res) => {
        try {
           
             // get the userId to search for data in the database
             const userId = req.userId;

            // find the user in the database
            const user = await User.findById(userId).select('-password -__v -createdAt -updatedAt');

            // check if the user exists
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // send the user details back to the client
            res.status(200).json({ message: 'User profile retrieved', user });
        } catch (error) {
            res.status(500).json({ message: 'Failed to retrieve user profile' });
        }
    }
}

module.exports = userController;