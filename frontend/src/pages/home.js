import React from "react";
import { useTranslation } from "react-i18next";
import {
  IonPage,
  IonHeader,
  IonLabel,
  IonCard,
  IonSegmentButton,
  IonSegment,
  IonTitle,
} from "@ionic/react";

/*  STYLE */
import "../style/home.css";

const SBhome = () => {
  const { t } = useTranslation();
  return (
    <IonPage class="sb-home">
      <IonHeader>
        <a href="/sb/profile">Profile</a>&nbsp; &nbsp; &nbsp;
        <a href="/login">Login</a>&nbsp; &nbsp; &nbsp; &nbsp;
        <a href="/register">Register</a>
        <a href="/sb/profile">Profile</a>
      </IonHeader>
      <section>
        <IonTitle class="sb-home-title">SEEKBAR</IonTitle>
      </section>

      <section>
        <IonCard class="sb-home-ionCard">
          <h1>jaj</h1>
        </IonCard>

        <IonCard class="sb-home-ionCard">
          <h1>jaj</h1>
        </IonCard>

        <IonCard class="sb-home-ionCard">
          <h1>jaj</h1>
        </IonCard>
      </section>
    </IonPage>
  );
};

export default SBhome;
