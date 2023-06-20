import { defineStore } from "pinia";

export const useNotesStore = defineStore("notes", {
  state: () => ({
    allNotes: [],
    isModalOpen: false,
  }),
  actions: {
    deleteNote(id) {
      console.log(id);
      this.allNotes = this.allNotes.filter((note) => note.id !== id);
    },
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
    addNote(note) {
      this.allNotes.push(note);
    },
  },
});
