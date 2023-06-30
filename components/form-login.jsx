"use client"

import Link from "next/link";
import styles from "@/styles/formLogin.module.css"
import useForm from "@/hooks/useForm";

function FormLogin() {

 const { handleChange, inputs } = useForm({
   username: "",
   password: "",
  })

 const handleSubmit = (evt) => {

  evt.preventDefault();

  const username = inputs.username;
  const password = inputs.password;

  console.log(username.length, password.length);

  if(username.length == 0 ||  password.length == 0) {
   alert("El usuario y/o contraseña no pueden estar incompletos")
  }
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