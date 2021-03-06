
// FOR RESPONSIVE NAV-BAR
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    });

// MODAL JAVASCRIPT

let modal = document.getElementById("myModal"); // Get the modal
let btn = document.getElementById("myBtn"); // Get the button that opens the modal
let span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
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

// FORM VALIDATION
let email = document.querySelector('.input')
let passWord = document.querySelector('#passy')
let small = document.querySelector('.small')

email.addEventListener('submit' , () => {
	if(email.value != 'sterling.ng') {
		small.textContent = 'Email must be a STERLING MAILING BOX'
	}
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
let part = 0; // Current sentence being processed
let partIndex = 0; // Character number of the current sentence being processed 

// Holds the handle returned from setInterval
let intervalVAL;
let element = document.querySelector("#text"); // Element that holds the text
let cursor = document.querySelector("#cursor"); // Cursor element 

// Implement typing effect
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
