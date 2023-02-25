class footballTeam{
    constructor(clubName, country){
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
    newAdditions(footballPlayers){

        let arrNames = [];

        for (let player1 of footballPlayers) {

            let [name, age, playerValue] = player1.split('/');
            let player = this.invitedPlayers.find(p => p.name == name);

            if(player && player.playerValue < playerValue){
                player.playerValue = playerValue;

            }
            else{
                this.invitedPlayers.push({name, age, playerValue});
            }

            arrNames.push(name);

            
            
        }
        return `You successfully invite ${arrNames.join(', ')}.`;

    }
    signContract(selectedPlayer){

        let [name, playerOffer] = selectedPlayer.split('/');

        let player = this.invitedPlayers.find(p => p.name == name);

        if(!player){
            throw new Error(`${name} is not invited to the selection list!`);
        }else if(player.playerValue > playerOffer){
            let priceDifference = player.playerValue - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`)
        }

        player.playerValue = "Bought";

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
        

    }
    ageLimit(name, age){
        let player = this.invitedPlayers.find(p => p.name == name);

        if(!player){
            throw new Error(`${name} is not invited to the selection list!`);
        } else if(player.age < age){

            let differenceAge = age-player.age;

            let message = differenceAge < 5 
            ?  `${name} will sign a contract for ${differenceAge} years with ${this.clubName} in ${this.country}!` 
            : `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`


            return message;
        } else if(player.age >= age){
            return `${name} is above age limit!`;
        }
        
    }
    transferWindowResult(){
        let buff = "Players list:\n";

        this.invitedPlayers = this.invitedPlayers.sort((a,b) => a.name.localeCompare(b.name));

        for (const player of this.invitedPlayers) {

            buff += `Player ${player.name}-${player.playerValue}\n`;
            
        }

        return buff.trimEnd();

    }
}

try {
    let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

    
} catch (error) {
    console.log(error.message);
    
}