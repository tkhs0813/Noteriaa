const state = {
  categories: [],
  notes: [],
  isLoading: false
};

const mutations = {
  LOAD_CATEGORIES(state, categories) {
    state.categories = categories;
  },
  CREATE_CATEGORY(state, category) {
    state.categories.push(category);
  },
  DELETE_CATEGORY(state, category) {
    state.categories = state.categories.filter(c => c.id !== category.id);
  },
  OPEN_CATEGORY(state, category) {
    const updateCategoryId = state.categories.findIndex(
      c => c.id === category.id
    );
    state.categories.splice(updateCategoryId, 1, category);
  },
  CLOSE_CATEGORY(state) {
    state.categories = state.categorieso.map(category => {
      category.isOpen = false;
      return category;
    });
  },
  LOAD_NOTES(state, notes) {
    state.notes = notes;
  },
  ADD_NOTES(state, note) {
    state.note.push(note);
  },
  DELETE_NOTES(state, note) {
    state.notes = state.notes.filter(n => n.id !== note.id);
  },
  UPDATE_NOTE(state, note) {
    const updateNotesId = state.notes.findIndex(n => n.id === note.id);
    state.notes.splice(updateNotesId, 1, note);
  },
  CLOSE_NOTE(state) {
    state.notes = state.notes.map(note => {
      note.isOpen = false;
      return note;
    });
  },
  SET_LOADING(state, loading) {
    state.isLoading = loading;
  }
};

const actions = {
  loadCategories(store) {
    store.commit("SET_LOADING", true);
    store.commit("LOAD_CATEGORIES", []);

    const categories = [{
      id: "category1",
      name: "category_name_1",
      isOpen: false
    }, {
      id: "category2",
      name: "category_name_2",
      isOpen: false
    }, {
      id: "category3",
      name: "category_name_3",
      isOpen: false
    }];

    store.commit("LOAD_NOTES", categories);
    store.commit("SET_LOADING", false);
  },
  createCategory(store, category) {
    store.commit("SET_LOADING", true);
    store.commit("ADD_NOTE", category);
    store.commit("SET_LOADING", false);
  },
  loadNotes(store) {
    store.commit("SET_LOADING", true);
    store.commit("LOAD_NOTES", []);

    // 本来はDBからとってくる
    const notes = [{
        id: 1,
        title: "Title1-1",
        body: "text1",
        isOpen: false
      },
      {
        id: 2,
        title: "Title1-2",
        body: "text1-2",
        isOpen: false
      },
      {
        id: 3,
        title: "Title2-1",
        body: "text2-1",
        isOpen: false
      },
      {
        id: 4,
        title: "Title2-2",
        body: "text2-2",
        isOpen: false
      },
      {
        id: 5,
        title: "Title3-1",
        body: "text3-1",
        isOpen: false
      }
    ];

    store.commit("LOAD_NOTES", notes);
    store.commit("SET_LOADING", false);
  },
  selectCategory(store, category) {
    store.commit("SET_LOADING", true);
    if (!category.isOpen) {
      store.commit("CLOSE_CATEGORY");
      category.isOpen = true;
      store.commit("OPEN_CATEGORY", category);
    }
    store.commit("SET_LOADING", false);
  },
  addNote(store, note) {
    store.commit("SET_LOADING", true);
    store.commit("ADD_NOTE", note);
    store.commit("SET_LOADING", false);
  },
  selectNote(store, note) {
    if (!note.isOpen) {
      store.commit("CLOSE_NOTE");
      note.isOpen = true;
      store.commit("UPDATE_NOTE", note);
    }
  },
  updateNote(store) {
    store.dispatch("loadNotes");
  }
};

const getters = {
  categories: state => () => state.categories,
  notes: state => () => state.notes,
  noteById: state => id => state.notes.find(note => note.id === id),
  openNote: state => () => {
    const index = state.notes.findIndex(note => note.isOpen);
    return state.notes[index];
  },
  isLoading: state => () => state.isLoading
};

export default {
  state,
  mutations,
  actions,
  getters
};