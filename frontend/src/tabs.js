import React from "react";
import { useTranslation } from "react-i18next";


import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";

/* PAGES */
import Welcome from "./pages/welcome";
import Home from "./pages/home";
import Error404 from "./pages/error404";
/* COMPONENTS  */ 
import PublicRoute from './components/route/PublicRoute';
//import PrivateRoute from "./components/routes/PrivateRoute";

/* ICONS AND MORE */

//import Error404 from "./pages/errors/404";

import { home } from "ionicons/icons";


const SBtabs = () => {
//   const { state } = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <IonTabs>
      <IonRouterOutlet>
        <PublicRoute component={Home} path="/sb/home" exact />
        <PublicRoute component={Welcome} path="/sb/welcome" exact />
        
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/sb/home">
          <IonIcon icon={home} />
          <IonLabel>{t("tabs.home")}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="home" href="/sb/welcome">
          <IonIcon icon={home} />
          <IonLabel>{t("tabs.welcome")}</IonLabel>
        </IonTabButton>

      </IonTabBar>
    </IonTabs>
  );
};

export default SBtabs;
