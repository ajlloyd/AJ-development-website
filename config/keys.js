
require('dotenv').config();
const mongoUsername = process.env.MONGO_USERNAME_ENV;
const mongoPassword = process.env.MONGO_PASSWORD_ENV;


module.exports = {
    mongoURI: `mongodb+srv://${mongoUsername}:${mongoPassword}@cluster0.bcrhe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
}
