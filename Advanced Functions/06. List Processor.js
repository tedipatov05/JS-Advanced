function solve(input){
    let res = [];

    let funcs = {
        add: (str) => {
            res.push(str);

        },
        remove: (str) =>{
            res = res.filter((item) => item != str);
        },
        print: () => {
            console.log(res.join(','))

        }

    }
    
    for(let cmd of input){
        let [name, str] = cmd.split(' ');
        switch(name){
            case 'add': 
                funcs.add(str);
                break;
            case 'remove': 
                funcs.remove(str);
                break;
            case 'print':
                funcs.print();
                break;
        }


    }
    
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);