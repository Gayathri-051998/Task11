require('dotenv').config();

const MONGODB_URI = process.env.MONGO_URI;

const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT || 3001;

module.exports = {
    MONGODB_URI,
    JWT_SECRET,
}

