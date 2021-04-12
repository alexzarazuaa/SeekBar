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
  IonImg
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
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
{/*     
          {state.user ? (
            <Link to="/app/profile" slot="end" className="navbar-user-link">
              <IonChip className="navbar-user">
                <IonAvatar>
                  <IonImg src={state.user.image} />
                </IonAvatar>
                <IonLabel>{state.user.username}</IonLabel>
              </IonChip>
            </Link>
          ) : (
            <Link to="/login" slot="end" className="navbar-login">
              <IonLabel>{t("header.login")}</IonLabel>
            </Link>
          )} */}
          <h1>Home</h1>
          
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default SBheader;
