
// FOR RESPONSIVE NAV-BAR
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    });

// MODAL JAVASCRIPT

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the button that submits the form
var oyaBtn = document.querySelector(".oyaBtn") 

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// TO TOGGLE PASSWORD VISIBILITY
let Show = document.getElementById('checkBox');
let password = document.getElementById('passy')

Show.addEventListener('click' , () => {
	let type = password.getAttribute('type') === 
	'password' ? 'text' : 'password';
	password.setAttribute('type' , type);
})

// ANIMATED TYPEWRITER

// List of sentences
let _CONTENT = [ 
	
	'Noticed ...',
	'Recognized ...',
	'VISIBLE ...',
	'your DREAM JOB in a CLICK ...',
	'STARTED TODAY!!!'
];

// Current sentence being processed
let part = 0;

// Character number of the current sentence being processed 
let partIndex = 0;

// Holds the handle returned from setInterval
let intervalVAL;

// Element that holds the text
let element = document.querySelector("#text");

// Cursor element 
let cursor = document.querySelector("#cursor");

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	let text =  _CONTENT[part].substring(0, partIndex + 1);
	element.innerHTML = text;
	partIndex++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[part]) {
		// Hide the cursor
		cursor.style.display = 'none';

		clearInterval(intervalVAL);
		setTimeout(function() {
			intervalVAL = setInterval(Delete, 50);
		}, 1000);
	}
}
// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	let text =  _CONTENT[part].substring(0, partIndex - 1);
	element.innerHTML = text;
	partIndex--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(intervalVAL);

		// If current sentence was last then display the first one, else move to the next
		if(part == (_CONTENT.length - 1))
			part = 0;
		else
			part++;
		
		partIndex = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			cursor.style.display = 'inline-block';
			intervalVAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
intervalVAL = setInterval(Type, 200);
