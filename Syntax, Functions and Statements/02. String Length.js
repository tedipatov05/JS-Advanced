

function stringLength(str1, str2, str3){
    let str1Length = str1.length;
    let str2Length = str2.length;
    let str3Length = str3.length;

    let sumLengths = str1Length + str2Length + str3Length;
    let average = Math.floor(sumLengths/3);

    console.log(sumLengths);
    console.log(average);


}

stringLength('pasta', '5', '22.3')