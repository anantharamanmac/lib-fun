const mongoose = require('mongoose');
const dbUrl = "mongodb+srv://admin:anantha7162@cluster0.xnoz4v4.mongodb.net/lib";
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(dbUrl, connectionParams)
    .then(() => {
        console.log("Book Database connected");
    })
    .catch(() => {
        console.log("error");
    })

const Schema = mongoose.Schema;

var NewBookSchema = new Schema({
    name: String,
    author: String,
    imageUrl: String,
    description: String
});

var BookData = mongoose.model('books', NewBookSchema);

module.exports = BookData;