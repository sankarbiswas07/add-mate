
//Generate Current Timestamp
function currTimestamp(){
    let time = new Date().toISOString().slice(-13, -5).trim();
    let date = new Date().toISOString().split("T")[0];
    return date+" "+time;
}

//GMT timeStamp and timeString for mongo insert
function utcTimeStamp(){
    const date = new Date();
    const utc_string = date.toISOString();
    const utc_time_stamp = Math.round(new Date(utc_string).getTime());
    return {
        timeStamp:utc_time_stamp,
        timeString:utc_string
    };
}

//date time string to timeStamp [from database to store]
function stringToTimestamp(dateTimeString){
    let date = new Date(dateTimeString);
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// + - day from GMT/UTC time
function calcDate(sign, opt ,value, optionalDateTime){
    let _date;
    if(sign === "+" || sign === "-"){
        if(optionalDateTime === undefined){
            _date = new Date();
        }else{
            _date = new Date(optionalDateTime);
        }
        let year = _date.getFullYear();
        let month = _date.getMonth();
        let day = _date.getDate();

        let hour = _date.getHours();
        let minute = _date.getMinutes();
        let second = _date.getSeconds();

        switch(opt){
            case "year":
                year = (sign==="+") ? year+value : year-value;
                break;
            case "month":
                month = (sign==="+") ? month+value : month-value;
                break;
            case "day":
                day = (sign==="+") ? day+value : day-value;
                break;
        }

        if(optionalDateTime !== undefined){
            let hasOldDateObject = new Date(year,month,day,hour,minute,second);
            return `${hasOldDateObject.getFullYear()}-${hasOldDateObject.getMonth()+1}-${hasOldDateObject.getDate()} ${hasOldDateObject.getHours()}:${hasOldDateObject.getMinutes()}:${hasOldDateObject.getSeconds()}`;
        }else{
            let dateTimeString = new Date(year,month,day,hour,minute,second).toISOString();
            let time = dateTimeString.slice(-13, -5).trim();
            let date = dateTimeString.split("T")[0];
            return date+" "+time;
        }
    }else{
        return false;
    }
}

module.exports ={
    currTimestamp: currTimestamp,
    utcTimeStamp: utcTimeStamp,
    stringToTimestamp: stringToTimestamp,
    calcDate: calcDate
};

