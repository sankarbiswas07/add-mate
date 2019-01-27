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
    snakeToCamel:snakeToCamel,
    camelToSnake:camelToSnake
};