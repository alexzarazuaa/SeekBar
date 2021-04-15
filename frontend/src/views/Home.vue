<template>
    <IonPage class="sb-home">
      <IonHeader>
        <a href="/welcome">Welcome</a>&nbsp; &nbsp; &nbsp; 
        <a href="/login">Login</a>&nbsp; &nbsp; &nbsp; &nbsp; 
        <a href="/register">Register</a>
      </IonHeader>
      
      <IonContent>
        <IonCard class="sb-home-ionCard">
          <h1>jaj</h1>
        </IonCard>

        <IonCard class="sb-home-ionCard">
          <h1>jaj</h1>
        </IonCard>

        <IonCard class="sb-home-ionCard">
          <h1>jaj</h1>
        </IonCard>
      </IonContent>

      
    </IonPage>
</template>

<script>
import { IonCard, IonHeader, IonContent, IonPage } from '@ionic/vue';
// import BarsList from "@/components/BarsListComponent/BarsList";
export default {
    components: { IonCard, IonHeader, IonContent, IonPage },
  name: "SBhome",

};
</script>

<style>
/***************************************
*             HOME PAGE                *
***************************************/

/* VARIABLES */

:root{
  --align--center : center;
  --margin--auto:auto;
}


/* PAGE  CONTENT */
.sb-home {
  background-color: #f4f4f4;
  height: 100vh;
  width: 100vw;
}


/* HOME IONCARD */ 

.sb-home-ionCard{
    background-color: white;
    margin: 45px var(--margin--auto) ;
    display: flex;
    justify-content: var(--align--center);
    align-items: var(--align--center);
    width: 60vw;
    height: 20vh;
}

</style>
