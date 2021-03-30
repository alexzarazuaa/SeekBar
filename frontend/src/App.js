import React, { Suspense  } from "react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonPage } from "@ionic/react";

/* STYLES */
import "./App.css";
/* PAGES */ 
import SBtabs from "./tabs";
import SBwelcome from "./pages/welcome";
import SBhome from "./pages/home";
import Error404 from "./pages/error404";
/* COMPONENTS  */ 
import PublicRoute from './components/route/PublicRoute';


const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <Suspense fallback="loading">
          <IonPage>
            <IonRouterOutlet id="SBnavigation">
              
              <PublicRoute component={SBhome} path="/home" exact />
              <PublicRoute component={SBwelcome} path="/welcome" exact />

              <Route
                path="/"
                render={() => <Redirect to="/welcome" />}
                exact={true}
              />
              <Route component={Error404} />
              <Route path="/sb" component={SBtabs} />

            </IonRouterOutlet>
          </IonPage>
        </Suspense>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
