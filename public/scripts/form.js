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