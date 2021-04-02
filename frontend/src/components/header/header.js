import React, { useContext, useEffect } from "react";
import { AppContext } from "../../State";
import { Redirect, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonLabel,
  IonMenuButton,
  IonChip,
  IonAvatar,
  IonImg,
} from "@ionic/react";
import "./header.css";

const SBheader = () => {
  //const { state } = useContext(AppContext);
  const { t } = useTranslation();

  //   if (state.welcome !== "true") {
  //     return <Redirect to="/welcome" />;
  //   }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{page}</IonTitle>
          <IonButtons slot="end">
            <IonButton
              fill="clear"
              onClick={(e) => {
                e.persist();
                setShowUserMenuEvent(e);
              }}
            >
              <IonIcon icon={ellipsisVertical} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonPopover
        event={showUserMenuEvent}
        isOpen={!!showUserMenuEvent}
        onDidDismiss={() => setShowUserMenuEvent(null)}
      >
        <IonContent>
          <IonList>
            <IonItem
              onClick={(e) => {
                e.preventDefault();
                doLogout();
              }}
              detail={true}
              href=""
            >
              <IonLabel>{t("Navbar.LOGOUT")}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>{state.user.username}</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonPopover>
    </>
  );
};

export default SBheader;
