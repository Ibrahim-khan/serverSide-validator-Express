const express = require("express");
const { runValidation } = require("../validation/auth");
const { registerUser, loginUser } = require("../controllers/user");
const { userRegistrationValidator, userLoginValidator } = require("../validation/user");

const userRoutes = express.Router();


userRoutes.post("/register",      
    // input validation
    userRegistrationValidator,
    runValidation,
    registerUser
    );

// Login 
userRoutes.post("/login",  
    userLoginValidator,
    runValidation,
    loginUser
   );



module.exports = userRoutes;