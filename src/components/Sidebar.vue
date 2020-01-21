<template>
  <aside class="column" :class="isShowNoteList ? 'is-4' : 'is-2'">
    <div class="columns">
      <div class="column">
        <category-list />
      </div>
      <div v-if="isShowNoteList" class="column">
        <note-list />
      </div>
    </div>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import CategoryList from "@/components/CategoryList.vue";
import NoteList from "@/components/NoteList.vue";

export default {
  name: "sidebar",
  components: {
    "category-list": CategoryList,
    "note-list": NoteList
  },
  computed: {
    ...mapGetters(["isShowNoteList"])
  },
  methods: {
    ...mapActions(["selectCategory"])
  }
};
</script>

<style></style>
