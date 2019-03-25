
// Sorting an Object
// mate.quickSortObject([{a: 5, b:2}, {a: 2,b:1}, {a: 5,b:3}, {a: 4,b:4}],["a","b"],["desc","desc"],[parseInt,parseInt]);  --(obj, fieldsObj, dataTypeArray)
function quickSortObject(obj, fieldsArr, orderArr, dataTypeArray){
    let primarySortKey = fieldsArr[0];
    let primarySortIsReverse = (orderArr[0] === "asc")? 1 : -1;


    //primarySortIsReverse = !primarySortIsReverse ? 1 : -1;

    let key = dataTypeArray[0] ?
        function(x) {return dataTypeArray[0](x[primarySortKey])} :
        function(x) {return x[primarySortKey]};

    let cb =  function (a, b) {
        a = key(a);
        b = key(b);
        return primarySortIsReverse * ((a > b) - (b > a));
    };
    let oneSortedObject =  (obj.sort(cb));

    // Advance part | Check if user wants to sort the object by other keys too
    let i = 1;
    while (i < fieldsArr.length){
        //check for duplicate instance , if exist then do the sort followed by json index.
        let mapper ={};
        oneSortedObject.forEach(function(value,key){
            if(mapper[value[primarySortKey]] !== undefined){
                mapper[value[primarySortKey]].right = key;
                mapper[value[primarySortKey]].count += 1;

                // Now, i am getting the exact left & right index for the same primary sorting key's value
                // As i have already sorted based on primarySortKey, there is no other key's value lies between that left and right index
                // Hence, can able to approach a quick sort.

                _quickSortObject(oneSortedObject, mapper[value[primarySortKey]].left, mapper[value[primarySortKey]].right, fieldsArr[i],orderArr[i])

            }else{
                mapper[value[primarySortKey]] = {left:key,right:key,count:1};
            }
        });
        i++;
    }

    return oneSortedObject;
}

function _quickSortObject(arrOfObject, left, right,key,order){
    let len = arrOfObject.length,
        pivot,
        partitionIndex;
    switch (order){
        case "asc":
            if(left > right && arrOfObject[left][key] > arrOfObject[right][key]){
                pivot = right;
                partitionIndex = _partition(arrOfObject, pivot, left, right);

                //sort left and right
                _quickSortObject(arrOfObject, left, partitionIndex - 1,key,order);
                _quickSortObject(arrOfObject, partitionIndex + 1, right,key,order);
            }
            break;
        case"desc":
            if(left < right && arrOfObject[left][key] < arrOfObject[right][key]){
                pivot = right;
                partitionIndex = _partition(arrOfObject, pivot, left, right);

                //sort left and right
                _quickSortObject(arrOfObject, left, partitionIndex - 1,key,order);
                _quickSortObject(arrOfObject, partitionIndex + 1, right,key,order);
            }
            break;
    }

    return arrOfObject;
}

function _partition(arrOfObject, pivot, left, right){
    let pivotValue = arrOfObject[pivot],
        partitionIndex = left;

    for(let i = left; i < right; i++){
        if(arrOfObject[i] < pivotValue){
            _swap(arrOfObject, i, partitionIndex);
            partitionIndex++;
        }
    }
    _swap(arrOfObject, right, partitionIndex);
    return partitionIndex;
}

function _swap(arrOfObject, i, j){
    let temp = arrOfObject[i];
    arrOfObject[i] = arrOfObject[j];
    arrOfObject[j] = temp;
}

module.exports = quickSortObject;