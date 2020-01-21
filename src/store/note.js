const state = {
  notes: [],
  isLoading: false,
  isShowNoteList: false,
  selectedCategory: ""
};

const mutations = {
  LOAD_NOTES(state, notes) {
    state.notes = notes;
  },
  ADD_NOTES(state, note) {
    state.note.push(note);
  },
  DELETE_NOTES(state, note) {
    state.notes = state.notes.filter(n => n.id !== note.id);
  },
  UPDATE_NOTES(state, note) {
    const updateNotesId = state.notes.findIndex(n => n.id === note.id);
    state.notes.splice(updateNotesId, 1, note);
  },
  SELECT_LOADING(state, loading) {
    state.isLoading = loading;
  },
  SHOW_NOTES(state, flag) {
    state.isShowNoteList = flag;
  },
  SELECT_CATEGORY(state, category) {
    state.selectedCategory = category;
  }
};

const actions = {
  loadNotes(store) {
    store.commit("SELECT_LOADING", true);
    store.commit("LOAD_NOTES", []);

    // 本来はDBからとってくる
    const notes = [
      {
        id: 1,
        title: "Title1-1",
        category: "Category1",
        body: "text1"
      },
      {
        id: 2,
        title: "Title1-2",
        category: "Category1",
        body: "text1-2"
      },
      {
        id: 3,
        title: "Title2-1",
        category: "Category2",
        body: "text2-1"
      },
      {
        id: 4,
        title: "Title2-2",
        category: "Category2",
        body: "text2-2"
      },
      {
        id: 5,
        title: "Title3-1",
        category: "Category3",
        body: "text3-1"
      }
    ];

    store.commit("LOAD_NOTES", notes);
    store.commit("SELECT_LOADING", false);
  },
  addNote(store, note) {
    store.commit("SELECT_LOADING", true);
    store.commit("ADD_NOTE", note);
    store.commit("SELECT_LOADING", false);
  },
  updateNote(store) {
    store.dispatch("loadNotes");
  },
  selectCategory(store, category) {
    const selectCategory = store.state.selectCategory;
    const isShowNoteList = store.state.isShowNoteList;

    if (selectCategory === category && isShowNoteList) {
      store.commit("SHOW_NOTES", false);
    } else if (selectCategory === category && !isShowNoteList) {
      store.commit("SHOW_NOTES", true);
    } else if (selectCategory !== category) {
      store.commit("SHOW_NOTES", true);
      store.commit("SELECT_CATEGORY", category);
    }
  }
};

const getters = {
  notes: state => state.notes,
  noteById: state => id => state.notes.find(note => note.id === id),
  categories: state => {
    const categories = state.notes.map(note => note.category);
    return categories.filter((category, i, self) => {
      return self.indexOf(category) === i;
    });
  },
  noteByCategory: state => category =>
    state.notes.filter(note => note.category === category),
  isLoading: state => state.isLoading,
  isShowNoteList: state => state.isShowNoteList
};

export default {
  state,
  mutations,
  actions,
  getters
};
