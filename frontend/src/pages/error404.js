import React from "react";
import {
    IonContent,
    IonPage,
    IonImg,
    IonLabel
} from "@ionic/react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import "../style/error404.css";

const SBerror404 = () => {
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonContent fullscreen>
          <div className="sb-error404">
              <IonImg className="sb-error-image404" src={require('../assets/img/LogoSeekBar.png') } />
              <Link to="/home" slot="end" className="sb-erro-home">
              <IonLabel>{t("ERROR404.GOHOME")}</IonLabel>
            </Link>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default SBerror404;