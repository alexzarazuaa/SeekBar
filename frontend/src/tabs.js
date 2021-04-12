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
import BarsList from "./pages/barsList/barsList";
import Bar from "./pages/bar/bar";
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
        <PublicRoute component={BarsList} path="/sb/bars" exact />
        <PublicRoute component={Bar} path="/sb/bar" exact />
      </IonRouterOutlet>

      <IonTabBar slot="bottom" className="sb-tabs-backgorund">
        
        <IonTabButton className="sb-tabs-backgorund" tab="home" href="/sb/home">
          <IonIcon color="sb-tabs-tabColor" icon={home} />
        </IonTabButton>
        
        <IonTabButton className="sb-tabs-backgorund" tab="bars" href="/sb/bars">
          <IonIcon color="sb-tabs-tabColor" icon={restaurantSharp} />
        </IonTabButton>

        <IonTabButton className="sb-tabs-backgorund" tab="profile" href="/sb/welcome">
          <IonIcon color="sb-tabs-tabColor" icon={personSharp} />
        </IonTabButton>

      </IonTabBar>

    </IonTabs>
  );
};

export default SBtabs;
