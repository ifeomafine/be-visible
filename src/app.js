
// FOR THE MODAL FORM
// Get the modal
 const modalBox = document.getElementById('recruitModal')
 // Get the button that opens the modal
 const button = document.getElementById('theirBtn')
 // Get the <spanIcon> element that closes the modal
 const spanIcon = document.querySelector('.close-icon')

 // When the user clicks the button, open the modal 
 button.addEventListener('click' , () => {
     modalBox.style.display = "block"
 })

 // When the user clicks on <spanIcon> (x), close the modal
 spanIcon.addEventListener('click' , () => {
     modalBox.style.display = "none"
 })
 
// TO TOGGLE PASSWORD VISIBILITY
let Show = document.getElementById('checkBox');
let password = document.getElementById('passy')

Show.addEventListener('click' , () => {
	let type = password.getAttribute('type') === 
	'password' ? 'text' : 'password';
	password.setAttribute('type' , type);
})
// FOR API INTEGRATION
const quote = document.querySelector('.quotes')
const author = document.querySelector('.display')

  setInterval(() => {
	fetch("https://type.fit/api/quotes")
	.then(response => response.json())
	.then(data => {
		const randomTxt = Math.floor(Math.random() * data.length);
		const item = data[randomTxt]
		quote.innerHTML = `${item.text}`
		author.innerHTML = `${item.author}`
  
		if (item.author === " " || item.author === null) {
			author.innerHTML = "Unknown"
		}
	
	});
  }, 6000)

  // GET STARTED BUTTON 
  function myFunction() {
	alert("Welcome!");
	body.style.display = 'none'
  }

const start = document.querySelector('.started')

start.addEventListener('load', () => {
	onload.alert('oya na')
});

  // FOR RESPONSIVE NAV-BAR
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    });

	// FOR FORM VALIDATION


