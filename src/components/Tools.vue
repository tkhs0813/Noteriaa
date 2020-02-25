<template>
  <div>
    <b-button type="is-success">
      Save
    </b-button>
    <b-button type="is-danger">
      Delete
    </b-button>
  </div>
</template>

<script>
export default {
  name: "tools",
  methods: {
    save(note) {
      console.log("save note", note);
    },
    delete(note) {
      console.log("delete note", note);
    }
  }
};
</script>

<style scoped></style>
