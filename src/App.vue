<template>
  <div id="app">
    <div class="columns">
      <sidear />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
  name: "app",
  components: {
    sidear: Sidebar
  }
};
</script>

<style>
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
  min-height: 100%;
}
.columns {
  height: 100%;
}
/* TODO: delete */
.column {
  border: 1px solid;
}
</style>
