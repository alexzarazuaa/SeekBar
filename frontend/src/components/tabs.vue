<template slot="bottom">
  <IonTabs>
    <IonTabBar>
      <IonTabButton tab="home" href="/sb/home">
        <ion-icon name="cube-outline" class="thin"></ion-icon>
      </IonTabButton>
      <IonTabButton tab="home" href="/sb/welcome">
        <ion-icon name="cube-outline" class="thin"></ion-icon>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
</template>

<script>
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/vue";
export default {
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel },
  name: "SBtabs",
};
</script>

<style></style>
