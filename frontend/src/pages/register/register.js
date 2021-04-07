import React, { useState } from "react";
// import { AppContext } from "../../state";

import {
  IonButton,
  IonImg,
  IonInput,
  IonLabel,
  IonPage,
  IonTitle,
} from "@ionic/react";
import { useTranslation } from "react-i18next";
import "../../style/register/register.css";
import Register from "./utils";
import Logo from "../../assets/img/LogoSeekBar_2.png";

const SBregister = () => {
  const { t } = useTranslation();
  // const { dispatch, state } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    Register(username, email, password, confPassword);
  };

  const KEYENTER__REGISTER = (event) => {
    if (event.key === "Enter") {
      Register(username, email, password, confPassword);
    }
  };

  return (
    <IonPage class="sb-register-page">
      <section>
        <article>
          <IonImg class="sb-register-page--logo" src={Logo}></IonImg>
        </article>
        <article>
          <IonTitle class="sb-register-page--title">
            {" "}
            {t("REGISTER.TITLE")}
          </IonTitle>
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
          <form onSubmit={handleSubmit} method="post">
            <IonInput
              type="name"
              required
              value={username}
              onInput={(e) => setUsername(e.currentTarget.value)}
              className="inputFieldRegister"
              placeholder={t("REGISTER.FORM.USERNAME")}
            />
            {/* <span class="error_username">{t("REGISTER.FORM.ERROR_USERNAME")}</span> */}
            <IonInput
              type="email"
              required
              value={email}
              onInput={(e) => setEmail(e.currentTarget.value)}
              className="inputFieldRegister"
              placeholder={t("REGISTER.FORM.EMAIL")}
            />
                   {/* <span class="error_email">{t("REGISTER.FORM.ERROR_EMAIL")}</span> */}
            <IonInput
              type="password"
              required
              value={password}
              onInput={(e) => setPassword(e.currentTarget.value)}
              className="inputFieldRegister"
              placeholder={t("REGISTER.FORM.PASSWORD")}
            />
                   {/* <span class="error_password">{t("REGISTER.FORM.ERROR_PASSWORD")}</span> */}
            <IonInput
              type="password"
              required
              value={confPassword}
              onInput={(e) => setConfPassword(e.currentTarget.value)}
              onKeyDown={KEYENTER__REGISTER}
              className="inputFieldRegister"
              placeholder={t("REGISTER.FORM.CONFPASSWORD")}
            />
                   {/* <span class="error_confPassword">{t("REGISTER.FORM.ERROR_CONFPASSWORD")}</span> */}
            <IonButton
              color="dark"
              className="sb-register-page--registerbtn"
              type="submit"
            >
              {t("REGISTER.BUTTON")}
            </IonButton>
            <IonLabel class="sb-register-page--account">
              {t("REGISTER.HAVE_ACCOUNT")}
              <IonLabel class="sb-register-page--signin">
                {t("REGISTER.SIGNIN")}
              </IonLabel>
            </IonLabel>
          </form>
        </article>
      </section>
    </IonPage>
  );
};

export default SBregister;
