let NumberToText = require("./NumberToText");
let NumericCalculation = require("./NumericCalculation");
let array=require("./Array");
let object = require("./Object");
let string = require("./String");
let mixed = require("./Mixed");
let Password = require("./Password");
let Sort = require("./Sort");


//exports
module.exports = Object.assign(
    {},
    array,
    mixed,
    object,
    string,Sort,
    Password,
    NumericCalculation,
    NumberToText
);