interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  telephone_number: string; // Adding telephone field to FormValues interface
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  telephone_number?: string; // Adding telephone field to FormErrors interface
}

function validation(values: FormValues): FormErrors {
  let errors: FormErrors = {};
  const namePattern = /^[A-Za-z\d\s\-']+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+|{}[\]:";'<>?,./])(?=.*[^\s]).{8,}$/;
  // const telephonePattern = /^(?:(?:\+|00)44|0)7(?:\d\s?){9}$/; // UK telephone pattern

  if (values.name.trim() === "") {
    errors.name = "Username should not be empty";
  } else if (!namePattern.test(values.name)) {
    errors.name = "Invalid username format";
  }

  if (values.email.trim() === "") {
    errors.email = "Email should not be empty";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (values.password.trim() === "") {
    errors.password = "Password should not be empty";
  } else if (!passwordPattern.test(values.password)) {
    errors.password =
      "Password must contain at least 8 characters including one uppercase letter, one lowercase letter, one special character and one number";
  }

  if (values.confirmPassword.trim() === "") {
    errors.confirmPassword = "Please confirm your password";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  // if (values.telephone_number.trim() === "") {
  //   errors.telephone_number = "Telephone number should not be empty";
  // } else if (!telephonePattern.test(values.telephone_number)) {
  //   errors.telephone_number = "Invalid UK telephone number format";
  // }

  return errors;
}

export default validation;
