import React from "react";
//import { AppContext } from '../State';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonContent,
  IonList,
  IonImg,
  IonItem,
  IonIcon,
  IonLabel,
  IonMenuToggle,
} from "@ionic/react";
import { useTranslation } from "react-i18next";
//import "./Menu.css"

/* Theme variables */
import {
  locationOutline,
} from "ionicons/icons";
import icon from "../../assets/img/LogoSeekBar.png";

const SBmenu = () => {
  //const { state, dispatch } = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <IonMenu contentId="NFU_Navigation">
    <IonHeader>
      <IonToolbar>
           <IonImg  className="IconMenu" src={icon} alt="icon" />
           <IonLabel className="MenuTitle">Nos Falta Uno</IonLabel>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>

        
        <IonMenuToggle>
          <IonItem
            routerLink="/app/instalaciones"
            routerDirection="none"
            lines="none"
          >
            <IonIcon  color="medium" slot="start" icon={locationOutline} />
            <IonLabel>{t('Menu.Instalations')}</IonLabel>
          </IonItem>
        </IonMenuToggle>



      </IonList>
    </IonContent>
  </IonMenu>
  );
};

export default SBmenu;
