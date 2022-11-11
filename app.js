const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const mongoose=require("mongoose");
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost:27017/influenceList");
app.set('view engine','ejs');
app.use(express.static("public"));
const Service=mongoose.Schema({
    icon:String,
    title:String,
    description: String,
    linkText:String,
    link:String
})

const Influence=mongoose.model("Influence",Service);
app.get("/",(req,res)=>{
    res.render("body"); 
})

Influence.create([{
    icon:'',
    title:'',
    description:'',
    linkText:'',
    link:''
}])
app.listen(process.env.PORT || 3000,()=>{
    console.log("Server started on port 3000");
})


