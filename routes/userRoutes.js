const express= require("express");
const { signup, login, getUsers, getCurrentUser } = require("../controllers/userController");
const verifyToken=require("../middleware/authMiddleware")
const router= express.Router();



router.post("/signup",signup);
router.post("/login",login);
router.get("/",verifyToken,getUsers);
router.get("/one",verifyToken,getCurrentUser);


module.exports=router;
