<template>
  <div>
    <b-field label="Title">
      <b-input v-model="note.title"></b-input>
    </b-field>
    <b-field label="Body">
      <b-input v-model="note.title" type="textarea"></b-input>
    </b-field>
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
