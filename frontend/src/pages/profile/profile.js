import React from "react";

import { IonContent, IonPage, IonHeader, IonCard } from "@ionic/react";


/*  STYLE */
import "../../style/profile/profile.css";

const SBprofile = () => {
  return (
    <IonPage class="sb-home">
      <IonHeader>
        <a href="/sb/home">Home</a>&nbsp; &nbsp; &nbsp; 
        <a href="/login">Login</a>&nbsp; &nbsp; &nbsp; &nbsp; 
        <a href="/register">Register</a>&nbsp; &nbsp; &nbsp; &nbsp;
      </IonHeader>
      <IonContent class="sb-profile-page">
        <section>
            <article>
                <h1 class="sb-profile-username"> WELCOME,USERNAME</h1>
            </article>
            <article class="sb-profile-avatar">

            </article>
        </section>
        <section>
            <IonCard class="sb-profile-cards">
                <h1>PROFILE</h1>
            </IonCard>
        </section>

      </IonContent>
      
     
    </IonPage>
  );
};

export default SBprofile;
