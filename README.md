# **add-mate**
<img class="retina-badge" src="https://badge.fury.io/js/add-mate.svg">
<br/><br/>

A project of a npm-module. I truly believe, the functions will help developers a lot. contribution from you will highly appreciated . thank you

## Getting Started

It's simple 
```
npm install add-mate
```

### Prerequisites

What things you need to install the software and how to install them

```
Nothing really but the node and npm
```

### Installing
```
let mate = require("add-mate");
```
see it's easy, i told you before.

## HOW TO USE 'add-mate'

### **_Time Related Operations_**


 * get UTC time stamp object containing timeString & timeStamp
 ```
mate.utcTimeStamp().timeString = 2019-01-26T20:50:53.815Z
mate.utcTimeStamp().timeStamp = 1548535853815
```

* get UTC Date Time format , which can easily fitted in MySQL table 
 ```
 mate.currTimestamp() = 2019-01-26 20:50:53
 ```
 
 * get DateTime sting and convert it into MySQL Date time 
     
     [eg: data collect from mongo and save into MySQL]  

```
mate.stringToTimestamp("2019-01-24T12:50:37") = 2019-1-24 12:50:37
```
 * Date Operations | mate.calcDate(operator,type[day/month/year],value, Optional[date time]) | without 4th arg it will do calculation on current UTC time.  
 ```
mate.calcDate("+","day",2, "2019-1-20 12:50:37") = 2019-1-22 12:50:37
mate.calcDate("+","day",1) = 2019-01-27 20:50:53
mate.calcDate("-","day",2, "2019-1-20 12:50:37") = 2019-1-18 12:50:37
mate.calcDate("-","day",1) = 2019-01-25 20:50:53
mate.calcDate("-","month",12) = 2018-01-26 20:50:53
mate.calcDate("-","year",5) = 2014-01-26 20:50:53
```




### **_Validation Operations_**

 *  If one has to check the pagination JSON in the followinf patern, so the SP or Query will go hastle free  
```
mate.isValidPagination({status: true, limit: 15, offset: 0}) = true
mate.isValidPagination({status: false, limit: 15, offset: 0}) = true
mate.isValidPagination({status: false, limit: 15, offset: 1.7}) = true
mate.isValidPagination({status: true,limit: 15,offset: 1.7}) = false
mate.isValidPagination({status: true}) = false
mate.isValidPagination() = status should be bloolean , if status is true offset & limit should be positive int
mate.isValidPagination({status: false}) = true
```
 * Check if the key or variable has value or not if no, then return of your choice as 2nd argument else return the value   

```
let a; mate.isExist(a,[]) = 
let b =100; mate.isExist(b,[]) = 100

let a; mate.isExist(a,null) = null
let b=100; mate.isExist(b,null) = 100

let a; mate.isExist(a,false) = false
let a; mate.isExist(a,100) = 100
```
 * Check if a JSON has your expected key or not  
```
mate.hasAllProperties({key1:"value1",key2:"value2",key3:"value3",key4:"value4",key5:"value5",key6:"value6"},["key1","key2","key3","key4"]) = true
mate.hasAllProperties({key1:"value1",key2:"value2",key3:"value3",key4:"value4",key5:"value5",key6:"value6"},["key9","key2","key3","key4"]) = false

```
 * Check if an Array elements are all of type 2nd arg [number & string are supported now]  
```
mate.isValidArray([1,2,3,4,5,3],"number") = true
mate.isValidArray(["a","b","c","d"],"string") = true
mate.isValidArray([1,2,3,4,5,3],"String") = false

```
 * Check if an Array contains duplicate Value or not  
```
mate.hasDupInArray([1,2,3,4,5,3]) = true
mate.hasDupInArray([1,2,3,4,5,6]) = false
mate.hasDupInArray(["a","b","c","d"]) = false
mate.hasDupInArray(["a","b","c","d","a"]) = true

```
 * Check if a value is positive Int or not  

```
mate.isPosWhole(6) = true
```
 * Check if a value is negative Int or not  

```
mate.isNegWhole(-6) = true
```

* Check if a value is positive Float or not  
 ```
mate.isPosFrac(1.4) = true
mate.isPosFrac(2.0) = false
mate.isPosFrac(2.2) = true
```


* Check if a value is negative Float or not  
```
mate.isNegFrac(1.9) = true
```
* Check if a string has the exact words as 2nd arg or not
```  
mate.isContain("hello world","world") = true
mate.isContain("hello world","worldz") = false
```



###  **_Utilities_**

 * Can convert HTML to Plain Text which can not render or HTML perser  
```
mate.toPlainText("< html lang="en"><body><p>hello world  </body></html>") =  < html > < body > < p > hello world < /p > < /body > < /html > 
mate.toPlainText("<html lang="en">") =  < html lang="en" >
```

 * Can Generate random string, can use it as token  
```
mate.randString(7) = 46qXYvs
```
 * Can use it as a REST call
  
   eg: res.status(200).json(mate.response("200", "success", "data fetched", [{"data":"demo data"}]))  
```
mate.response("200", "success", "message", [{"data":"demo data"}]) = { code: '200',status: 'success', message: 'message', data: [ { data: 'demo data' } ] }

```

 * Can use it as a response from promise function , can easily check whether the promise response.status from calling func.  
```
mate.promiseResponse(true,[{"data":"demo data"}]) = { status: true, data: [ { data: 'demo data' } ] }

```

 * Can change snake_case to  camelCase [either a variable or can change all keys in an Object]  
```
mate.snakeToCamel("my_var") = myVar
mate.snakeToCamel({"my_var1":"variable1", "my_var2":"variable2"}) = { myVar1: 'variable1', myVar2: 'variable2' }

```

* Can change camelCase to snake_case [either a variable or can change all keys in an Object]  
```
mate.camelToSnake("myVar") = my_var
mate.camelToSnake({"myVar1":"variable1", "myVar2":"variable2"}) = { my_var1: 'variable1', my_var2: 'variable2' }

```

 * Number to Text [1st arrg for value,indian and english is supported as 2nd argg, 3rd arrg is optional & if true, assume convertion for currncy use]  
```
mate.numberToText(1234567654356786.4,"english") = One QuadrillionTwo Hundred Thirty-Four TrillionFive Hundred Sixty-Seven Billion Six Hundred Fifty-Four Million Three Hundred Fifty-Six Thousand Seven Hundred Eighty-Six Point Fifty
mate.numberToText(1234567654356786.4,"indian") = Twelve Crore Thirty-Four Lakh Fifty-Six Thousand Seven Hundred Sixty-Five Crore Forty-Three Lakh Fifty-Six Thousand Seven Hundred Eighty-Six Point Fifty
mate.numberToText(1234567654356786.4) = Twelve Crore Thirty-Four Lakh Fifty-Six Thousand Seven Hundred Sixty-Five Crore Forty-Three Lakh Fifty-Six Thousand Seven Hundred Eighty-Six Point Fifty
mate.numberToText(123.45,"indian",true) = One Hundred And  Twenty-Three Rupee And Forty-Five Paise only
mate.numberToText(123.45,"english",true) = One Hundred And  Twenty-Three Dollar And Forty-Five Cent only

```

 * Array Union | mate.arrIntersect(arr1,arr2,optional[delete duplicate? default=false])  
```
mate.arrUnion([1,2,3],[1,2,3],true) = 1,2,3
mate.arrUnion([1,2,3],[1,2,3],false) = 1,2,3,1,2,3
mate.arrUnion(["hello","hello","world"],["hello","hello","mike"]) = hello,world,hello,mike
mate.arrUnion(["hello","hello","world"],["hello","hello","mike"],true) = hello,world,mike

```

 * Array Intersect | mate.arrIntersect(arr1,arr2,optional[delete duplicate? default=false])  
```
mate.arrIntersect(["hello","hello","world"],["hello","mike"]) = hello,hello
mate.arrIntersect(["hello","hello","world"],["hello","mike"],true) = hello

```

 * Array Difference | mate.arrIntersect(arr1,arr2,optional[delete duplicate? default=false])  
```
mate.arrDiff(["hello","hello","world","world"],["hello","mike"]) = world,world
mate.arrDiff(["hello","hello","world","world"],["hello","mike"],true) = world

```

*  Array Symmetric Difference | mate.arrIntersect(arr1,arr2,optional[delete duplicate? default=false])  
```
mate.arrSymDiff(["hello","hello","world","world"],["hello","mike"]) = world,world,mike
mate.arrSymDiff(["hello","hello","world","world"],["hello","mike"],true) = world,mike

```

* Array Intersection | mate.arrIntersect(arr1,arr2,optional[delete duplicate? default=false])  
```
mate.arrIntersect([1,1,2,3],[1]) = 1,1
mate.arrIntersect([1,1,2,3],[1],true) = 1

```

 * Range from Large | mate.nthLargest(valueArray, desireRank)  
```
mate.nthLargest([1,14,2,3,23,12,4,34,76,9],2) = 34
mate.nthLargest([1,14,2,3,23,12,4,34,76,9],1) = 76
mate.nthLargest([1,14,2,3,23,12,4,34,76,9],0) = 1st param should be array , 2nd should be a largest no and smaller then array size

```

 * Range from Large | mate.nthSmallest(valueArray, desireRank)  
```
mate.nthSmallest([1,14,2,3,23,12,4,34,76,9],2) = 2
mate.nthSmallest([1,14,2,3,23,12,4,34,76,9],1) = 1
mate.nthSmallest([1,14,2,3,23,12,4,34,76,9],0) = 1st param should be array , 2nd should be a largest no and smaller then array size
mate.nthSmallest([1,2,3,4,1],-2) = 1st param should be array , 2nd should be a largest no and smaller then array size

```

 * Range from Large with Range | mate.nthLargestRange(valueArray, startRank, endRank)  
```
mate.nthLargestRange([1,2,3,4,5],1,4) = 5,4,3,2
mate.nthLargestRange([1,3,4,2,5],4,1) = 1st param should be array , 2nd should be a largest no and smaller then array size

```

 * Range from small with Range | mate.nthSmallestRange(valueArray, startRank, endRank)  
```
mate.nthSmallestRange([1,2,3,4,5],2,4) = 2,3,4
mate.nthSmallestRange([1,3,4,2,5],4,1) = 1st param should be array , 2nd should be a largest no and smaller then array size


```

 * Check a password Strength | mate.pwdStrength(password)
```
mate.pwdStrength(124313) = {"slab":"not recommended","score":25}
mate.pwdStrength("MyCustomPa$$23224") = {"slab":"strongest","score":100}
mate.pwdStrength("abbas1221") = {"slab":"weak","score":45}
mate.pwdStrength("") = "Bad Request"

```

**_Few Calculation_** 

 * one function | mate.percentage(amount,percent,optional) | if optional true, it will calculate reverse  
```
mate.percentage(1000, 5) = { percent: 50, after: 1050, before: 950 }
mate.percentage(153, 1.7) = { percent: 2.6009999999999995, after: 155.601, before: 150.399 }
mate.percentage(1000, 10, true) = { percent: 90.90909090909088,before: 909.0909090909091, after: 1000 

```


## Author

* **Sankar Prasad Biswas**

## License
#### [ISC](./LICENSE.md)

