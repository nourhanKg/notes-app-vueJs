<template>
    <div class="cards-container">
        <div v-for="note in allNotes" :key="note.id" class="card"  :style="{backgroundColor: note.backgroundColor}">
            <p class="main-text">{{ note.value }}</p>
            <div>
                <p class="date">{{ note.date }}</p>
                <button class="btn" @click="deleteHandler(note.id)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { useNotesStore } from '../store/notes-store';
    import {storeToRefs} from "pinia";
    export default {
        name: "NotesCard",
        setup() {
            const notesStore = useNotesStore();
            const {allNotes} = storeToRefs(notesStore);
            console.log(notesStore);
            function deleteHandler(id) {
                notesStore.deleteNote(id);
            }
            return {
                allNotes,
                deleteHandler
            }
        }
    }
</script>

<style scoped>
    .card {
    width: 225px;
    height: 225px;
    background-color: rgb(237, 182, 44);
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    /* margin-right: 20px; */
    justify-self: flex-start;
    align-content: flex-start;
  }

  .main-text {
    line-height: 1.25;
    font-size: 17.5px;
    font-weight: bold;
  }
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    gap: 20px;
  }

  .date {
    font-size: 12.5px;
    margin-top: auto;
  }
  .btn {
    background-color: rgb(227, 22, 91);
    color: white;
    padding: 7px 15px;
    border-radius: 20px;
    border: none;
  }
</style>