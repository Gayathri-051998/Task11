/*require('dotenv').config();

const app=require("./app");
const mongoose=require('mongoose')
const { MONGODB_URI } = process.env.MONGODB_URI;

mongoose.connect( MONGODB_URI)
.then(()=>{
    console.log("connected to the mongodb")
})
.catch((err)=>{
    console.log(`error connecting to the mongodd:${err.message}`)
});
app.listen(process.env.PORT,()=>{
    console.log(`Server is running @ http://127.0.0.1:3001`);
    console.log(`Press Ctrl + C to stop the server`);
})

*/

require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');

// Use directly from process.env
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3001;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`❌ Error connecting to MongoDB: ${err.message}`);
  });
