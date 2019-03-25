
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

module.exports = {
    response : response,
    promiseResponse: promiseResponse
};
