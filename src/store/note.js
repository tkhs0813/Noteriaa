const state = {
  notes: [],
  isLoading: false
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
  UPDATE_NOTE(state, note) {
    const updateNotesId = state.notes.findIndex(n => n.id === note.id);
    state.notes.splice(updateNotesId, 1, note);
  },
  SELECT_LOADING(state, loading) {
    state.isLoading = loading;
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
        title: "Title1",
        body: "text1",
        isSelected: false
      },
      {
        id: 2,
        title: "Title2",
        body: "text2",
        isSelected: false
      },
      {
        id: 3,
        title: "Title3",
        body: "text3",
        isSelected: false
      },
      {
        id: 4,
        title: "Title4",
        body: "text4",
        isSelected: false
      },
      {
        id: 5,
        title: "Title5",
        body: "text5",
        isSelected: false
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
  selectNote(store, note) {
    for (let i = 0; store.state.notes.length > 0; i++) {
      const note = store.state.notes[i];
      if (note.isSelected) {
      }
    }
  },
  updateNote(store) {
    store.dispatch("loadNotes");
  }
};

const getters = {
  notes: state => state.notes,
  noteById: state => id => state.notes.find(note => note.id === id),
  isLoading: state => state.isLoading
};

export default {
  state,
  mutations,
  actions,
  getters
};
