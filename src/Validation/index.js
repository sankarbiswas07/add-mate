
//Check array has duplicate content or not | return boolean | O(n)
function hasDupInArray(arr){
    let counts = [];
    if(arr.length > 0){
        for(let i = 0; i <= arr.length; i++) {
            if(counts[arr[i]] === undefined) {
                counts[arr[i]] = 1;
            } else {
                return true;
            }
        }
        return false;
    }else{
        return false;
    }
}

//Check whether pagination object is valid or not | return boolean | helpers.isValidPagination(JSON.parse(req.query.input).pagination) | O(1)
function isValidPagination  (pagination){
    if(typeof pagination==="object" && pagination.hasOwnProperty("status")){
        if(pagination.status){
            return !! (
                this.hasAllProperties(pagination,["limit","offset"])
                && this.isPosWhole(pagination.limit)
                && this.isPosWhole(pagination.offset)
            );
        }else{
            return true;
        }
    }else{
        return ("param.status should be boolean , if status is true offset & limit should be positive int");
    }
}

//if Exist return data else null instate of undefined
function isExist(item, returnType){
    let itemReturn = returnType;
    if(item !== undefined){
        itemReturn = item;
    }
    return itemReturn;
}

//property array is exist in object | return boolean
function hasAllProperties(obj,propsArray){
    for (let i = 0; i < propsArray.length; i++) {
        if (!obj.hasOwnProperty(propsArray[i]))
            return false;
    }
    return true;
}

//Array container validation
function isValidArray(array, type){
    switch(type){
        case "number":
            for (let i=0;i < array.length; i++){
                if (typeof array[i] !== "number" && !Number.isSafeInteger(array[i]) && !array[i] > 0)
                    return false;
            }
            break;
        default:
            for (let i=0;i < array.length; i++){
                if (typeof array[i] !== type)
                    return false;
            }
    }
    return true;
}

//Positive Whole number
function isPositiveWhole(input){
    if(typeof input==="number"){
        return !!(Number.isSafeInteger(input) && input >= 0);
    }else{
        return("number expected");
    }
}

//Negative Whole number
function isNegativeWhole(input){
    if(typeof input==="number"){
        return !!(Number.isSafeInteger(input) && input < 0);
    }else{
        return("number expected");
    }
}

//Positive fraction number
function isPositiveFrac(input){
    if(typeof input==="number"){
        return !!(!Number.isSafeInteger(input) && input >= 0);
    }else{
        return("number expected");
    }
}

//Negative fraction number
function isNegativeFrac(input){
    if(typeof input==="number"){
        return !!(!Number.isSafeInteger(input) && input < 0);
    }else{
        return("number expected");
    }
}

//string contains strings
function isContain(input, part){
    if(typeof input==="string" && typeof part==="string"){
        return !!(input.indexOf(part) !== -1);
    }else{
        return("String expected");
    }
}

//export
module.exports = {
    hasDupInArray:hasDupInArray,
    isValidPagination:isValidPagination,
    isExist:isExist,
    hasAllProperties:hasAllProperties,
    isValidArray:isValidArray,
    isPosWhole:isPositiveWhole,
    isNegWhole:isNegativeWhole,
    isPosFrac:isPositiveFrac,
    isNegFrac:isNegativeFrac,
    isContain:isContain
};