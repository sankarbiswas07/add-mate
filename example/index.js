let http = require('http');
//let mate = require('add-mate');
let mate = require('../../add-mate');

http.createServer(function (req, res) {
    console.log(mate.pwdStrength(124313));
    res.writeHead(200, {'Content-Type': 'application/json'});
    let a,
        b=100; //isExist function's variable
    res.end(
        "---------------------------------------------------------------------\n"+
        "                              T I M E (4) \n"+
        "---------------------------------------------------------------------\n\n"+
        "mate.utcTimeStamp().timeString = "+mate.utcTimeStamp().timeString+"\n"+
        "mate.utcTimeStamp().timeStamp = "+mate.utcTimeStamp().timeStamp+"\n"+

        "mate.currTimestamp() = "+mate.currTimestamp()+"\n"+

        "mate.stringToTimestamp(\"2019-01-24T12:50:37\") = "+mate.stringToTimestamp("2019-01-24T12:50:37")+"\n"+

        "mate.calcDate(\"+\",\"day\",2, \"2019-1-20 12:50:37\") = "+mate.calcDate("+","day",2, "2019-1-20 12:50:37")+"\n"+
        "mate.calcDate(\"+\",\"day\",1) = "+mate.calcDate("+","day",1)+"\n"+
        "mate.calcDate(\"-\",\"day\",2, \"2019-1-20 12:50:37\") = "+mate.calcDate("-","day",2, "2019-1-20 12:50:37")+"\n"+
        "mate.calcDate(\"-\",\"day\",1) = "+mate.calcDate("-","day",1)+"\n"+
        "mate.calcDate(\"-\",\"month\",12) = "+mate.calcDate("-","month",12)+"\n"+
        "mate.calcDate(\"-\",\"year\",5) = "+mate.calcDate("-","year",5)+"\n"+

        "\n\n---------------------------------------------------------------------\n"+
        "                        V A L I D A T I O N (10) \n"+
        "---------------------------------------------------------------------\n\n"+

        "mate.isValidPagination({status: true, limit: 15, offset: 0}) = " +mate.isValidPagination({status: true, limit: 15, offset: 0})+"\n"+
        "mate.isValidPagination({status: false, limit: 15, offset: 0}) = " +mate.isValidPagination({status: false, limit: 15, offset: 0})+"\n"+
        "mate.isValidPagination({status: false, limit: 15, offset: 1.7}) = " +mate.isValidPagination({status: false, limit: 15, offset: 1.7})+"\n"+
        "mate.isValidPagination({status: true,limit: 15,offset: 1.7}) = " +mate.isValidPagination({status: true,limit: 15,offset: 1.7})+"\n"+
        "mate.isValidPagination({status: true}) = " +mate.isValidPagination({status: true})+"\n"+
        "mate.isValidPagination() = " +mate.isValidPagination()+"\n"+
        "mate.isValidPagination({status: false}) = " +mate.isValidPagination({status: false})+"\n\n"+

        "let a; mate.isExist(a,[]) = " +mate.isExist(a,[])+"\n"+
        "let b =100; mate.isExist(b,[]) = " +mate.isExist(b,[])+"\n\n"+

        "let a; mate.isExist(a,null) = " +mate.isExist(a,null)+"\n"+
        "let b=100; mate.isExist(b,null) = " +mate.isExist(b,null)+"\n\n"+

        "let a; mate.isExist(a,false) = " +mate.isExist(a,false)+"\n"+
        "let a; mate.isExist(a,100) = " +mate.isExist(a,100)+"\n\n"+


        "mate.hasAllProperties({key1:\"value1\",key2:\"value2\",key3:\"value3\",key4:\"value4\",key5:\"value5\",key6:\"value6\"},[\"key1\",\"key2\",\"key3\",\"key4\"]) = "+mate.hasAllProperties({key1:"value1",key2:"value2",key3:"value3",key4:"value4",key5:"value5",key6:"value6"},["key1","key2","key3","key4"])+"\n"+
        "mate.hasAllProperties({key1:\"value1\",key2:\"value2\",key3:\"value3\",key4:\"value4\",key5:\"value5\",key6:\"value6\"},[\"key9\",\"key2\",\"key3\",\"key4\"]) = "+mate.hasAllProperties({key1:"value1",key2:"value2",key3:"value3",key4:"value4",key5:"value5",key6:"value6"},["key9","key2","key3","key4"])+"\n"+

        "mate.isValidArray([1,2,3,4,5,3],\"number\") = " +mate.isValidArray([1,2,3,4,5,3],"number")+"\n"+
        "mate.isValidArray([\"a\",\"b\",\"c\",\"d\"],\"string\") = " +mate.isValidArray(["a","b","c","d"],"string")+"\n"+
        "mate.isValidArray([1,2,3,4,5,3],\"String\") = " +mate.isValidArray([1,2,3,4,5,3],"string")+"\n"+

        "mate.hasDupInArray([1,2,3,4,5,3]) = " +mate.hasDupInArray([1,2,3,4,5,3])+"\n"+
        "mate.hasDupInArray([1,2,3,4,5,6]) = " +mate.hasDupInArray([1,2,3,4,5,6])+"\n"+
        "mate.hasDupInArray([\"a\",\"b\",\"c\",\"d\"]) = " +mate.hasDupInArray(["a","b","c","d"])+"\n"+
        "mate.hasDupInArray([\"a\",\"b\",\"c\",\"d\",\"a\"]) = " +mate.hasDupInArray(["a","b","c","d","a"])+"\n"+

        "mate.isPosWhole(6) = "+mate.isPosWhole(6)+"\n"+

        "mate.isNegWhole(-6) = "+mate.isNegWhole(-6)+"\n"+

        "mate.isPosFrac(1.4) = "+mate.isPosFrac(1.4)+"\n"+
        "mate.isPosFrac(2.0) = "+mate.isPosFrac(2.0)+"\n"+
        "mate.isPosFrac(2.2) = "+mate.isPosFrac(2.2)+"\n"+

        "mate.isNegFrac(1.9) = "+mate.isNegFrac(-1.9)+"\n"+

        "mate.isContain(\"hello world\",\"world\") = "+mate.isContain("hello world","world")+"\n"+
        "mate.isContain(\"hello world\",\"worldz\") = "+mate.isContain("hello world","worldz")+"\n"+

        "\n\n---------------------------------------------------------------------\n"+
        "                              U T I L (16)\n"+
        "---------------------------------------------------------------------\n\n"+
        "mate.randString(7) = "+mate.randString(7)+"\n\n"+
        "mate.response(\"200\", \"success\", \"message\", [{\"data\":\"demo data\"}]) = "+"{ code: '200',status: 'success', message: 'message', data: [ { data: 'demo data' } ] }"+"\n\n"+ //mate.response("200", "success", "message", [{"data": "demo data"}])
        "mate.promiseResponse(true,[{\"data\":\"demo data\"}]) = "+"{ status: true, data: [ { data: 'demo data' } ] }\n\n"+  //mate.promiseResponse(true,[{"data":"demo data"}])+"\n"+

        "mate.toPlainText(\"< html lang=\"en\"><body><p>hello world</p></body></html>\") = "+mate.toPlainText("< html><body><p>hello world</p></body></html>")+"\n\n"+
        "mate.toPlainText(\"<html lang=\"en\">\") = "+mate.toPlainText("<html lang=\"en\">")+"\n\n"+

        "mate.snakeToCamel(\"my_var\") = "+mate.snakeToCamel("my_var")+"\n\n"+
        "mate.snakeToCamel({\"my_var1\":\"variable1\", \"my_var2\":\"variable2\"}) = "+"{ myVar1: 'variable1', myVar2: 'variable2' }"+"\n\n"+ //mate.snakeToCamel({my_var1:"variable1", my_var2:"variable2"})

        "mate.camelToSnake(\"myVar\") = "+mate.camelToSnake("myVar")+"\n\n"+
        "mate.camelToSnake({\"myVar1\":\"variable1\", \"myVar2\":\"variable2\"}) = "+"{ my_var1: 'variable1', my_var2: 'variable2' }"+"\n\n"+ //mate.camelToSnake({myVar1:"variable1", myVar2:"variable2"})

        "mate.numberToText(1234567654356786.4,\"english\") = "+mate.numberToText(1234567654356786.4,"english")+"\n\n"+
        "mate.numberToText(1234567654356786.4,\"indian\") = "+mate.numberToText(1234567654356786.4,"indian")+"\n\n"+
        "mate.numberToText(1234567654356786.4) = "+mate.numberToText(1234567654356786.4)+"\n\n"+
        "mate.numberToText(123.45,\"indian\",true) = "+mate.numberToText(123.45,"indian",true)+"\n\n"+
        "mate.numberToText(123.45,\"english\",true) = "+mate.numberToText(123.45,"english",true)+"\n\n"+

        "mate.arrUnion([1,2,3],[1,2,3],true) = "+mate.arrUnion([1,2,3],[1,2,3],true)+"\n\n"+
        "mate.arrUnion([1,2,3],[1,2,3],false) = "+mate.arrUnion([1,2,3],[1,2,3],false)+"\n\n"+
        "mate.arrUnion([\"hello\",\"hello\",\"world\"],[\"hello\",\"hello\",\"mike\"]) = "+mate.arrUnion(["hello","world"],["hello","mike"])+"\n\n"+
        "mate.arrUnion([\"hello\",\"hello\",\"world\"],[\"hello\",\"hello\",\"mike\"],true) = "+mate.arrUnion(["hello","world"],["hello","mike"],true)+"\n\n"+

        "mate.arrIntersect([\"hello\",\"hello\",\"world\"],[\"hello\",\"mike\"]) = "+mate.arrIntersect(["hello","hello","world"],["hello","mike"])+"\n\n"+
        "mate.arrIntersect([\"hello\",\"hello\",\"world\"],[\"hello\",\"mike\"],true) = "+mate.arrIntersect(["hello","hello","world"],["hello","mike"],true)+"\n\n"+

        "mate.arrDiff([\"hello\",\"hello\",\"world\",\"world\"],[\"hello\",\"mike\"]) = "+mate.arrDiff(["hello","hello","world","world"],["hello","mike"])+"\n\n"+
        "mate.arrDiff([\"hello\",\"hello\",\"world\",\"world\"],[\"hello\",\"mike\"],true) = "+mate.arrDiff(["hello","hello","world","world"],["hello","mike"],true)+"\n\n"+

        "mate.arrSymDiff([\"hello\",\"hello\",\"world\",\"world\"],[\"hello\",\"mike\"]) = "+mate.arrSymDiff(["hello","hello","world","world"],["hello","mike"])+"\n\n"+
        "mate.arrSymDiff([\"hello\",\"hello\",\"world\",\"world\"],[\"hello\",\"mike\"],true) = "+mate.arrSymDiff(["hello","hello","world","world"],["hello","mike"],true)+"\n\n"+

        "mate.arrIntersect([1,1,2,3],[1]) = "+mate.arrIntersect([1,1,2,3],[1])+"\n\n"+
        "mate.arrIntersect([1,1,2,3],[1],true) = "+mate.arrIntersect([1,1,2,3],[1],true)+"\n\n"+

        "mate.nthLargest([1,14,2,3,23,12,4,34,76,9],2) = "+mate.nthLargest([1,14,2,3,23,12,4,34,76,9],2)+"\n\n"+
        "mate.nthLargest([1,14,2,3,23,12,4,34,76,9],1) = "+mate.nthLargest([1,14,2,3,23,12,4,34,76,9],1)+"\n\n"+
        "mate.nthLargest([1,14,2,3,23,12,4,34,76,9],0) = "+mate.nthLargest([1,14,2,3,23,12,4,34,76,9],0)+"\n\n"+

        "mate.nthSmallest([1,14,2,3,23,12,4,34,76,9],2) = "+mate.nthSmallest([1,14,2,3,23,12,4,34,76,9],2)+"\n\n"+
        "mate.nthSmallest([1,14,2,3,23,12,4,34,76,9],1) = "+mate.nthSmallest([1,14,2,3,23,12,4,34,76,9],1)+"\n\n"+
        "mate.nthSmallest([1,14,2,3,23,12,4,34,76,9],0) = "+mate.nthSmallest([1,14,2,3,23,12,4,34,76,9],0)+"\n\n"+
        "mate.nthSmallest([1,2,3,4,1],-2) = "+mate.nthSmallest([1,2,3,4,1],-2)+"\n\n"+

        "mate.nthLargestRange([1,2,3,4,5],1,4) = "+mate.nthLargestRange([1,2,3,4,5],1,4)+"\n\n"+
        "mate.nthLargestRange([1,3,4,2,5],4,1) = "+mate.nthLargestRange([1,3,4,2,5],4,1)+"\n\n"+

        "mate.nthSmallestRange([1,2,3,4,5],2,4) = "+mate.nthSmallestRange([1,2,3,4,5],2,4)+"\n\n"+
        "mate.nthSmallestRange([1,3,4,2,5],4,1) = "+mate.nthSmallestRange([1,3,4,2,5],4,1)+"\n\n"+

        "\n\n---------------------------------------------------------------------\n"+
        "                        C A L C U L A T I O N (1) \n"+
        "---------------------------------------------------------------------\n\n"+
        "mate.percent(1000, 5) = "+"{ percent: 50, after: 1050, before: 950 }"+"\n"+
        "mate.percent(153, 1.7) = "+"{ percent: 2.6009999999999995, after: 155.601, before: 150.399 }"+"\n"+
        "mate.percent(1000, 10, true) = "+"{ percent: 90.90909090909088,before: 909.0909090909091, after: 1000 }"
    );

}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');

