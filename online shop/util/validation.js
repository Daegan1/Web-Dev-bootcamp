function isEmpty(value) {
  return !value || value.trim() === "";
}

function userCredentialsAreValid(email, password) {
  email && email.includes("@") && password && password.trim().length > 4;
}

function userDetailsAreValid(email, password, name, address, zipcode, city) {
  return (
    userCredentialsAreValid(email, password) &&
    !isEmpty(name) &&
    !isEmpty(address) &&
    !isEmpty(zipcode) &&
    !isEmpty(city)
  );
}

function emailIsConfirmed(email, confirmedEmail) {
  return !email === confirmedEmail;
}

module.exports = {
  userDetailsAreValid: userDetailsAreValid,
  emailIsConfirmed: emailIsConfirmed,
};
