let toEnglishText = require("./toEnglishText");
let toIndianText = require("./toIndianText");

function numberToText(num, language,isCurrency) {
    let lang = new Array("indian", "english"); //make in lower case
    let stringValue = "This is a String";


    if(isNaN(num))
        return "Invalid number.";

    if(num < 0)
        return "Please enter +ve number only.";

    if(isBlank(language) || isNull(language))
        language = "indian";

    if (typeof language !== typeof stringValue)
        return "Please enter valid type.";


    if(lang.indexOf(language.toLowerCase()) === -1)
        return "Support for type: " + language + " is not available. Available types are: " + lang.toString();

    return toText(num,language,isCurrency); //currently supports for Indian number conversions
}

function isNull(varIsNull){return (typeof varIsNull === 'undefined'); }

function isBlank(str) {return (!str || /^\s*$/.test(str));}

function toText(num,type,isCurrency){

    let res;
    let fract_part = Math.round(frac_one(num)*100);
    let fract_num  = "";

    switch (type.toLowerCase()) {

        case "indian":
            if(fract_part > 0)
            {
                if(isCurrency)
                    fract_num =  "And "+ toIndianText(fract_part,isCurrency) + " Paise" ;
                else
                    fract_num =  " Point "+ toIndianText(fract_part,isCurrency);
            }

            if(isCurrency)
                res = toIndianText(num,isCurrency) + " Rupee " + fract_num+" only";
            else
                res = toIndianText(num,isCurrency) + fract_num;
            break;
        case "english":
            if(fract_part > 0)
            {
                if(isCurrency)
                    fract_num =  "And "+ toEnglishText(fract_part,isCurrency) + " Cent" ;
                else
                    fract_num =  " Point "+ toEnglishText(fract_part,isCurrency);
            }

            if(isCurrency)
                res = toEnglishText(num,isCurrency) + " Dollar " + fract_num+" only";
            else
                res = toEnglishText(num,isCurrency) + fract_num;
            break;
    }
    return res;
}

function frac_one(num) {return num % 1;}

module.exports = numberToText;
