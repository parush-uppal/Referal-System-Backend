const express = require("express");
const { create, allUser, singleUser } = require("../controllers/user");
const { userValidtor, validate} = require("../middlewares/validator");

const router = express.Router();

router.post("/create", userValidtor, validate, create);
router.get("/allUser", allUser); 
router.get("/singleUser", singleUser); 


module.exports = router;
