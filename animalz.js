// JavaScript file to add animations

// Function to animate the title by rotating the words
function animateTitle() {

    var titleElement = document.getElementById("Title");
    var title = titleElement.textContent;

    function updateTitle() {
        title = title.slice(1) + title.charAt(0);
        titleElement.textContent = title;
        titleElement.style.transform = "rotate(10deg)";
        setTimeout(function () {
            titleElement.style.transform = "rotate(0deg)";
        }, 500);

        // Repeat the update after 100 milliseconds
        setTimeout(updateTitle, 100);
    }

    updateTitle(); // Start
}

// Function to redirect user to a surprise animal if they click the "Surprise" option
function redirect() {

    var pages = "abcdefghijklmnopqrstuvwxyz".split('');
    var index = Math.floor(Math.random() * pages.length);

    var randomPage = pages[index];

    var new_page = "animals/" + randomPage + ".html";
    
    // Redirect to the URL
    window.location.href = new_page;
}

// Function to validate the contact us resume form
function validateForm() {

	console.log("Form validation started...");
	var ageInput = document.getElementById('age').value;

	if (isNaN(ageInput) || ageInput < 18 || ageInput > 70) {
        	alert("Please enter a valid age between 18 and 70.");
        	return false;
    	}

	alert("Form submitted successfully!");
	return true;
}

// Additional function once everything else but images is loaded to show a random fact of the day for fun
document.addEventListener('DOMContentLoaded', function() {

    // 20 animal facts to be chosen from randomly
    const animalFacts = [
	"Gorillas can catch human colds and other illnesses.",
	"A newborn Chinese water deer is so small it can almost be held in the palm of the hand.",
	"Ostriches can run faster than horses, and the males can roar like lions.",
	"A lion in the wild usually makes no more than twenty kills a year.",
	"The female lion does ninety percent of the hunting.",
	"The world’s smallest dog was a Yorkshire Terrier, which weighed just four ounces.",
	"Turtles, water snakes, crocodiles, alligators, dolphins, whales, and other water going creatures will drown if kept underwater too long.",
	"Almost half the pigs in the world are kept by farmers in China.",
	"On average, dogs have better eyesight than humans, although not as colorful.",
	"Deer have no gall bladders.",
	"There is an average of 50,000 spiders per acre in green areas.",
	"Snakes are carnivores, which means they only eat animals, often small ones such as insects, birds, frogs and other small mammals.",
	"In Alaska it is illegal to whisper in someone’s ear while they’re moose hunting.",
	"The bat is the only mammal that can fly.",
	"The leg bones of a bat are so thin that out of the 1,200 species of bats, only 2 can walk on ground.",
	"Some male songbirds sing more than 2,000 times each day.",
	"The only mammals to undergo menopause are elephants, humpback whales and human females.",
	"Blue-eyed lemurs are one of two (non-human) primates to have truly blue eyes.",
	"A tarantula spider can survive for more than two years without food.",
	"For every human in the world there are one million ants."

    ];

    // Random fact chosen
    const randomFactIndex = Math.floor(Math.random() * animalFacts.length);
    const randomFact = animalFacts[randomFactIndex];

    const factText = document.getElementById('fact');
    factText.textContent = randomFact;
});

// Call function when the page loads
// This can be an issue in large websites as pages load too slowly; this is fine as it's one function and a small website.

window.onload = function() {
	animateTitle();
};

