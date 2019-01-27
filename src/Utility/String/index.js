//HTML Parse
function toPlainText(htmlOrRichText){
    if(typeof htmlOrRichText==="string"){
        let rtf = htmlOrRichText.replace(/\\par[d]?/g, "");
        let text =  rtf.replace(/(\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?)|(&lt;)|(&gt;)/g, "").trim();
        let finalHTML = text.replace(/\\'[0-9a-zA-Z]{2}/g, "").trim();
        finalHTML = finalHTML.replace(/(\s<\s)|(\s<)|(<\s)/g,`<`).replace(/</g,` < `);
        return finalHTML.replace(/(\s>\s)|(>\s)|(\s>)/g,`>`).replace(/>/g,` > `);
    }else{
        return "String expected";
    }
}

//make random String
function randString(strLength){
    strLength = typeof(strLength) === "number" && strLength > 0 ? strLength : false;
    if(strLength){
        let text = "";
        let possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < strLength; i++)
            text += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
        return text;
    }else{
        return false;
    }
}

module.exports ={
    toPlainText:toPlainText,
    randString:randString
}