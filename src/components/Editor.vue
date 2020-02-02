<template>
  <div>
    <main role="main">{{ note }}</main>
  </div>
</template>

<script>
export default {
  name: "editor",
  props: {
    note: {
      type: Object,
      required: true,
      default() {
        return { title: "test title", body: "test body" };
      }
    }
  }
};
</script>

<style></style>
