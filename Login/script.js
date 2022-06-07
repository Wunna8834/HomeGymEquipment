const submitBtn = document.querySelector(".sign-up-btn");
const fullName = document.getElementById("full-name");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

const form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    e.preventDefault(); //to prevent to reload on clickng submit btn
   
    checkInputs(); //function
});

checkInputs = () => { //write function in ES6 arrow function
    const fullNameValue = fullName.value.trim(); //trim is used to remove white space

    if(fullNameValue === '') {
        setErrorFor(fullName, 'Please fill your full name'); //callback function
    } else {
        setSuccessFor(fullName);  //callback function
    }

    const userNameValue = userName.value.trim();
    if(userNameValue === '') {                              //if username value is equal to blank,then add error message
        setErrorFor(userName, 'Username cannot be blank');
    } else {
        setSuccessFor(userName);
    }

    const emailValue = email.value.trim();
    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Invalid email');
    } else {
        setSuccessFor(email);
    }

    const password1Value = password1.value.trim();
    if(password1Value === '') {
        setErrorFor(password1, 'Password cannot be blank');
    } else {
        setSuccessFor(password1);
    }

    const password2Value = password2.value.trim();
    if(password2Value === '') {
        setErrorFor(password2, 'Password cannot be blank');
    } else if (password2Value !== password1Value) {
        setErrorFor(password2, 'Please re-type the same password');
    } else {
        setSuccessFor(password2);
    }

    if(fullNameValue !== '' && userNameValue !== '' && email !== '' && password1Value === password2Value) {
        document.body.innerText ="Success";
    }
};

setErrorFor = (input, message) => {
    const formControl = input.parentElement;            //input's parentElement is div
    const text = formControl.querySelector('.message');
    input.classList.add('error');
    text.classList.add('error');
    text.innerText = message;
};

setSuccessFor = (input) => {
    const formControl = input.parentElement;
    const text = formControl.querySelector('.message');
    input.classList.add('success');
    text.classList.remove('error');
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
