// JavaScript file to add animations

// Function to animate the title by rotating the words

function animateTitle() {

    var titleElement = document.getElementById("Title");
    var title = titleElement.textContent;

    function updateTitle() {
        title = title.slice(1) + title.charAt(0);
        titleElement.textContent = title;
        titleElement.style.transform = 'rotate(10deg)';
        setTimeout(function () {
            titleElement.style.transform = 'rotate(0deg)';
        }, 500);

        // Repeat the update after 200 milliseconds
        setTimeout(updateTitle, 200);
    }

    updateTitle(); // Start immediately
}

// Function to generate random animal names on click
 writeRNGName = function () {

    var animal_names= new Array();

    animal_names[0] = "Action is the real measure of intelligence.";
    animal_names[1] = "Baseball has the great advantage over cricket of being sooner ended.";
    animal_names[2] = "Every goal, every action, every thought, every feeling one experiences, whether it be consciously or unconsciously known, is an attempt to increase one's level of peace of mind.";
    animal_names[3] = "A good head and a good heart are always a formidable combination.";

    var rand = Math.floor(Math.random()*animal_names.length);
    //document.write(animal_names[rand]);

  }
  

// Call all functions when the page loads
// This can be an issue in large websites as pages load too slowly, but doesn't pose an issue here

window.onload = function() {
	animateTitle();
	writeRNGName();
};

