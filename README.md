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
mate.utcTimeStamp().timeString = 2019-01-26T20:50:53.815Z
mate.utcTimeStamp().timeStamp = 1548535853815
mate.currTimestamp() = 2019-01-26 20:50:53
mate.stringToTimestamp("2019-01-24T12:50:37") = 2019-1-24 12:50:37
mate.calcDate("+","day",2, "2019-1-20 12:50:37") = 2019-1-22 12:50:37
mate.calcDate("+","day",1) = 2019-01-27 20:50:53
mate.calcDate("-","day",2, "2019-1-20 12:50:37") = 2019-1-18 12:50:37
mate.calcDate("-","day",1) = 2019-01-25 20:50:53
mate.calcDate("-","month",12) = 2018-01-26 20:50:53
mate.calcDate("-","year",5) = 2014-01-26 20:50:53
```


**_Validation Operations_**
```
mate.isPosWhole(6) = true
mate.isNegWhole(-6) = true
mate.isPosFrac(1.4) = true
mate.isPosFrac(2.0) = false
mate.isPosFrac(2.2) = true
mate.isNegFrac(1.9) = true
mate.isContain("hello world","world") = true
mate.isContain("hello world","worldz") = false
```

_**Utilities_**
```
mate.toPlainText("< html lang="en"><body><p>hello world</p></body></html>") =  < html > < body > < p > hello world < /p > < /body > < /html > 

mate.toPlainText("<html lang="en">") =  < html lang="en" >

mate.randString(7) = 46qXYvs

mate.response("200", "success", "message", [{"data":"demo data"}]) = { code: '200',status: 'success', message: 'message', data: [ { data: 'demo data' } ] }

mate.promiseResponse(true,[{"data":"demo data"}]) = { status: true, data: [ { data: 'demo data' } ] }

mate.snakeToCamel("my_var") = myVar

mate.snakeToCamel({"my_var1":"variable1", "my_var2":"variable2"}) = { myVar1: 'variable1', myVar2: 'variable2' }

mate.camelToSnake("myVar") = my_var

mate.camelToSnake({"myVar1":"variable1", "myVar2":"variable2"}) = { my_var1: 'variable1', my_var2: 'variable2' }

mate.numberToText(1234567654356786.4,"english") = One QuadrillionTwo Hundred Thirty-Four TrillionFive Hundred Sixty-Seven Billion Six Hundred Fifty-Four Million Three Hundred Fifty-Six Thousand Seven Hundred Eighty-Six Point Fifty

mate.numberToText(1234567654356786.4,"indian") = Twelve Crore Thirty-Four Lakh Fifty-Six Thousand Seven Hundred Sixty-Five Crore Forty-Three Lakh Fifty-Six Thousand Seven Hundred Eighty-Six Point Fifty

mate.numberToText(1234567654356786.4) = Twelve Crore Thirty-Four Lakh Fifty-Six Thousand Seven Hundred Sixty-Five Crore Forty-Three Lakh Fifty-Six Thousand Seven Hundred Eighty-Six Point Fifty

mate.numberToText(123.45,"indian",true) = One Hundred And  Twenty-Three Rupee And Forty-Five Paise only

mate.numberToText(123.45,"english",true) = One Hundred And  Twenty-Three Dollar And Forty-Five Cent only

mate.arrUnion([1,2,3],[1,2,3],true) = 1,2,3

mate.arrUnion([1,2,3],[1,2,3],false) = 1,2,3,1,2,3

mate.arrUnion(["hello","hello","world"],["hello","hello","mike"]) = hello,world,hello,mike

mate.arrUnion(["hello","hello","world"],["hello","hello","mike"],true) = hello,world,mike

mate.arrIntersect(["hello","hello","world"],["hello","mike"]) = hello,hello

mate.arrIntersect(["hello","hello","world"],["hello","mike"],true) = hello

mate.arrDiff(["hello","hello","world","world"],["hello","mike"]) = world,world

mate.arrDiff(["hello","hello","world","world"],["hello","mike"],true) = world

mate.arrSymDiff(["hello","hello","world","world"],["hello","mike"]) = world,world,mike

mate.arrSymDiff(["hello","hello","world","world"],["hello","mike"],true) = world,mike

mate.arrIntersect([1,1,2,3],[1]) = 1,1

mate.arrIntersect([1,1,2,3],[1],true) = 1

mate.nthLargest([1,14,2,3,23,12,4,34,76,9],2) = 34

mate.nthLargest([1,14,2,3,23,12,4,34,76,9],1) = 76

mate.nthLargest([1,14,2,3,23,12,4,34,76,9],0) = 1st param should be array , 2nd should be a largest no and smaller then array size

mate.nthSmallest([1,14,2,3,23,12,4,34,76,9],2) = 2

mate.nthSmallest([1,14,2,3,23,12,4,34,76,9],1) = 1

mate.nthSmallest([1,14,2,3,23,12,4,34,76,9],0) = 1st param should be array , 2nd should be a largest no and smaller then array size

mate.nthSmallest([1,2,3,4,1],-2) = 1st param should be array , 2nd should be a largest no and smaller then array size

mate.nthLargestRange([1,2,3,4,5],1,4) = 5,4,3,2

mate.nthLargestRange([1,3,4,2,5],4,1) = 1st param should be array , 2nd should be a largest no and smaller then array size

mate.nthSmallestRange([1,2,3,4,5],2,4) = 2,3,4

mate.nthSmallestRange([1,3,4,2,5],4,1) = 1st param should be array , 2nd should be a largest no and smaller then array size
```
**_Few Calculation_** 
``` 
mate.percent(1000, 5) = { percent: 50, after: 1050, before: 950 }
mate.percent(153, 1.7) = { percent: 2.6009999999999995, after: 155.601, before: 150.399 }
mate.percent(1000, 10, true) = { percent: 90.90909090909088,before: 909.0909090909091, after: 1000 
```

## Author

* **Sankar Prasad Biswas**

##License
#### [ISC](./LICENSE.md)

