let validate= require("../../Validation");

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

module.exports= {
    arrUnion:arrUnion,
    arrIntersect:arrIntersect,
    arrDiff:arrDiff,
    arrSymDiff:arrSymDiff,
    nthLargest:nthLargest,
    nthLargestRange:nthLargestRange,
    nthSmallest:nthSmallest,
    nthSmallestRange:nthSmallestRange,  
};