<template>
  <div>
    <div v-for="(category, index) in categories" :key="index">
      <div @click="showNoteList(category)">
        <category-list-item :category="category" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import CategoryListItem from "@/components/CategoryList/CategoryListItem.vue";

export default {
  name: "category-list",
  components: {
    "category-list-item": CategoryListItem
  },
  computed: {
    ...mapGetters(["categories"])
  },
  methods: {
    ...mapActions(["loadNotes", "selectCategory"]),
    showNoteList(category) {
      this.selectCategory(category);
    }
  },
  created() {
    this.loadNotes();
  }
};
</script>

<style></style>
