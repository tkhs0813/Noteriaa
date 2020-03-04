<template>
  <div class="sign-in">
    <h1 class="title is-5">Sign in</h1>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";

export default {
  name: "signIn",
  mounted() {
    console.log("mounted");
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    ui.start("#firebaseui-auth-container", {
      signInFlow: "redirect",
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
      signInSuccessUrl: "/"
    });
  }
};
</script>
