<template>
  <div>
    <div v-for="note in notes" :key="note.id">
      <note-list-item />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NoteListItem from "@/components/NoteList/NoteListItem.vue";

export default {
  name: "card-list",
  components: {
    "note-list-item": NoteListItem
  },
  computed: {
    ...mapGetters(["notes", "noteById", "isLoading"])
  },
  methods: {
    ...mapActions(["loadNotes"])
  },
  created() {
    this.loadNotes();
  }
};
</script>

<style></style>
