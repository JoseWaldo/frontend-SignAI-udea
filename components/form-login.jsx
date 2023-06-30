"use client"

import Link from "next/link";
import styles from "@/styles/formLogin.module.css"
import { useState } from "react";

function FormLogin() {

 const [inputs, setInputs] = useState({
  username: "",
  password: "",
 });

 const handleChange = (evt) => {
  const { target } = evt;
  const { name, value } = target;

  const newValues = {
   ...inputs,
   [name]: value,
  };

  setInputs(newValues);
 }

 const handleSubmit = (evt) => {

  evt.preventDefault();

  console.log("Username: " + inputs.username);
  console.log("Password: " + inputs.password);
 }

 return ( 
  <form className={styles.form} onSubmit={handleSubmit}>
   <h2 className={styles.titleForm}>SignAI</h2>
   <label htmlFor="usernameInput">
    <span className={styles.labelForm}>Usuario</span>
   </label>
   <input className={styles.inputForm} type="text" id="usernameInput" name="username" onChange={handleChange}/>
   <label htmlFor="passwordInput">
    <span className={styles.labelForm}>Contraseña</span>
    </label>
   <input className={styles.inputForm} type="password" id="passwordInput" name="password" onChange={handleChange}/>
   <button className={styles.button} type="submit">Ingresar</button>
   <Link className={styles.link} href="/register">Registrarse</Link>
  </form>
 );
}

export default FormLogin;