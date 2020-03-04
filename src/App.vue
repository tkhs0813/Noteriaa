<template>
  <div id="app">
    <div class="columns">
      <section class="column is-3">
        <sidebar />
      </section>
      <section class="column">
        <tools />
        <editor :note="openNote()" />
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Sidebar from "@/components/Sidebar";
import Editor from "@/components/Editor";
import Tools from "@/components/Tools";

export default {
  name: "app",
  components: {
    sidebar: Sidebar,
    editor: Editor,
    tools: Tools
  },
  computed: {
    ...mapGetters(["openNote"])
  }
};
</script>

<style>
html,
body {
  height: 100%;
  min-height: 100%;
}
#app {
  height: 100%;
}
/* TODO: delete */
.column {
  border: 1px solid;
}
</style>
