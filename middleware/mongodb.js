



const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://anantha:anantha7162@cluster0.zekofbl.mongodb.net/?retryWrites=true&w=majority',{
useNewUrlParser:true,
useunifiedtopology:true
}).then(()=>{
    console.log("mongodb connected sucessfully")
}).catch((error)=>{
    console.log(error.msg)
})
