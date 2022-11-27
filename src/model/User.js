const mongoose = require('mongoose');

const dbUrl = "mongodb+srv://admin:anantha7162@cluster0.xnoz4v4.mongodb.net/lib";
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(dbUrl, connectionParams)
    .then(() => {
        console.log("UserData Database connected");
    })
    .catch(() => {
        console.log("error");
    })

const Schema = mongoose.Schema;

var NewCredentialSchema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String


});

var UserData = mongoose.model('userdata', NewCredentialSchema); //UserData is the model and NewBookData is the schema

module.exports = UserData;