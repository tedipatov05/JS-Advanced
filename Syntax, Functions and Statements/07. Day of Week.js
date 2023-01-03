function dayOfWeek(day){
    let arr = [ "", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]
    if(arr.includes(day)){
        console.log(arr.indexOf(day));
    }
    else{
        console.log("error")
    }
}

dayOfWeek('Invalid')