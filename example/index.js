let http = require('http');
let mate = require("../src");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end(
        "---------------------------------------------------------------------\n"+
        "                              T I M E\n"+
        "---------------------------------------------------------------------\n\n"+
        "mate.utcTimeStamp().timeString = "+mate.utcTimeStamp().timeString+"\n"+
        "mate.utcTimeStamp().timeStamp = "+mate.utcTimeStamp().timeStamp+"\n"+
        "mate.currTimestamp() = "+mate.currTimestamp()+"\n"+
        "mate.stringToTimestamp(\"2019-01-24T12:50:37\") = "+mate.stringToTimestamp("2019-01-24T12:50:37")+"\n"+
        "mate.calcDate(\"+\",\"day\",2, \"2019-1-20 12:50:37\") = "+mate.calcDate("+","day",2, "2019-1-20 12:50:37")+"\n"+
        "mate.calcDate(\"+\",\"day\",1) = "+mate.calcDate("+","day",1)+"\n"+
        "mate.calcDate(\"-\",\"day\",2, \"2019-1-20 12:50:37\") = "+mate.calcDate("-","day",2, "2019-1-20 12:50:37")+"\n"+
        "mate.calcDate(\"-\",\"day\",1) = "+mate.calcDate("-","day",1)+"\n"+

    "\n---------------------------------------------------------------------\n"+
    "                              U T I L\n"+
    "---------------------------------------------------------------------\n\n"+
    "mate.randString(7) = "+mate.randString(7)+"\n"+
    "mate.response(\"200\", \"success\", \"message\", [{\"data\":\"demo data\"}]) = "+mate.response("200", "success", "message", [{"data":"demo data"}])+"\n"+
    "mate.promiseResponse(true,[{\"data\":\"demo data\"}]) = "+mate.randString(true,[{"data":"demo data"}])+"\n"+
    "mate.snakeToCamel(\"my_var\") = "+mate.snakeToCamel("my_var")+"\n"+
    "mate.snakeToCamel({\"my_var1\":\"variable1\", \"my_var2\":\"variable2\"}) = "+mate.snakeToCamel({my_var1:"variable1", my_var2:"variable2"})+"\n"+
    "mate.camelToSnake(\"myVar\") = "+mate.camelToSnake("myVar")+"\n"+
    "mate.camelToSnake({\"myVar1\":\"variable1\", \"myVar2\":\"variable2\"}) = "+mate.camelToSnake({myVar1:"variable1", myVar2:"variable2"})+"\n"
    );
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');

