import React from "react";
import {
  
  IonPage,
  IonHeader,
  IonCard,
  IonLabel,
} from "@ionic/react";

/*  STYLE */
import "../../style/bar.css";

const SBbar = () => {
  return (
    <IonPage class="sb-bar">
      <IonHeader>
        <a href="/welcome">Welcome</a>&nbsp; &nbsp; &nbsp;
        <a href="/login">Login</a>&nbsp; &nbsp; &nbsp; &nbsp;
        <a href="/register">Register</a>
      </IonHeader>

        <section>
          <IonCard class="sb-bar-ionCard">
            <h1>jaj</h1>
          </IonCard>
        </section>

        <section>
          <article>
            <span class="sb-bar-tables"></span>
          </article>
          {/* <aside>
            <IonCard class="sb-bar-asideMap">
              <h1>jaj</h1>
            </IonCard>
          </aside> */}
          <article>
            <IonLabel class="sb-bar-reviews">REVIEWS</IonLabel>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star "></span>
            <span class="fa fa-star "></span>
            <span class="fa fa-star "></span>
            <span class="fa fa-star "></span>
          </article>
        </section>

    </IonPage>
  );
};

export default SBbar;
