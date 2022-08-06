const isNotEmpty = (text) => {
  if (text) return text.trim().length !== 0;
  else return false;
}

export const validateNameInput = (value) => isNotEmpty(value);
export const validateEmailInput = (email) => {
  const re = /\S+@\S+\.\S+/;
  return (re.test(email) && email.length > 6);
}

export const validateMessageTextArea = (value) => {
  return value.trim().length >= 120 ? true : false;
}
export const validatePasswordLength = (value) => {
  return value.trim().length >= 6 ? true : false;
}
