import React from "react";
import { IonButton, IonImg, IonInput, IonLabel, IonPage, IonTitle } from "@ionic/react";
import "../../style/login/login.css";
import { useTranslation } from 'react-i18next';
import Logo from "../../assets/img/LogoSeekBar_2.png";

const SBlogin = () => {
  const { t } = useTranslation();
  //KEY ENTER LOGIN
  // const KEYENTER__LOGIN = (event) => {
  //   if (event.key === "Enter") {
  //     console.log("ENTRA");
  //     try {
  //       let username = email;
  //       let user = {
  //         email: email,
  //         username: username.split("@")[0],
  //       };
  //       setShowLoading(true);
  //     } catch (e) {
  //       console.error(e);
  //       setShowLoading(false);
  //       setFormErrors(e);
  //     }
  //   }
  // };
  const handleSubmit = (e) => {
    console.log('ENTRA LOGIN')
    console.log(e)
    e.preventDefault();
    // login({ username, password })
  };


  return (
    
    <IonPage class="sb-login-page">
      <section>
        <article>
          <IonImg class="sb-login-page--logo" src={Logo}></IonImg>
        </article>
        <article>
          <IonTitle class="sb-login-page--title"> {t("LOGIN.TITLE")}</IonTitle>
          <IonButton
            color="dark"
            className="sb-login-page--homebtn"
            href="/sb/home"
          >
             {t("LOGIN.HOME")}
          </IonButton>
        </article>
      </section>
      <section>
        <article class="sb-login-page-form">
          <form
            onSubmit={handleSubmit}
            method="post"
            name="login_form"
          >
            <IonInput
              type="email"
              required
              className="inputFieldLogin"

              placeholder="Enter your email"
            />
            <IonInput
              type="password"
              className="inputFieldLogin"
              required
              placeholder="Password"
      
              placeholder="Enter your password"
            />
            <IonButton
              color="dark"
              className="sb-login-page--loginbtn"
              href="/sb/home"
            >
               {t("LOGIN.BUTTON")}
            </IonButton>
            <IonLabel class="sb-register-page--account">{t("LOGIN.NOT_ACCOUNT")}<IonLabel class="sb-register-page--signin">{t("LOGIN.SIGNUP")}</IonLabel></IonLabel>
          </form>
        </article>
      </section>
    </IonPage>
  );
};

export default SBlogin;
