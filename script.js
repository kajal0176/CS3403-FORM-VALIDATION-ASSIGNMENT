const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const address = document.getElementById('address');
const zipcode = document.getElementById('zipcode');
const state = document.getElementById('state');
const username = document.getElementById('username');
const email = document.getElementById('email');


//event validate 

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validate();
});

//more email validate
const isEmail = (emailVal) => {
  var atSymbol = emailVal.indexOf('@');
  if (atSymbol < 1) return false;
  var dot = emailVal.lastIndexOf('.');
  if (dot < atSymbol + 4) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
}

//define validate func
const validate = () => {
  const firstnameVal = firstname.value.trim();
  const addressVal = address.value.trim();
  const zipcodeVal = zipcode.value.trim();
  const stateVal = state.value.trim();
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();


  //validate firstname
  var idealname = /^[a-z][a-z\s]*$/;
  if (firstnameVal === "") {
    setErrorMsg(firstname, 'name cannot be blank');
  } else if (firstnameVal.length < 3) {
    setErrorMsg(firstname, 'name min 3 char');
  } else if (!firstnameVal.match(idealname)) {
    setErrorMsg(firstname, 'Enter letters and space only');
  } else {
    setSuccessMsg(firstname);
  }

  //validate state
  if(stateVal==="state"){
    setErrorMsg(state, '');
  }
  else{
    setSuccessMsg(state);
  }

  //validate username
  var idealusername  = /(?=.*[!@#$%^&*])/;

  if (usernameVal === "") {
    setErrorMsg(username, 'username cannot be blank');
  } else if (usernameVal.length < 6) {
    setErrorMsg(username, 'username min 6 char');
  } else if(!(idealusername.test(usernameVal))){
    setErrorMsg(username, 'Username should contain atleast one number and one special character');
  } else {
    setSuccessMsg(username);
  }
  //validate email
  if (emailVal === "") {
    setErrorMsg(email, 'email cannot be blank');
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, 'Not a valid Email');
  } else {
    setSuccessMsg(email);
  }
  //validate zipcode
  if (zipcodeVal === "") {
    setErrorMsg(zipcode, 'zipcode cannot be blank');
  } else if (zipcodeVal.length != 5) { 
    setErrorMsg(zipcode, 'not a valid zipcode,zipcode should be of 5 digits');
  } else {
    setSuccessMsg(zipcode);
  }
  //validate address
  var idealaddress = /^[a-zA-Z0-9\s,'-]*$/;
  
  if (addressVal === "") {
    setErrorMsg(address, 'address cannot be blank');
  } else if (addressVal.length < 8) {
    setErrorMsg(address, 'minimum 8 character');
  }  else if (!firstnameVal.match(idealaddress)) {
    setErrorMsg(firstname, 'Enter a valid address');
  }else {
    setSuccessMsg(address);
  }

}

function setErrorMsg(input, errormsgs) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = "form-control error";
  small.innerText = errormsgs;
}

function setSuccessMsg(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";

}
