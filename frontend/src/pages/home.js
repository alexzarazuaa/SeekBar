import React from "react";

import { IonContent, IonPage, IonHeader, IonCard } from "@ionic/react";
import "../style/welcome.css";

/*  STYLE */
import "../style/home.css";

const SBhome = () => {
  return (
    <IonPage class="sb-home">
      <IonHeader>
        <a href="/welcome">Welcome</a>&nbsp; &nbsp; &nbsp; 
        <a href="/login">Login</a>&nbsp; &nbsp; &nbsp; &nbsp; 
        <a href="/register">Register</a>
      </IonHeader>
      
      <IonContent>
        <IonCard class="sb-home-ionCard">
          <h1>jaj</h1>
        </IonCard>

        <IonCard class="sb-home-ionCard">
          <h1>jaj</h1>
        </IonCard>

        <IonCard class="sb-home-ionCard">
          <h1>jaj</h1>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default SBhome;
