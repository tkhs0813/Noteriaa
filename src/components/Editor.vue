<template>
  <div>
    <input type="text" v-model="note.title" />
    <main role="main">
      <textarea v-model="note.body"></textarea>
    </main>
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
