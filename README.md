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

**_Time Related Operations_**
```
<p style='color:#6f84a5'>//get UTC time stamp object containing timeString & timeStamp
mate.utcTimeStamp().timeString = 2019-01-26T20:50:53.815Z
mate.utcTimeStamp().timeStamp = 1548535853815

<p style='color:#6f84a5'>get UTC Date Time format , which can easily fitted in MySQL table</p>
mate.currTimestamp() = 2019-01-26 20:50:53

<p style='color:#6f84a5'>get DateTime sting and convert it into MySQL Date time [eg: data collect from mongo and save intn MySQL]</p>
mate.stringToTimestamp("2019-01-24T12:50:37") = 2019-1-24 12:50:37

<p style='color:#6f84a5'>Date Operations | mate.calcDate(operator,type[day/month/year],value, Optional[date time]) | without 4th arg it will do calculation on current UTC time.</p>
mate.calcDate("+","day",2, "2019-1-20 12:50:37") = 2019-1-22 12:50:37
mate.calcDate("+","day",1) = 2019-01-27 20:50:53
mate.calcDate("-","day",2, "2019-1-20 12:50:37") = 2019-1-18 12:50:37
mate.calcDate("-","day",1) = 2019-01-25 20:50:53
mate.calcDate("-","month",12) = 2018-01-26 20:50:53
mate.calcDate("-","year",5) = 2014-01-26 20:50:53
```


**_Validation Operations_**
```
<p style='color:#6f84a5'> If one has to check the pagination JSON in the followinf patern, so the SP or Query will go hastle free</p>
mate.isValidPagination({status: true, limit: 15, offset: 0}) = true
mate.isValidPagination({status: false, limit: 15, offset: 0}) = true
mate.isValidPagination({status: false, limit: 15, offset: 1.7}) = true
mate.isValidPagination({status: true,limit: 15,offset: 1.7}) = false
mate.isValidPagination({status: true}) = false
mate.isValidPagination() = status should be bloolean , if status is true offset & limit should be positive int
mate.isValidPagination({status: false}) = true

<p style='color:#6f84a5'>Check if the key or variable has value or not if no, then return of your choice as 2nd argument else return the value </p>
let a; mate.isExist(a,[]) = 
let b =100; mate.isExist(b,[]) = 100

let a; mate.isExist(a,null) = null
let b=100; mate.isExist(b,null) = 100

let a; mate.isExist(a,false) = false
let a; mate.isExist(a,100) = 100

<p style='color:#6f84a5'>Check if a JSON has your expected key or not</p>
mate.hasAllProperties({key1:"value1",key2:"value2",key3:"value3",key4:"value4",key5:"value5",key6:"value6"},["key1","key2","key3","key4"]) = true
mate.hasAllProperties({key1:"value1",key2:"value2",key3:"value3",key4:"value4",key5:"value5",key6:"value6"},["key9","key2","key3","key4"]) = false

<p style='color:#6f84a5'>Check if an Array elements are all of type 2nd arg [number & string are supported now]</p>
mate.isValidArray([1,2,3,4,5,3],"number") = true
mate.isValidArray(["a","b","c","d"],"string") = true
mate.isValidArray([1,2,3,4,5,3],"String") = false

<p style='color:#6f84a5'>Check if an Array contains duplicate Value or not</p>
mate.hasDupInArray([1,2,3,4,5,3]) = true
mate.hasDupInArray([1,2,3,4,5,6]) = false
mate.hasDupInArray(["a","b","c","d"]) = false
mate.hasDupInArray(["a","b","c","d","a"]) = true

<p style='color:#6f84a5'>Check if a value is positive Int or not</p>
mate.isPosWhole(6) = true

<p style='color:#6f84a5'>Check if a value is negative Int or not</p>
mate.isNegWhole(-6) = true

<p style='color:#6f84a5'>Check if a value is positive Float or not</p>
mate.isPosFrac(1.4) = true
mate.isPosFrac(2.0) = false
mate.isPosFrac(2.2) = true

<p style='color:#6f84a5'>Check if a value is negative Float or not</p>
mate.isNegFrac(1.9) = true

<p style='color:#6f84a5'>Check if a string has the exact words as 2nd arg or not</p>
mate.isContain("hello world","world") = true
mate.isContain("hello world","worldz") = false
```

**_Utilities_**
```
<p style='color:#6f84a5'>Can convert HTML to Plain Text which can not render or HTML perser</p>
mate.toPlainText("< html lang="en"><body><p>hello world</p></body></html>") =  < html > < body > < p > hello world < /p > < /body > < /html > 
mate.toPlainText("<html lang="en">") =  < html lang="en" >

<p style='color:#6f84a5'>Can Generate random string, can use it as token</p>
mate.randString(7) = 46qXYvs

<p style='color:#6f84a5'>Can use it as a REST call eg: res.status(200).json(mate.response("200", "success", "data fetched", [{"data":"demo data"}]))</p>
mate.response("200", "success", "message", [{"data":"demo data"}]) = { code: '200',status: 'success', message: 'message', data: [ { data: 'demo data' } ] }

<p style='color:#6f84a5'>Can use it as a response from promise funciton , can easily check whether the promise response.status from calling func.</p>
mate.promiseResponse(true,[{"data":"demo data"}]) = { status: true, data: [ { data: 'demo data' } ] }

<p style='color:#6f84a5'>Can change snake_case to  camelCase [either a variable or can change all keys in an Object]</p>
mate.snakeToCamel("my_var") = myVar
mate.snakeToCamel({"my_var1":"variable1", "my_var2":"variable2"}) = { myVar1: 'variable1', myVar2: 'variable2' }

<p style='color:#6f84a5'>Can change camelCase to snake_case [either a variable or can change all keys in an Object]</p>
mate.camelToSnake("myVar") = my_var
mate.camelToSnake({"myVar1":"variable1", "myVar2":"variable2"}) = { my_var1: 'variable1', my_var2: 'variable2' }

<p style='color:#6f84a5'>Number to Text [1st arrg for value,indian and english is supported as 2nd argg, 3rd arrg is optional & if true, assume convertion for currncy use]</p>
mate.numberToText(1234567654356786.4,"english") = One QuadrillionTwo Hundred Thirty-Four TrillionFive Hundred Sixty-Seven Billion Six Hundred Fifty-Four Million Three Hundred Fifty-Six Thousand Seven Hundred Eighty-Six Point Fifty
mate.numberToText(1234567654356786.4,"indian") = Twelve Crore Thirty-Four Lakh Fifty-Six Thousand Seven Hundred Sixty-Five Crore Forty-Three Lakh Fifty-Six Thousand Seven Hundred Eighty-Six Point Fifty
mate.numberToText(1234567654356786.4) = Twelve Crore Thirty-Four Lakh Fifty-Six Thousand Seven Hundred Sixty-Five Crore Forty-Three Lakh Fifty-Six Thousand Seven Hundred Eighty-Six Point Fifty
mate.numberToText(123.45,"indian",true) = One Hundred And  Twenty-Three Rupee And Forty-Five Paise only
mate.numberToText(123.45,"english",true) = One Hundred And  Twenty-Three Dollar And Forty-Five Cent only

<p style='color:#6f84a5'>Array Union | mate.arrIntersect(arr1,arr2,optional[delete duplicate? default=false])</p>
mate.arrUnion([1,2,3],[1,2,3],true) = 1,2,3
mate.arrUnion([1,2,3],[1,2,3],false) = 1,2,3,1,2,3
mate.arrUnion(["hello","hello","world"],["hello","hello","mike"]) = hello,world,hello,mike
mate.arrUnion(["hello","hello","world"],["hello","hello","mike"],true) = hello,world,mike

<p style='color:#6f84a5'>Array Intersect | mate.arrIntersect(arr1,arr2,optional[delete duplicate? default=false])</p>
mate.arrIntersect(["hello","hello","world"],["hello","mike"]) = hello,hello
mate.arrIntersect(["hello","hello","world"],["hello","mike"],true) = hello

<p style='color:#6f84a5'>Array Difference | mate.arrIntersect(arr1,arr2,optional[delete duplicate? default=false])</p>
mate.arrDiff(["hello","hello","world","world"],["hello","mike"]) = world,world
mate.arrDiff(["hello","hello","world","world"],["hello","mike"],true) = world

<p style='color:#6f84a5'>Array Symmetric Difference | mate.arrIntersect(arr1,arr2,optional[delete duplicate? default=false])</p>
mate.arrSymDiff(["hello","hello","world","world"],["hello","mike"]) = world,world,mike
mate.arrSymDiff(["hello","hello","world","world"],["hello","mike"],true) = world,mike

<p style='color:#6f84a5'>Array Intersection | mate.arrIntersect(arr1,arr2,optional[delete duplicate? default=false])</p>
mate.arrIntersect([1,1,2,3],[1]) = 1,1
mate.arrIntersect([1,1,2,3],[1],true) = 1

<p style='color:#6f84a5'>Range from Large | mate.nthLargest(valueArray, desireRank)</p>
mate.nthLargest([1,14,2,3,23,12,4,34,76,9],2) = 34
mate.nthLargest([1,14,2,3,23,12,4,34,76,9],1) = 76
mate.nthLargest([1,14,2,3,23,12,4,34,76,9],0) = 1st param should be array , 2nd should be a largest no and smaller then array size

<p style='color:#6f84a5'>Range from Large | mate.nthSmallest(valueArray, desireRank)</p>
mate.nthSmallest([1,14,2,3,23,12,4,34,76,9],2) = 2
mate.nthSmallest([1,14,2,3,23,12,4,34,76,9],1) = 1
mate.nthSmallest([1,14,2,3,23,12,4,34,76,9],0) = 1st param should be array , 2nd should be a largest no and smaller then array size
mate.nthSmallest([1,2,3,4,1],-2) = 1st param should be array , 2nd should be a largest no and smaller then array size

<p style='color:#6f84a5'>Range from Large with Range | mate.nthLargestRange(valueArray, startRank, endRank)</p>
mate.nthLargestRange([1,2,3,4,5],1,4) = 5,4,3,2
mate.nthLargestRange([1,3,4,2,5],4,1) = 1st param should be array , 2nd should be a largest no and smaller then array size

<p style='color:#6f84a5'>Range from small with Range | mate.nthSmallestRange(valueArray, startRank, endRank)</p>
mate.nthSmallestRange([1,2,3,4,5],2,4) = 2,3,4
mate.nthSmallestRange([1,3,4,2,5],4,1) = 1st param should be array , 2nd should be a largest no and smaller then array size
```
**_Few Calculation_** 
``` 
<p style='color:#6f84a5'>one function | mate.percent(amount,percent,optional) | if optional true, it will calculate reverse</p>
mate.percent(1000, 5) = { percent: 50, after: 1050, before: 950 }
mate.percent(153, 1.7) = { percent: 2.6009999999999995, after: 155.601, before: 150.399 }
mate.percent(1000, 10, true) = { percent: 90.90909090909088,before: 909.0909090909091, after: 1000 
```

## Author

* **Sankar Prasad Biswas**

## License
#### [ISC](./LICENSE.md)

