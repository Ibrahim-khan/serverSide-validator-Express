const { check } = require("express-validator");

exports.userRegistrationValidator = [
    check("name")
    .trim()
    .notEmpty()
    .withMessage("Name is missing")
    .isLength({min: 5})
    .withMessage("name must have al least 5 characters")
    .isLength({max: 30})
    .withMessage("name can have Maximum 30 characters")
    ,

    check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is missing")
    .isEmail()
    .withMessage("not a valid email")
    ,

    check("password")
    .trim()
    .notEmpty()
    .withMessage("Password is missing")
    .isLength({min: 8})
    .withMessage("Password must have at least 8 characters")
    ,
    check("dob")
    .trim()
    .notEmpty()
    .withMessage("Date of Birth is missing")
    .isISO8601()
    .toDate()
    .withMessage("Not a valid Date of Birth")

];

exports.userLoginValidator = [
    check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is missing")
    .isEmail()
    .withMessage("not a valid email")
    ,

    check("password")
    .trim()
    .notEmpty()
    .withMessage("Password is missing")
    .isLength({min: 5})
    .withMessage("Password must have at least 5 characters")
    
];