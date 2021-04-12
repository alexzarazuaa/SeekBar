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
  IonIcon
} from "@ionic/react";

/* ICONS AND MORE */
import { heartOutline } from "ionicons/icons";

/*  STYLE */
import "../../style/barsList.css";

const SBbarsList = () => {
  const { t } = useTranslation();
  return (
    <IonPage class="sb-barsList">
      <IonHeader>
        <a href="/welcome">Welcome</a>&nbsp; &nbsp; &nbsp;
        <a href="/login">Login</a>&nbsp; &nbsp; &nbsp; &nbsp;
        <a href="/register">Register</a>
      </IonHeader>

      <section>
        <IonTitle class="sb-barsList-title">SEEKBAR</IonTitle>
      </section>

      <section>
        <IonSegment class="sb-barsList-segments">
          <IonSegmentButton value="recent">
            <IonLabel class="sb-barsList-segments-titles">
              {t("BARSLIST.ALLS")}
            </IonLabel>
          </IonSegmentButton>

          <IonSegmentButton value="yours" checked>
            <IonLabel class="sb-barsList-segments-titles">
              {t("BARSLIST.YOURS")}
            </IonLabel>
          </IonSegmentButton>
        </IonSegment>

      
        <IonCard  href="/sb/bar" class="sb-barsList-ionCard">
          <h1>jaj</h1>
          <IonIcon icon={heartOutline} />
        </IonCard>

        <IonCard class="sb-barsList-ionCard">
          <h1>jaj</h1>
          <IonIcon icon={heartOutline} />
        </IonCard>
      </section>
    </IonPage>
  );
};

export default SBbarsList;
