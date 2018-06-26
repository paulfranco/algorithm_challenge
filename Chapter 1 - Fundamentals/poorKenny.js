// Poor Kenny
//Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days. there were 10 days with Volcanos, 15 other 
// with Tsunamis, 20 earthquakes, 25 blizzards, and 30 meteors (for 100 days total). If these probabilities continue, write whatHappensToday()
// to print a day's outcome

//set up the function
function whatHappensToday() {
    // create a variable disasterNum and assign it a random number from 1 to 100
    var disasterNum = Math.floor((Math.random() * (101 - 1))+1);
    console.log(disasterNum);
    if (disasterNum >= 1 && disasterNum <= 10) {
        console.log("Volcano");
    } else if (disasterNum > 10 && disasterNum <= 30) {
        console.log("Earthquake");
    } else if (disasterNum > 30 && disasterNum <= 55) {
        console.log("Blizzard");
    } else if (disasterNum > 55 && disasterNum <= 85) {
        console.log("Meteor strike");
    } else {
        console.log("Nothing happened");
    }
}

whatHappensToday()