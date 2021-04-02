import React, { Suspense  } from "react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonPage } from "@ionic/react";

/* STYLES */
import "./App.css";
/* PAGES */ 
import SBtabs from "./tabs";
import SBwelcome from "./pages/welcome";
import Error404 from "./pages/error404";
import SBlogin from './pages/login/login';
import SBregister from './pages/register/register';
/* COMPONENTS  */ 
import SBpublicRoute from './components/route/PublicRoute';
import SBmenu from './components/menu/menu';


const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <Suspense fallback="loading">
          <IonPage>
            <SBmenu />
            <IonRouterOutlet id="SBnavigation">
              
              {/* <SBpublicRoute component={SBhome} path="/home" exact /> */}
              <SBpublicRoute component={SBwelcome} path="/welcome" exact />
              <SBpublicRoute component={SBlogin} path="/login" exact />
              <SBpublicRoute component={SBregister} path="/register" exact />

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
