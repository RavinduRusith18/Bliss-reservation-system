const { default: mongoose } = require("mongoose");
mongoose.set('strictQuery', true);

var mongoURL = 'mongodb+srv://ravindurusith:25994@cluster0.ln9mbtf.mongodb.net/Hotelsunbay'

mongoose.connect(mongoURL ,{useUnifiedTopology : true ,useNewUrlParser : true ,})



var connection = mongoose.connection

connection.on('error', ()=> {
    console.log('MongDB Connection Failed')
})

connection.on('connected' , ()=>{
    console.log('MongoDB Connection Successful')
})

module.exports  = mongoose