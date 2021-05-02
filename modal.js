//    RESPONSIVE

function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

//    DOM ELEMENTS

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const body = document.getElementById("body");
const hero = document.getElementById("hero");
const logo = document.getElementById("logo");
const logoBox = document.getElementById("logoBox");

//    LAUNCH MODAL EVENT

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//    LAUNCH MODAL FORM

function launchModal() {
	modalbg.style.display = "block";
	if (media.matches) {
		logo.style.display = "block";
		logo.style.width = "130px";
		logoBox.style.position = "relative";
		logoBox.style.bottom = "5px";
		hero.style.display = "none";
	}
}

//    CLOSE CROSS

let closer = document.getElementById("closer");

closer.onclick = function () {
	modalbg.style.display = "none";
	if (media.matches) {
		hero.style.display = "block";
		logoBox.style.position = "static";
		logo.style.width = "103px";
	} else {
		hero.style.display = "grid";
		logo.style.width = "280px";
	}
};

//    BTN CLOSE THANKS

const btnfnl = document.getElementById("valide2");
btnfnl.onclick = function () {
	modalbg.style.display = "none";
	if (media.matches) {
		logo.style.width = "103px";
		hero.style.display = "block";
		logoBox.style.position = "static";
	} else {
		hero.style.display = "grid";
		logo.style.width = "280px";
	}
};

//    FORM_CONST

const form = document.getElementById("form");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const tournaments = document.getElementById("tournaments");
const checkbox = document.getElementById("checkbox1");

//    FORM_FUNCTION

validate();
function validate() {
	const firstValue = first.value.trim();
	const emailValue = email.value.trim();
	const lastValue = last.value.trim();
	const birthdateValue = birthdate.value.trim();
	const tournamentsValue = tournaments.value.trim();

	//    FIRSTNAME

	if (firstValue === "") {
		//  BLANK
		setErrorFor(first);
		document.getElementById("firstNameError").innerHTML =
			" This field can't be empty ";
		return false;
		//  ERROR 2 LETTERS
	} else if (firstValue.length < 2) {
		setErrorFor(first);
		document.getElementById("firstNameError").innerHTML =
			"Please enter at least two letters ";
		return false;
		//  SUCCESS
	} else {
		setSuccessFor(first);
		document.getElementById("firstNameError").innerHTML = "";
	}

	//    LASTNAME

	if (lastValue === "") {
		//    BLANK
		setErrorFor(last);
		document.getElementById("lastNameError").innerHTML =
			" This field can't be empty ";
		return false;
		//    ERROR 2 LETTERS
	} else if (lastValue.length < 2) {
		setErrorFor(last);
		document.getElementById("lastNameError").innerHTML =
			"Please enter at least two letters ";
		return false;
	} else {
		//    SUCCESS
		setSuccessFor(last);
		document.getElementById("lastNameError").innerHTML = "";
	}

	//    EMAIL

	if (emailValue === "") {
		//    BLANK
		setErrorFor(email);
		document.getElementById("emailError").innerHTML =
			" This field can't be empty ";
		return false;
		//    INVALIDE EMAIL
	} else if (!isEmail(emailValue)) {
		setErrorFor(email);
		document.getElementById("emailError").innerHTML =
			"Your email is invalide. Ex: gameon@mail.net";
		return false;
	} else {
		//succes class
		setSuccessFor(email);
		document.getElementById("emailError").innerHTML = "";
	}

	//    BIRTHDATE

	if (birthdateValue === "") {
		//    ERROR
		setErrorFor(birthdate);
		document.getElementById("birthdateError").innerHTML =
			"Please select your birthdate";
		return false;
	} else {
		//    SUCCESS
		setSuccessFor(birthdate);
		document.getElementById("birthdateError").innerHTML = "";
	}

	//    TOURNAMENTS

	if (tournamentsValue === "") {
		//    ERROR
		setErrorFor(tournaments);
		document.getElementById("tournamentError").innerHTML =
			"Please select a number between 0 and 99";
		return false;
	} else {
		//    SUCCESS
		setSuccessFor(tournaments);
		document.getElementById("tournamentError").innerHTML = "";
	}

	//    LOCATION

	var radio = document.querySelector('input[name = "location"]:checked');
	//    SUCCESS
	if (radio != null) {
		document.getElementById("rad").innerHTML = "";
		//    ERROR
	} else {
		document.getElementById("rad").innerHTML = "Please select your location";
		return false;
	}

	//    TERMS

	if (!checkbox.checked) {
		//    ERROR
		document.getElementById("term").innerHTML =
			"Please read and accept the terms of use. Newsletter is optionnal";
		return false;
		//    SUCCESS
	} else {
		document.getElementById("term").innerHTML = "";
	}

	//    RETURN TRUE

	return true;
}

//    THANKS (FUNCTION ?)
const test = document.getElementById("test");

function x() {
	if (validate()) {
		if (media.matches) {
			form.innerText = "Thank you for submitting your registration details";
			test.style.height = "87vh";
			form.style.marginTop = "50%";
			form.style.fontSize = "1.3em";
			form.style.textAlign = "center";
			btnfnl.style.visibility = "visible";
			btnfnl.style.marginTop = "70%";
			btnfnl.style.marginBottom = "5vh";
		} else {
			form.innerText = "Thank you for submitting your registration details";
			test.style.height = "100vh";
			form.style.marginTop = "75%";
			form.style.paddingTop = "30%";
			form.style.fontSize = "1.5em";
			form.style.padding = "0 30px";
			form.style.textAlign = "center";
			btnfnl.style.visibility = "visible";
			btnfnl.style.marginTop = "70%";
			btnfnl.style.marginBottom = "15%";
			btnfnl.style.fontWeight = "bold";
		}
		if (media2.matches) {
			btnfnl.style.marginTop = "35%";
		}
	}
}

//		MEDIA QUERIES 1025 PX

const media = window.matchMedia("(max-width: 1030px)");
const media2 = window.matchMedia("(max-width: 320px)");

//    ERROR

function setErrorFor(input) {
	const formControl = input.parentElement; // .form-control
	//add error class
	formControl.className = "form-control error";
}

//    SUCCESS

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}

//    EMAIL

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}
