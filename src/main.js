import Vue from "vue";
import firebase from "firebase/app";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.use(Buefy);

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyCIDlj70JWW75nX9do3AiCiyEA-csELe78",
  authDomain: "noteria-4c9ed.firebaseapp.com",
  databaseURL: "https://noteria-4c9ed.firebaseio.com",
  projectId: "noteria-4c9ed",
  storageBucket: "noteria-4c9ed.appspot.com",
  messagingSenderId: "942097621996",
  appId: "1:942097621996:web:3d23ded5c2fca27fc656c9",
  measurementId: "G-NZV9S5SBLF"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");