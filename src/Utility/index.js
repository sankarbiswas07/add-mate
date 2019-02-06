let NumberToText = require("./NumberToText");
let NumericCalculation = require("./NumericCalculation");
let array=require("./Array");
let object = require("./Object");
let string = require("./String");
let mixed = require("./Mixed");
let Password = require("./Password");


//exports
module.exports = Object.assign(
    {},
    array,
    mixed,
    object,
    string,
    Password,
    NumericCalculation,
    NumberToText
);