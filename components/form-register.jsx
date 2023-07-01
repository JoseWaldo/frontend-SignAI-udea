"use client"

import Link from "next/link";
import stylesLogin from "@/styles/formLogin.module.css"
import useForm from "@/hooks/useForm";
import { useState } from "react";
import { validateUsername, validateEmail, validatePassword } from "@/utils/validations";
import sendData from "@/utils/sendData";

function FormRegister() {
 
 const { handleChange, inputs } = useForm({
  username: "",
  email: "",
  password: "",
 })

 const [msgError, setMsgError] = useState("");

 const handleSubmit = (evt) => {

  evt.preventDefault();

  const { username, email, password } = inputs;

  const { isCorrectUser, messageUser } = validateUsername(username);
  const { isCorrectEmail, messageEmail } = validateEmail(email);
  const { isCorrectPswd, messagePswd } = validatePassword(password);

  let messageError = "";

  if(!isCorrectEmail) { 
   messageError = messageEmail 
  } else if(!isCorrectUser) { 
   messageError = messageUser 
  } else if(!isCorrectPswd) { 
   messageError = messagePswd 
  } else {
   sendData({ username, password, email }, "http://127.0.0.1:8000/users");
  }

  setMsgError(messageError);

  setInterval(() => {
   setMsgError("");
  }, 5000);

  return;
 }

 return ( 
  <form className={stylesLogin.form} onSubmit={handleSubmit}>
   <h2 className={stylesLogin.titleForm}>SignAI</h2>
   <label htmlFor="usernameInput">
    <span className={stylesLogin.labelForm}>Usuario</span>
   </label>
   <input className={stylesLogin.inputForm} type="text" id="usernameInput" placeholder="pedro.perez" name="username" onChange={handleChange}/>
   <label htmlFor="emailInput">
    <span className={stylesLogin.labelForm}>Correo Electronico</span>
   </label>
   <input className={stylesLogin.inputForm} type="email" id="emailInput" placeholder="example@example.com" name="email" onChange={handleChange}/>
   <label htmlFor="passwordInput">
    <span className={stylesLogin.labelForm}>Contraseña</span>
    </label>
   <input className={stylesLogin.inputForm} type="password" id="passwordInput" name="password" onChange={handleChange}/>
   <button className={stylesLogin.button} type="submit">Registrarse</button>
   <Link className={stylesLogin.link} href="/login">Iniciar Sesion</Link>
   <span className={stylesLogin.msgError}>{msgError}</span>
  </form>
 );
}

export default FormRegister;