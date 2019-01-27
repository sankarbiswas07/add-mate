let NumberToText = require("./NumberToText");
let NumericCalculation = require("./NumericCalculation");
let validate= require("../Validation");

//make random String
function randString(strLength){
    strLength = typeof(strLength) === "number" && strLength > 0 ? strLength : false;
    if(strLength){
        let text = "";
        let possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < strLength; i++)
            text += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
        return text;
    }else{
        return false;
    }
}

//Send Response
function response(code,status,message,data=""){
    let response = {};
    if(code){
        response.code = code;
    }
    if(status){
        response.status = status;
    }
    if(message){
        response.message = message;
    }
    if(data){
        response.data = data;
    }
    return response;
}

//Send Promise Response
function promiseResponse(status, data=""){
    let response = {};
    if(typeof (status) === "boolean"){
        response.status = status;
    } else {
        response.status = false;
    }
    response.data = data;
    return response;
}

//snake_case to camelCase
function snakeToCamel(objOrString){
    if(typeof  objOrString === "string"){
        return objOrString.replace(/_\w/g, (m) => m[1].toUpperCase() );
    }else{
        let newObj = {};
        for (let d in objOrString) {
            if (objOrString.hasOwnProperty(d)) {
                newObj[d.replace(/_\w/g, (m) => m[1].toUpperCase() )] = objOrString[d];
            }
        }
        return newObj;
    }
}

//camelCase to snake_case
function camelToSnake(objOrString){
    if(typeof  objOrString === "string"){
        return objOrString.split(/(?=[A-Z])/).join("_").toLowerCase();
    }else{
        let newObj = {};
        for (let d in objOrString) {
            if (objOrString.hasOwnProperty(d)) {
                newObj[d.split(/(?=[A-Z])/).join("_").toLowerCase()] = objOrString[d];
            }
        }
        return newObj;
    }
}

//HTML Parse
function toPlainText(htmlOrRichText){
    if(typeof htmlOrRichText==="string"){
        let rtf = htmlOrRichText.replace(/\\par[d]?/g, "");
        let text =  rtf.replace(/(\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?)|(&lt;)|(&gt;)/g, "").trim();
        let finalHTML = text.replace(/\\'[0-9a-zA-Z]{2}/g, "").trim();
        finalHTML = finalHTML.replace(/(\s<\s)|(\s<)|(<\s)/g,`<`).replace(/</g,` < `);
        return finalHTML.replace(/(\s>\s)|(>\s)|(\s>)/g,`>`).replace(/>/g,` > `);
    }else{
        return "String expected";
    }
}

//Array Union
function arrUnion(arr1,arr2,takeDuplicate=false){
    if((typeof takeDuplicate === "undefined" || typeof takeDuplicate ==="boolean") && Array.isArray(arr1) && Array.isArray(arr2)){
        let unionArr = arr1.concat(arr2);
        if(takeDuplicate === true){
            let seen = {};
            let uniqueUnion = [];
            let j = 0;
            for(let i = 0; i < unionArr.length; i++) {
                let item = unionArr[i];
                if(seen[item] !== 1) {
                    seen[item] = 1;
                    uniqueUnion[j++] = item;
                }
            }
            return uniqueUnion;
        }else{
            return unionArr;
        }
    }else{
        return ("1st and 2nd param should be arrayy 3rd parameter boolean");
    }
}

//Array Intersection
function arrIntersect(arr1,arr2,takeDuplicate=false){
    if((typeof takeDuplicate === "undefined" || typeof takeDuplicate ==="boolean") && Array.isArray(arr1) && Array.isArray(arr2)){
        let interArr = arr1.filter(function (value) {
            return -1 !== arr2.indexOf(value);
        });
        if(takeDuplicate === true){
            let seen = {};
            let uniqueIntersect = [];
            let j = 0;
            for(let i = 0; i < interArr.length; i++) {
                let item = interArr[i];
                if(seen[item] !== 1) {
                    seen[item] = 1;
                    uniqueIntersect[j++] = item;
                }
            }
            return uniqueIntersect;
        }else{
            return interArr;
        }
    }else{
        return ("1st and 2nd param should be array 3rd parameter boolean");
    }
}

//Array Difference
function arrDiff(arr1,arr2,takeDuplicate=false){
    if((typeof takeDuplicate === "undefined" || typeof takeDuplicate ==="boolean") && Array.isArray(arr1) && Array.isArray(arr2)){
        let diffArr = arr1.filter(function (value) {
            return !arr2.includes(value);
        });
        if(takeDuplicate === true){
            let seen = {};
            let uniqueDiff = [];
            let j = 0;
            for(let i = 0; i < diffArr.length; i++) {
                let item = diffArr[i];
                if(seen[item] !== 1) {
                    seen[item] = 1;
                    uniqueDiff[j++] = item;
                }
            }
            return uniqueDiff;
        }else{
            return diffArr;
        }
    }else{
        return ("1st and 2nd param should be array 3rd parameter boolean");
    }
}

//Array  symmetric difference
function arrSymDiff(arr1,arr2,takeDuplicate=false){
    if((typeof takeDuplicate === "undefined" || typeof takeDuplicate ==="boolean") && Array.isArray(arr1) && Array.isArray(arr2)){
        let diffSymArr = arr1.filter(function (x) {
            return !arr2.includes(x);
        }).concat(arr2.filter(function (x) {
            return !arr1.includes(x);
        }));
        if(takeDuplicate === true){
            let seen = {};
            let uniqueSymDiff = [];
            let j = 0;
            for(let i = 0; i < diffSymArr.length; i++) {
                let item = diffSymArr[i];
                if(seen[item] !== 1) {
                    seen[item] = 1;
                    uniqueSymDiff[j++] = item;
                }
            }
            return uniqueSymDiff;
        }else{
            return diffSymArr;
        }
    }else{
        return ("1st and 2nd param should be array 3rd parameter boolean");
    }
}

//nth Highest
function nthLargest(array,highest){
    if(Array.isArray(array) && validate.isPosWhole(highest) && array.length >= highest && highest >0){
        return array.sort(function(a, b){return b-a}).slice(highest-1, highest);
    }else{
        return ("1st param should be array , 2nd should be a largest no and smaller then array size");
    }
}

//nth Highest Range
function nthLargestRange(array,from,upto){
    if(Array.isArray(array)
        && validate.isPosWhole(from)
        && validate.isPosWhole(upto)
        && array.length >= from
        && from >0
        && upto !==0
        && upto > from){
        return array.sort(function(a, b){return b-a}).slice(from-1, upto);
    }else{
        return ("1st param should be array , 2nd should be a largest no and smaller then array size");
    }
}


//nth Smallest
function nthSmallest(array,smallest){
    if(Array.isArray(array) && validate.isPosWhole(smallest) && array.length >= smallest  && smallest >0){
        return array.sort(function(a, b){return a-b}).slice(smallest-1, smallest);
    }else{
        return ("1st param should be array , 2nd should be a largest no and smaller then array size");
    }
}

//nth Smallest Range
function nthSmallestRange(array,from,upto){
    if(Array.isArray(array)
        && validate.isPosWhole(from)
        && validate.isPosWhole(upto)
        && array.length >= from
        && from >0
        && upto !==0
        && upto > from){
        return array.sort(function(a, b){return a-b}).slice(from-1, upto);
    }else{
        return ("1st param should be array , 2nd should be a largest no and smaller then array size");
    }
}


//exports
module.exports ={
    randString:randString,
    response:response,
    promiseResponse:promiseResponse,
    snakeToCamel:snakeToCamel,
    camelToSnake:camelToSnake,
    numberToText : NumberToText,
    toPlainText:toPlainText,
    arrUnion:arrUnion,
    arrIntersect:arrIntersect,
    arrDiff:arrDiff,
    arrSymDiff:arrSymDiff,
    nthLargest:nthLargest,
    nthLargestRange:nthLargestRange,
    nthSmallest:nthSmallest,
    nthSmallestRange:nthSmallestRange,
    percent:NumericCalculation.percentage
};