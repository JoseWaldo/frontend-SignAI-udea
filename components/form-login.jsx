import Link from "next/link";
import styles from "@/styles/formLogin.module.css"

function FormLogin() {
 return ( 
  <form className={styles.form}>
   <h2 className={styles.titleForm}>SignAI</h2>
   <label htmlFor="usernameInput">
    <span className={styles.labelForm}>Usuario</span>
   </label>
   <input className={styles.inputForm} type="text" id="usernameInput"/>
   <label htmlFor="passwordInput">
    <span className={styles.labelForm}>Contraseña</span>
    </label>
   <input className={styles.inputForm} type="password" id="passwordInput"/>
   <button className={styles.button} type="submit">Ingresar</button>
   <Link className={styles.link} href="/register">Registrarse</Link>
  </form>
 );
}

export default FormLogin;