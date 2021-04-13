import React from "react";

import {  IonPage, IonHeader, IonCard, IonSegmentButton, IonLabel, IonSegment } from "@ionic/react";
import { useTranslation } from 'react-i18next';

/*  STYLE */
import "../../style/profile/profile.css";

const SBprofile = () => {
  const { t } = useTranslation();

  return (
    <IonPage class="sb-profile-page">
      <IonHeader>
        <a href="/sb/home">Home</a>&nbsp; &nbsp; &nbsp;
        <a href="/login">Login</a>&nbsp; &nbsp; &nbsp; &nbsp;
        <a href="/register">Register</a>&nbsp; &nbsp; &nbsp; &nbsp;
      </IonHeader>

        <section>
          <article>
            <h1 class="sb-profile-username"> WELCOME,USERNAME</h1>
          </article>
          <article class="sb-profile-avatar"></article>
        </section>
        <section>
          <IonSegment  class="sb-profile-segments"
    
          >
            <IonSegmentButton  value="recent">
              <IonLabel class="sb-profile-segments-titles">{t("PROFILE.UPDATE")}</IonLabel>
            </IonSegmentButton>

            <IonSegmentButton value="yours" checked>
              <IonLabel class="sb-profile-segments-titles">{t("PROFILE.FAVOURITES")}</IonLabel>
            </IonSegmentButton>

            <IonSegmentButton value="favorited">
              <IonLabel class="sb-profile-segments-titles">{t("PROFILE.BOOKINGS")}</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          <IonCard class="sb-profile-cards">
            <h1>PROFILE</h1>
          </IonCard>
        </section>
  
    </IonPage>
  );
};

export default SBprofile;
