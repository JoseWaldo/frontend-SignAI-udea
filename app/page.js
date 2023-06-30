import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <figure>
        <img
          src="/images/logo-udea.pngs"
          alt="Logo de la Universidad de Antioquia"
        ></img>
      </figure>
      <h1>Bienvenido a SignAI</h1>
      <Link href={""}>Iniciar Sesion</Link>
    </main>
  );
}
