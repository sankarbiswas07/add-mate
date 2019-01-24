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

module.exports ={
    randString:randString,
    response:response,
    promiseResponse:promiseResponse,
    snakeToCamel:snakeToCamel,
    camelToSnake:camelToSnake
};