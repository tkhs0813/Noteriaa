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
  CLOSE_NOTE(state) {
    state.notes = state.notes.map(note => {
      note.isOpen = false;
      return note;
    });
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
    store.commit("SELECT_LOADING", false);
  },
  addNote(store, note) {
    store.commit("SELECT_LOADING", true);
    store.commit("ADD_NOTE", note);
    store.commit("SELECT_LOADING", false);
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
  notes: state => state.notes,
  noteById: state => id => state.notes.find(note => note.id === id),
  openNote: state => {
    const index = state.notes.findIndex(note => note.isOpen);
    return state.notes[index];
  },
  isLoading: state => state.isLoading
};

export default {
  state,
  mutations,
  actions,
  getters
};
