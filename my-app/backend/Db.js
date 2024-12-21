const mongoose=require('mongoose')
const ConnectDB=async()=>{
    try{
        const conn=await mongoose.connect('mongodb+srv://amshu8674:<password>@cluster0.svujp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

        console.log(`MongoDB connected : ${conn.connection.host}`);

    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports=ConnectDB;