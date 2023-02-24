class SummerCamp{
    constructor(organaizer, location){
        this.organaizer = organaizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
       
        this.listOfParticipants = [];
    }

    registerParticipant (name, condition, money){
        if(!this.priceForTheCamp[condition]){
            throw new Error("Unsuccessful registration at the camp.");
        }
        let participant = this.listOfParticipants.find(p => p.name == name);
        if(participant){
            return `The ${name} is already registered at the camp.`;
        }

        if(money < this.priceForTheCamp[condition]){
            return  `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({name, condition, power: 100, wins: 0});
        return `The ${name} was successfully registered.`;
    }
    unregisterParticipant (name){
        let participant = this.listOfParticipants.find(p => p.name == name);

        if(!participant){
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants = this.listOfParticipants.filter(p => p.name != name);
         
        return `The ${name} removed successfully.`
    }
    timeToPlay (typeOfGame, participant1, participant2){
        if(typeOfGame == "WaterBalloonFights"){
            let player1 = this.listOfParticipants.find(p => p.name == participant1);
            let player2 = this.listOfParticipants.find(p => p.name == participant2);

            if(!player1 || !player2){
                throw new Error(`Invalid entered name/s.`);
            }
            else if(player1.condition !== player2.condition){
                throw new Error(`Choose players with equal condition.`);
            }

            if(player1.power > player2.power){
                player1.wins++;
                return `The ${player1.name} is winner in the game ${typeOfGame}.`;
            }else if(player2.power > player1.power){
                player2.wins++;
                return `The ${player2.name} is winner in the game ${typeOfGame}.`;

            }
            else{
                return `There is no winner.`;
            }
        } else if(typeOfGame == "Battleship"){

            let player1 = this.listOfParticipants.find(p => p.name == participant1);

            if(!player1){
                throw new Error(`Invalid entered name/s.`);
            }

            player1.power += 20;

            return `The ${player1.name} successfully completed the game ${typeOfGame}.`;
            
        }


    }

    toString(){
        let buff = `${this.organaizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;


        this.listOfParticipants = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        for (const participant of this.listOfParticipants){

            buff += `${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}\n`;

            
        }

        return buff.trimEnd();
    }

}

try {
    const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));


    
} catch (error) {
    console.log(error.message)
    
}