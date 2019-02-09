// Send Response
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

// Send Promise Response
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

// Sorting an Object
function sortObject(obj,field, reverse, dataType){
    let key = dataType ?
        function(x) {return dataType(x[field])} :
        function(x) {return x[field]};
    reverse = !reverse ? 1 : -1;

    let cb =  function (a, b) {
        a = key(a);
        b = key(b);
        return reverse * ((a > b) - (b > a));
    };
    return (obj.sort(cb));
}
//let k = sortObject(homes,'price', false, parseInt);

module.exports = {
    response : response,
    promiseResponse: promiseResponse,
    sortObject:sortObject
};