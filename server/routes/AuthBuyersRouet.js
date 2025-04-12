import Login from "../controllers/Buyersauthentication/Login.js";
import Signup from "../controllers/Buyersauthentication/Signup.js";
 
import express from "express"
const routerBuy=express.Router();
routerBuy.post("/buyer/signup",Signup)
routerBuy.post("/buyer/login",Login)
export default routerBuy