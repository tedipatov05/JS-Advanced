function timeToWalk(steps, footprint, speed){
    let distanceInMetres = steps*footprint;
    let speedMetersPerSecond = speed / 3.6;
    let time = distanceInMetres / speedMetersPerSecond;
    let rest = Math.floor(distanceInMetres / 500);

    let timeInMinutes = Math.floor(time/60);
    let timeInSeconds = Math.round(time-(timeInMinutes*60));
    timeInMinutes += rest;
    let timeInH = Math.floor(time/3600);

    if(timeInMinutes >= 60){
        timeInMinutes -= 60;
        timeInH+=1;
    }
    
    let formattedH = timeInH < 10 ? `0${timeInH}` : `${timeInH}`;
    let formattedMinutes = timeInMinutes < 10 ? `0${timeInMinutes}` : `${timeInMinutes}`;
    let formattedSeconds = timeInSeconds < 10 ? `0${timeInSeconds}` : `${timeInSeconds}`;

    console.log(`${formattedH}:${formattedMinutes}:${formattedSeconds}`);

}

timeToWalk(2564, 0.70, 5.5)