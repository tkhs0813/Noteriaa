<template>
  <aside>
    <note-list />
  </aside>
</template>

<script>
import { mapGetters } from "vuex";

import NoteList from "@/components/NoteList.vue";

export default {
  name: "sidebar",
  components: {
    "note-list": NoteList
  },
  computed: {
    ...mapGetters(["isShowNoteList"])
  }
};
</script>

<style></style>
