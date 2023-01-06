function constrCrew(worker){

   if(worker.hasOwnProperty(dizziness)){

      if(worker.dizziness){
         worker.levelOfHydrated = 0.1 * worker.weight * worker.experience;
         worker.dizziness = false;
      }

    
   }

   console.log(worker);

}

constrCrew({
   weight: 60,
   experience: 5,
   levelOfHydrated: 600,
   dizziness: false
}
);