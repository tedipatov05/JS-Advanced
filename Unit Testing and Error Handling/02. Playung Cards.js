function createCard(face, suit){
    

    try {

        const validFaces = ['2','3','4','5','6','7','8','9','10', 'J' ,'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];

        if (!validFaces.includes(face)) {
            throw new Error(`${face} is not a valid face for playing a card.`)
        }else if (!validSuits.includes(suit)) {
            throw new Error(`${suit} is not a valid suit for playing a card.`)

        }

        switch (suit) {
            case 'S': suit = '\u2660'; break;
            case 'H': suit = '\u2665'; break;
            case 'D': suit = '\u2666'; break;
            case 'C': suit = '\u2663'; break;

        }
        return {
            face: face,
            suit: suit,
            toString() {
    
                return this.face + this.suit;
    
            }
        };
    }  catch (ex){

        console.log(ex.name);
        
    } 

}


