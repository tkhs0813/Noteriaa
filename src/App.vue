<template>
  <div id="app">
    <div class="columns">
      <div class="column is-3">
        <sidebar />
      </div>
      <div class="column">
        <editor />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Editor from "@/components/Editor";

export default {
  name: "app",
  components: {
    sidebar: Sidebar,
    editor: Editor
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
