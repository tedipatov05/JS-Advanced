function createAssemblyLine() {

    return {
        hasClima(mycar) {
            mycar.temp = 21;
            mycar.tempSettings = 21;
            mycar.adjustTemp = () => {
                if (mycar.temp < mycar.tempSettings) { mycar.temp++; }
                else if (mycar.temp > mycar.tempSettings) { mycar.temp--; }

            };

        },
        hasAudio(mycar) {
            mycar.currentTrack = null;
            mycar.nowPlaying = () => {
                if (mycar.currentTrack !== null) {
                    console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`);
                }
            }
        },
        hasParktronic(mycar) {
            mycar.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log();
                }


            }
        }
    }



}
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
