import Link from "next/link";
import stylesLogin from "@/styles/formLogin.module.css"

function FormRegister() {
 return ( 
  <form className={stylesLogin.form}>
   <h2 className={stylesLogin.titleForm}>SignAI</h2>
   <label htmlFor="usernameInput">
    <span className={stylesLogin.labelForm}>Usuario</span>
   </label>
   <input className={stylesLogin.inputForm} type="text" id="usernameInput" placeholder="pedro.perez"/>
   <label htmlFor="emailInput">
    <span className={stylesLogin.labelForm}>Correo Electronico</span>
   </label>
   <input className={stylesLogin.inputForm} type="email" id="emailInput" placeholder="example@example.com"/>
   <label htmlFor="passwordInput">
    <span className={stylesLogin.labelForm}>Contraseña</span>
    </label>
   <input className={stylesLogin.inputForm} type="password" id="passwordInput"/>
   <button className={stylesLogin.button} type="submit">Registrarse</button>
   <Link className={stylesLogin.link} href="/login">Iniciar Sesion</Link>
  </form>
 );
}

export default FormRegister;