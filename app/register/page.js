import stylesLogin from "@/styles/loginPage.module.css";
import FormRegister from "@/components/form-register";

function Page() {
  return (
    <>
      <main className={stylesLogin.wrapperLogin}>
        <figure className={stylesLogin.wrapperImage}>
          <img
            className={stylesLogin.imgHeader}
            src="/images/logo-udea.png"
            alt="Logo de la Universidad de Antioquia"
            loading="lazy"
          />
        </figure>
        <FormRegister />
      </main>
    </>
  );
}

export default Page;
