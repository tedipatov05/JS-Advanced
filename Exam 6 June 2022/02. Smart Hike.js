class SmartHike{
    constructor(username){
        this.username = username;
        this.goals = {};
        this.listofHikes = [];
        this.resourses = 100;
    }
    addGoal(peak, altitude){
        if(!this.goals[peak]){
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;

        }
        return `${peak} has already been added to your goals`;


    }
    hike(peak, time, difficultyLevel){
        if(this.goals.hasOwnProperty(peak)){
            if(this.resourses == 0){
                throw new Error("You don't have enough resources to start the hike");
            }
            let diff = Number(this.resourses) - Number(time) * 10;
            if(diff < 0){
                return "You don't have enough resources to complete the hike";
            }
            else{
                this.resourses -= time * 10;
                this.listofHikes.push({peak, time, difficultyLevel});
                return `You hiked ${peak} peak for ${time} hours and you have ${this.resourses}% resources left`
            }
        }
        else{
            throw new Error(`${peak} is not in your current goals`);
        }
    }
    rest(time){
        this.resourses += time * 10;
        if(this.resourses >= 100){
            this.resourses = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }
        return `You have rested for ${time} hours and gained ${time*10}% resources`;

    }
    showRecord(criteria){
        if(this.listofHikes.length == 0){
            return `${this.username} has not done any hiking yet`;
        }
        else{
            if(criteria == 'all'){
                let res = 'All hiking records:\n';
                for (let index = 0; index < this.listofHikes.length; index++) {
                    let {peak, time} = this.listofHikes[index];

                    res += `${this.username} hiked ${peak} for ${time} hours\n`;
                    
                }
                return res.trimEnd();

            }
            else{
                let arr = [];
                let bestHike = {};
                for (let index = 0; index < this.listofHikes.length; index++) {
                    let element = this.listofHikes[index];
                    let time = Number.MAX_SAFE_INTEGER;
                    
                    if(element.difficultyLevel == criteria){
                        arr.push(element);

                        if(element.time < time){
                            bestHike = element;
                        }

                    }
                    
                }
                if(arr.length == 0){
                    return `${this.username} has not done any ${criteria} hiking yet`;
                }
                return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
                
            }

        }
    }

}

try {
    const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));

} catch (ex) {
    console.log(ex.message);
}
