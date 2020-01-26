<template>
  <aside>
    <note-list />
  </aside>
</template>

<script>
import NoteList from "@/components/NoteList.vue";

export default {
  name: "sidebar",
  components: {
    "note-list": NoteList
  }
};
</script>

<style></style>
