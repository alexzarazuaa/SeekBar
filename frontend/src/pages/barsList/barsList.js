import React from "react";
import { IonContent, IonPage, IonHeader, IonCard } from "@ionic/react";

/*  STYLE */
import "../../style/barsList.css";       

const SBbarsList = () => {
  return (
    <IonPage class="sb-barsList">
      <IonHeader>
        <a href="/welcome">Welcome</a>&nbsp; &nbsp; &nbsp; 
        <a href="/login">Login</a>&nbsp; &nbsp; &nbsp; &nbsp; 
        <a href="/register">Register</a>
      </IonHeader>
      
      <IonContent>
        <IonCard  href="/sb/bar" class="sb-barsList-ionCard">
          <h1>jaj</h1>
        </IonCard>

        <IonCard class="sb-barsList-ionCard">
          <h1>jaj</h1>
        </IonCard>

        <IonCard class="sb-barsList-ionCard">
          <h1>jaj</h1>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default SBbarsList;
