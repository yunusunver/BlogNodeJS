const express=require('express'),
      User=require("../models/userModel"),
      passport=require("passport"),
      router=express.Router();


let adminActions=[
    {
        actionId:"1",
        actionName:"change homepage",
        displayName:"change homepage ımage"
    },
    {
        actionId:"2",
        actionName:"change homepage",
        displayName:"change about ımage"
    },
    {
        actionId:"3",
        actionName:"change homepage",
        displayName:"change about text"
    },
    {
        actionId:"4",
        actionName:"change homepage",
        displayName:"add new blog"
    },
    {
        actionId:"5",
        actionName:"change homepage",
        displayName:"list all blogs"
    },
]
router.get("/admin",isLoggedIn,(req,res)=>{
    res.render("../views/admin/admin",{adminActions:adminActions});
})


router.get("/signin",(req,res)=>{
    res.render("admin/signin");

});

router.post("/signin",passport.authenticate("local",
    {
        successRedirect:"/",
        failureRedirect:"/signin"
    }
),(req,res)=>{});

router.get("/signup",isLoggedIn,(req,res)=>{
    res.render("admin/signup");
});

router.post("/signup",isLoggedIn,(req,res)=>{
    let newUser=new User({username:req.body.username});
    User.register(newUser,req.body.password,(err,user)=>{
        if (err) {
            console.log(err);
            res.redirect("/signup");
        }
        passport.authenticate("local")(req,res,()=>{
            res.redirect("/");
        })
    })
});

router.post("/signup",(req,res)=>{
    
});


router.get("/signout",(req,res)=>{
req.logout();
res.redirect("/");
});

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/signin");
}

module.exports=router;