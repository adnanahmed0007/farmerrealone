import express from "express";
import Data_saved from  "../controllers/SellingControllers/DataController.js"
import ProtectionMiddeware from "../middleware/protectControoller.js";
import Data_Get from "../controllers/SellingControllers/Data_Getcontrollers.js";
import Sell_data from "../controllers/SellingControllers/SellDtacontroller.js";
import Dta_crop from "../controllers/SellingControllers/Dta_crop.js";
import Detail_user from "../controllers/SellingControllers/Details.controoler.js";
import DeleteDta from "../controllers/SellingControllers/DeleteControllers.js";

const router=express.Router();
router.post("/datasell",ProtectionMiddeware,Data_saved)
router.get("/datagett",ProtectionMiddeware,Data_Get);
router.get("/selldatashow",ProtectionMiddeware,Sell_data);
router.post("/dtacrop",ProtectionMiddeware,Dta_crop)
router.get("/detailsuser",ProtectionMiddeware,Detail_user)
router.delete("/deletecrop/:id",ProtectionMiddeware,DeleteDta);
export default router