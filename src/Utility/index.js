let NumberToText = require("./NumberToText");
let NumericCalculation = require("./NumericCalculation");
let array=require("./Array");
let object = require("./Object");
let string = require("./String");
let mixed = require("./Mixed");


//exports
module.exports = Object.assign(
    {},
    array,
    mixed,
    object,
    string,
    NumericCalculation,
    NumberToText
);