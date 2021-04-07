import React from "react";

import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonRouterOutlet,
} from "@ionic/react";

/* PAGES */
import Welcome from "./pages/welcome";
import Home from "./pages/home";
/* STYLE */
import "./style/tabs.css";
/* COMPONENTS  */
import PublicRoute from "./components/route/PublicRoute";

/* ICONS AND MORE */
import { home, personSharp, restaurantSharp } from "ionicons/icons";

const SBtabs = () => {


  return (
    <IonTabs>
      <IonRouterOutlet>
        <PublicRoute component={Home} path="/sb/home" exact />
        <PublicRoute component={Welcome} path="/sb/welcome" exact />
      </IonRouterOutlet>

      <IonTabBar slot="bottom" className="sb-tabs-backgorund">
        
        <IonTabButton className="sb-tabs-backgorund" tab="home" href="/sb/home">
          <IonIcon color="sb-tabs-tabColor" icon={home} />
        </IonTabButton>
        <IonTabButton className="sb-tabs-backgorund" tab="home" href="/sb/welcome">
          <IonIcon color="sb-tabs-tabColor" icon={restaurantSharp} />
        </IonTabButton>
        <IonTabButton className="sb-tabs-backgorund" tab="home" href="/sb/welcome">
          <IonIcon color="sb-tabs-tabColor" icon={personSharp} />
        </IonTabButton>

      </IonTabBar>

    </IonTabs>
  );
};

export default SBtabs;
