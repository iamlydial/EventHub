interface FormValues {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

function validation(values: FormValues): FormErrors {
  let errors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const passwordPattern =
  //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+|{}[\]:";'<>?,./])(?=.*[^\s]).{8,}$/;

  if (typeof values.email !== "string" || values.email.trim() === "") {
    errors.email = "Email should not be empty";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Invalid email format";
  }

  // if (typeof values.password !== "string" || values.password.trim() === "") {
  //   errors.password = "Password should not be empty";
  // } else if (!passwordPattern.test(values.password)) {
  //   errors.password =
  //     "Password must contain at least 8 characters including one uppercase letter, one lowercase letter, and one digit";
  // }

  return errors;
}

export default validation;
