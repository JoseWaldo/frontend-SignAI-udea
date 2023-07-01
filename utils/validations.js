export const validateEmail = (email) => {
  const pattern = /^[\w\.-]+@[\w\.-]+\.\w+$/;
  let isCorrectEmail = false;
  let messageEmail = "";

  if (email.length == 0) {
    messageEmail = "El correo es un campo obligatorio";
  } else if (pattern.test(email)) {
    isCorrectEmail = true;
    messageEmail = "El correo es valido.";
  } else {
    messageEmail = "El correo tiene un formato invalido.";
  }

  return { isCorrectEmail, messageEmail };
};

export const validateUsername = (username) => {
  const pattern = /^[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
  let isCorrectUser = false;
  let messageUser = "";
  if (pattern.test(username)) {
    messageUser = "El usuario es valido.";
    isCorrectUser = true;
  } else if (username.length == 0) {
    messageUser = "El usuario es un campo obligatorio";
  } else {
    messageUser = "El usuario tiene un formato invalido.";
  }

  return { isCorrectUser, messageUser };
};

export const validatePassword = (password) => {
  const lengthPassword = password.length;
  let isCorrectPswd = false;
  let messagePswd = "";

  if (lengthPassword == 0) {
    messagePswd = "La contraseña es un campo obligatorio.";
  } else if (lengthPassword < 5) {
    messagePswd = "La contraseña debe ser mayor a 5 caracteres";
  } else {
    isCorrectPswd = true;
    messagePswd = "Contraseña correcta";
  }

  return { isCorrectPswd, messagePswd };
};
