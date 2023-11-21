export var howgood = "";

function GetToday() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    if (currentHour >= 0 && currentHour <= 11) {
        howgood = "Good Morning";
        console.log("Good Morning");
    } else if (currentHour >= 12 && currentHour <= 18) {
        howgood = "Good Afternoon";
        console.log("Afternoon");
    } else if (currentHour >= 19 && currentHour <= 24) {
        howgood = "Good Evening";
        console.log("Evening");
    }
}


GetToday();