import React ,{ useState } from "react";
import {
  IonButton,
  IonImg,
  IonInput,
  IonLabel,
  IonPage,
  IonTitle,
} from "@ionic/react";
import "../../style/login/login.css";
import { useTranslation } from "react-i18next";
import Login from "./utils";
import Logo from "../../assets/img/LogoSeekBar_2.png";

const SBlogin = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    console.log("entra")
    e.preventDefault();
    Login(email, password);
  };

  const KEYENTER__LOGIN = (event) => {
    if (event.key === "Enter") {
      Login( email, password);
    }
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
        <article className="sb-login-page-form">
          <form onSubmit={handleSubmit} method="post">
            <IonInput
              type="email"
              required
              value={email}
              onInput={(e) => setEmail(e.currentTarget.value)}
              className="inputFieldLogin"
              placeholder={t("LOGIN.FORM.EMAIL")}
            />
            <IonInput
              type="password"
              required
              value={password}
              onInput={(e) => setPassword(e.currentTarget.value)}
              onKeyDown={KEYENTER__LOGIN}
              className="inputFieldLogin"
              placeholder={t("LOGIN.FORM.PASSWORD")}
            />
            <IonButton
              color="dark"
              className="sb-login-page--loginbtn"
              type="submit"
            >
              {t("LOGIN.BUTTON")}
            </IonButton>
            <IonLabel class="sb-login-page--account">
              {t("LOGIN.NOT_ACCOUNT")}
              <IonLabel  class="sb-register-page--signin">
                {t("LOGIN.SIGNUP")}
              </IonLabel>
            </IonLabel>
          </form>
        </article>
      </section>
    </IonPage>
  );
};

export default SBlogin;
