 const express=require("express");
 const bodyparser=require("body-parser");
 const mongoose=require("mongoose");
 const cors=require("cors");
 const app=express();
 app.use(bodyparser.urlencoded({extended:true}));
 app.use(express.urlencoded());
 app.use(express.json());
 app.use(cors());

 main().catch(err => console.log(err));

 async function main() {
   await mongoose.connect("mongodb://127.0.0.1:27017/objectdb",{useNewUrlParser:true});
  
 
   // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
 }
 const tileschema=new mongoose.Schema({
    id:Number, 
    tilename:String,
    position:[{
        x:{
         type:Number,
         required:true},
        y:{
         type:Number,
         required:true
      }

    }

    ]
 });


 const Tile=mongoose.model("Tile",tileschema );


 app.get("/",function(req,res){
    res.send("hello world");
 })
 app.get("/tile",function(req,res){

 })

 app.get("/tile:id",function(req,res){
   const id=req.params.id;
   Tile.findById(id)
   .then(data =>{
      if(!data){
         res.send({message:"tile not found"})
      }
      else{
         res.send(data)
      }
   })

 })
 app.post("/tile",function(req,res){
   if(!req.body.tilename){
      res.send({message:"The field is empty"})
   }
   else{
     const tile1=new Tile({
      id:tile1._id,
      tilename:req.body.tilename,
      position:{x:req.body.height,y:req.body.width}
     });
     tile1.save(function(err){
      if(err){
         res.send(err)
      }
      else{
         res.send({message:tilename+" added"})
      }
     })
   }

 })

 app.post("/tile:id",function(req,res){

   
 })
 app.put("/tile:id",function(req,res){
   const id=req.params.id;
   Tile.findByIdAndUpdate(id,{tilename:req.body.tilename},function(err){
      if(!err){
         res.send("successfully updated");
      }
   })

 })
 app.delete("/tile",function(req,res){
   Tile.deleteMany({})
   .then(data =>{
      res.send({message:"deleted all"})
   })
   
 })
 app.delete("/tile:id",function(req,res){
const id=req.params.id;
Tile.findByIdAndDelete(id,{tilename:req.body.tilename},function(err){
   if(!err){
      res.send({message:"deleted"})
   }
})

 })

 



 app.listen(8000,function(){
    console.log("the server has started")
 });
