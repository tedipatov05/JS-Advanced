function addAndRemoveElements(arrOfCommands){
    let res = [];
    let num = 1;

    for(let item of arrOfCommands){
        switch(item){
            case "add":
                res.push(num);
                break;
            case "remove":
                res.pop();
                break;
            

        }
        num++;
    }
    if(res.length === 0){
        console.log("Empty");
    }else{
        res.forEach(i => console.log(i));
    }

}
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add'])