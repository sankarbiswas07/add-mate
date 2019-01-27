# add-mate

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
import {mate} from "add-mate"; (ES6)
OR
let mate = require("add-mate");
```
see it's easy, i told you before.

## HOW TO USE 'add-mate'

####Time Related Operations
```
mate.utcTimeStamp().timeString = 2019-01-25T20:23:28.822Z
mate.utcTimeStamp().timeStamp = 1548447808823
mate.currTimestamp() = 2019-01-25 20:23:28
mate.stringToTimestamp("2019-01-24T12:50:37") = 2019-1-24 12:50:37
mate.calcDate("+","day",2, "2019-1-20 12:50:37") = 2019-1-22 12:50:37
mate.calcDate("+","day",1) = 2019-01-26 20:23:28
mate.calcDate("-","day",2, "2019-1-20 12:50:37") = 2019-1-18 12:50:37
mate.calcDate("-","day",1) = 2019-01-24 20:23:28
mate.calcDate("-","month",12) = 2018-01-25 20:23:28
mate.calcDate("-","year",5) = 2014-01-25 20:23:28
```


####Validation Operations
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

####Utilities
```
mate.toPlainText("< html lang="en"><body><p>hello world</p></body></html>") =  < html > < body > < p > hello world < /p > < /body > < /html > 

mate.toPlainText("<html lang="en">") =  < html lang="en" >

mate.randString(7) = VV1PvUh

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

mate.union([1,2,3],[1,2,3],true) = 1,2,3

mate.union([1,2,3],[1,2,3],false) = 1,2,3,1,2,3

mate.union(["hello","world"],["hello","mike"]) = hello,world,hello,mike

mate.union(["hello","world"],["hello","mike"],true) = hello,world,mike
```


## Author

* **Sankar Prasad Biswas**

