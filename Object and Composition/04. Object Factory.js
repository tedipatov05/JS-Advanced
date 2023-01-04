function factory(library, orders){
    const res = [];

    for(let order of orders){
        const currobj = Object.assign({}, order.template);
        for(let part of order.parts){
            currobj[part] = library[part];
        }
        res.push(currobj);
    }

    return res;

}
