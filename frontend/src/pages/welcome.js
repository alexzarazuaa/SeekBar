import React from "react";
import { IonButton,  IonImg, IonPage } from "@ionic/react";
import "../style/welcome.css";
import { useTranslation } from 'react-i18next';
import SeekBarLogo from "../assets/img/LogoSeekBar.png";

const SBwelcome = () => {
  const { t } = useTranslation();


  return (
    <IonPage fullscreen className="sb-welcome-page">
        <main className="sb-welcome-page">
          <section>
            <IonImg class="sb-welcome-logo" src={SeekBarLogo}></IonImg>
          </section>
          <section>
            <IonButton color="dark" className="sb-welcome-btnStart" href="/sb/home">
              {t("WELCOME.START")}
            </IonButton>
          </section>
        </main>

    </IonPage>
  );
};

export default SBwelcome;
