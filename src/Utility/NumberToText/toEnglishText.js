//This function is used for global english conversion only
function toEnglishText(num,isCurrency) {

    var quintillion = Math.floor(num / 1000000000000000000); /* quintillion */
    num -= quintillion * 1000000000000000000;
    var quar = Math.floor(num / 1000000000000000); /* quadrillion */
    num -= quar * 1000000000000000;
    var trin = Math.floor(num / 1000000000000); /* trillion */
    num -= trin * 1000000000000;
    var Gn = Math.floor(num / 1000000000); /* billion */
    num -= Gn * 1000000000;
    var million = Math.floor(num / 1000000); /* million */
    num -= million * 1000000;
    var Hn = Math.floor(num / 1000); /* thousand */
    num -= Hn * 1000;
    var Dn = Math.floor(num / 100); /* Tens (deca) */
    num = num % 100; /* Ones */
    var tn = Math.floor(num / 10);
    var one = Math.floor(num % 10);
    var res = "";

    if (quintillion > 0) {
        res += (toEnglishText(quintillion) + " Quintillion");
    }
    if (quar > 0) {
        res += (toEnglishText(quar) + " Quadrillion");
    }
    if (trin > 0) {
        res += (toEnglishText(trin) + " Trillion");
    }
    if (Gn > 0) {
        res += (toEnglishText(Gn) + " Billion");
    }
    if (million > 0) {
        res += (((res === "") ? "" : " ") + toEnglishText(million) + " Million");
    }
    if (Hn > 0) {
        res += (((res === "") ? "" : " ") + toEnglishText(Hn) + " Thousand");
    }

    if (Dn) {
        res += (((res === "") ? "" : " ") + toEnglishText(Dn) + " Hundred");
    }

    var ones = Array("", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen");
    var tens = Array("", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety");

    if (tn > 0 || one > 0) {
        if(isCurrency)
        {
            if (!(res === "")) {
                res += " And"; //for currency only
            }
        }

        if (!(res === "")) {
            res += " ";
        }

        if (tn < 2) {
            res += ones[tn * 10 + one];
        } else {
            res += tens[tn];
            if (one > 0) {
                res += ("-" + ones[one]);
            }
        }
    }

    if (res === "") {
        res = "Zero";
    }
    return res;
}
module.exports = toEnglishText;