// ex 5
var intervalId;

window.onload = function() {
	if (document.getElementById("watch") != undefined) {
		intervalId = setInterval(mostraRellotge, 1000);		
	}else{
		clearInterval(intervalId);
	}
}

function mostraRellotge(){
	var currentDate = new Date();
	let hours = currentDate.getHours().toString().padStart(2, '0');
	let minutes = currentDate.getMinutes().toString().padStart(2, '0');
	let seconds = currentDate.getSeconds().toString().padStart(2, '0');
	document.getElementById("watch").innerHTML = `${hours}:${minutes}:${seconds}`;
}

function stopWatch(){
	clearInterval(intervalId);
}

// Function to update the footer content dynamically
document.addEventListener("DOMContentLoaded", function () {
    const dynamicFooter = document.getElementById("dynamic-footer");

    // Current date
    const currentDate = new Date();
    
    // Start date: September 16, 2024
    const startDate = new Date(2024, 8, 16); // Months in JavaScript start at 0 (September = 8)

    // Calculate the number of days elapsed
    const timeDiff = currentDate - startDate;
    const daysElapsed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Localized date format
    const formattedDate = currentDate.toLocaleDateString();

    // Update footer content
    dynamicFooter.innerHTML += `Today is ${formattedDate}. ${daysElapsed} days have passed since September 16, 2024.`;
});
