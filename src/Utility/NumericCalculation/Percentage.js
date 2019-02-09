//Percentage
function percentage(principle,percent,isReverse=false){
    if(typeof principle==="number" && typeof percent==="number" && typeof isReverse==="boolean"){
        if(isReverse){
            let mainAmount = ((principle * 100)/(100+parseFloat(percent)));
            return({
                percent: (principle - mainAmount),
                before : mainAmount,
                after : (parseFloat(mainAmount)+parseFloat(parseFloat(mainAmount*percent)/100))
            });
        }else{
            let per = (parseFloat((principle * percent) / 100));
            return ({
                percent: per,
                after:(parseFloat(principle)+parseFloat(per)),
                before:(parseFloat(principle)-parseFloat(per))
            });
        }
    }else{
        return ("number,number,boolean expected");
    }
}


//Exports
module.exports ={
    percentage:percentage
};