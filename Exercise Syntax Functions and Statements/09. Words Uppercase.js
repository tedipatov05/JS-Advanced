function wordsUppercase(text){

    let res = [];
    let buff = "";


    for(let i = 0; i<text.length;i++){
        let chCode = text.charCodeAt(i);
        if((chCode >= 65 && chCode <=90) || (chCode >=97 && chCode <=122)){
            buff += text[i];

        }else{
            res.push(buff);
            buff= "";
        }

    }
    if(buff){
        res.push(buff);
    }

    
    res.forEach(w => console.log(w.toUpperCase()));

}

wordsUppercase('Hi, how are you?');

function wordUpper(text){
    return text.match(/\w+/g).join(", ").toUpperCase();
}

