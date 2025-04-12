 
 import express from "express"
 import LoginAuth from "../controllers/Authentication/LoginController.js";
 import changepassword from "../controllers/Authentication/Passworduser.js"
 import Signup from "../controllers/Authentication/SignupController.js"
 import ProtectionMiddleware from "../middleware/protectControoller.js";
 const router=express.Router();
 router.post("/login",LoginAuth);
 router.post("/sign",Signup)
 router.post("/changepassword",ProtectionMiddleware,changepassword)
 export default router;
 