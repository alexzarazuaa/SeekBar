import React from "react";
import {
  IonButton,
  IonImg,
  IonInput,
  IonLabel,
  IonPage,
  IonTitle,
} from "@ionic/react";
import { useTranslation } from 'react-i18next';
import "../../style/register/register.css";
import Logo from "../../assets/img/LogoSeekBar_2.png";

const SBregister = () => {
  const { t } = useTranslation();
  return (
    <IonPage class="sb-register-page">
      <section>
        <article>
          <IonImg class="sb-register-page--logo" src={Logo}></IonImg>
        </article>
        <article>
          <IonTitle class="sb-register-page--title"> {t("REGISTER.TITLE")}</IonTitle>
          <IonButton
            color="dark"
            className="sb-register-page--homebtn"
            href="/sb/home"
          >
             {t("REGISTER.HOME")}
          </IonButton>
        </article>
      </section>
      <section>
        <article class="sb-register-page-form">
          <form>
          <IonInput
              type="name"
              required
              className="inputFieldRegister"
              placeholder="Username"
            />
            <IonInput
              type="email"
              required
              className="inputFieldRegister"
              placeholder="Enter your email"
            />
            <IonInput
              type="password"
              className="inputFieldRegister"
              required
              placeholder="Enter your password"
            />
                   <IonInput
              type="password"
              className="inputFieldRegister"
              required
              placeholder="Confirm your password"
            />
                   <IonButton
            color="dark"
            className="sb-register-page--registerbtn"
            href="/sb/home"
          >
             {t("REGISTER.BUTTON")}
          </IonButton>
          <IonLabel class="sb-register-page--account">{t("REGISTER.HAVE_ACCOUNT")}<IonLabel class="sb-register-page--signin">{t("REGISTER.SIGNIN")}</IonLabel></IonLabel>
          </form>
        </article>
      </section>
    </IonPage>
  );
};

export default SBregister;
