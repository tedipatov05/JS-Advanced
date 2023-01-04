function sortArray(array){
    let res = array.sort((a,b) => {
        if(a.length !== b.length){
            return a.length - b.length;
        }else{
            return a.localeCompare(b);
        }

    });

    console.log(res.join('\n'))
}
sortArray(['alpha', 
'beta', 
'gamma']
)