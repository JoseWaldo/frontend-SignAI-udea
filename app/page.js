import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <figure className={styles.wrapperImg}>
        <img
          className={styles.img}
          src="/images/logo-udea.png"
          alt="Logo de la Universidad de Antioquia"
        />
      </figure>
      <h1 className={styles.title}>Bienvenido a SignAI</h1>
      <Link href="/login" className={styles.button}>
        Iniciar Sesion
      </Link>
    </main>
  );
}
