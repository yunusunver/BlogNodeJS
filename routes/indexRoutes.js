const express=require('express'),
      Blog=require("../models/blogModel"),
      router=express.Router();

 

router.get("/",(req,res)=>{
    Blog.find({},(err,foundBlogs)=>{
        if(err){
            console.log("============Error============");
        }else{
            console.log("============All Blogs============");
            console.log(foundBlogs);
            res.render("home",{foundBlogs:foundBlogs});
        }
    })
    
})
router.get("/about",(req,res)=>{
    res.render("about");
})
router.get("/contact",(req,res)=>{
    res.render("contact");
})
router.get("/resume",(req,res)=>{
    res.render("resume");
})


module.exports=router;
