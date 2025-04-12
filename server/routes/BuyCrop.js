import express from "express";
 import BuyCrop from "../controllers/BuyersAccount/Buy_crop.js";
 import ProtectionBuyer from "../middleware/ProtectionButmiddlware.js";
import Buy_place_crop from "../controllers/BuyersAccount/Buy_place_cropName_quantity.js";
 import buy_quantity from "../controllers/BuyersAccount/Buy_quantity.js";
 import GetBuyerInfo from "../controllers/BuyersAccount/Buyersinfo.js";
 import Onlycrop from "../controllers/BuyersAccount/Buyonlycrop.js";
const router123=express.Router();
router123.post("/crop/place/location",ProtectionBuyer,BuyCrop)
router123.post("/crop/place/quantity/location",ProtectionBuyer,Buy_place_crop)
router123.post("/crop/quantity/name",ProtectionBuyer,buy_quantity)
router123.get("/buyer/info",ProtectionBuyer,GetBuyerInfo)
router123.post("/crop",ProtectionBuyer,Onlycrop)
export default router123