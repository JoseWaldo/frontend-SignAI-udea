import FormLogin from "@/components/form-login";
import styles from "@/styles/loginPage.module.css";

function Login() {
  return (
    <main className={styles.wrapperLogin}>
      <figure className={styles.wrapperImage}>
        <img
          className={styles.imgHeader}
          src="/images/logo-udea.png"
          alt="Logo de la Universidad de Antioquia"
          loading="lazy"
        />
      </figure>
      <FormLogin />
    </main>
  );
}

export default Login;
