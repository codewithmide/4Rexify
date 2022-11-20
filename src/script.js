const form = document.getElementById('form');

form.addEventListener('submit', e => {
	e.preventDefault();

	const firstName = form['firstname'].value;
	const lastName = form['lastname'].value;
	const email = form['email'].value;
	const subject = form['subject'].value;

	if (firstName === '') {
		addErrorTo('firstname', 'First Name is required');
	} else {
		removeErrorFrom('firstname');
	}

	if (lastName === '') {
		addErrorTo('lastname', 'Last Name is required');
	} else {
		removeErrorFrom('lastname');
	}

	if (email === '') {
		addErrorTo('email', 'Email is required');
	} else if (!isValid(email)) {
		addErrorTo('email', 'Email is not valid');
	} else {
		removeErrorFrom('email');
	}

    if (subject === '') {
		addErrorTo('subject', 'Subject is required');
	} else {
		removeErrorFrom('subject');
	}
});

function addErrorTo(field, message) {
	const formControl = form[field].parentNode;
	formControl.classList.add('error');

	const small = formControl.querySelector('small');
	small.innerText = message;
}

function removeErrorFrom(field) {
	const formControl = form[field].parentNode;
	formControl.classList.remove('error');
}

function isValid(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

// Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let navLinks = document.querySelector('.mobile-nav-links');
let menu = document.querySelector('.menu');
let close = document.querySelector('.close');

menu.addEventListener('click', () => {
  navLinks.style.display = 'flex';
  menu.style.display = 'none';
  close.style.display = 'flex';
})

close.addEventListener('click', () => {
  navLinks.style.display = 'none';
  menu.style.display = 'flex';
  close.style.display = 'none';
})