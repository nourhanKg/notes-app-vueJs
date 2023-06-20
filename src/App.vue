<script>
  import ModalComp from './components/ModalComp.vue';
  import NotesCard from './components/NotesCard.vue';
  import {useNotesStore} from "./store/notes-store";
  import {storeToRefs} from "pinia";
  export default {
    name: "App",
    components: {ModalComp, NotesCard},
    setup() {
      const notesStore = useNotesStore(); 
      const {isModalOpen} = storeToRefs(notesStore);
      const {toggleModal} = notesStore;
      return {
      toggleModal,
      isModalOpen
    }
    }
  }
  // import { reactive, ref } from 'vue';
  // const showModal = ref(false);
  // const newnNote = ref("");
  // const enableAddNote = ref(false);
  // const Notes = ref([]);
  // const cardStyle = {
  //   backgroundColor: getRandomColor()
  // }
  // const validationMsg = "You can't enter an empty note!";
  // const showMsg = ref(false);
  // function toggleModal() {
  //   showModal.value = !showModal.value
  // }
  // function validate() {
  //   if(newnNote.value.length > 0) {
  //     enableAddNote.value = true
  //     showMsg.value = false
  //     return true;
  //   }
  //   console.log("s");
  //   showMsg.value = true
  // }
  // function addNewNote() {
  //   if(validate()) {
  //     const newNote = {
  //       id: uuidv4(),
  //       value: newnNote.value,
  //       date: new Date().toLocaleDateString({ weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }),
  //     }
  //     cardStyle.backgroundColor = getRandomColor();
  //     Notes.value.push(newNote);
  //     clear();
  //   }
  // }
  // function getRandomColor() {
  //   const color = `hsl(${Math.random() * 360}, 100%, 75%)`;
  //   return color;
  // }
  // function clear() {
  //     newnNote.value = "";
  //     enableAddNote.value = false;
  //     showModal.value = false;
  // }
</script>

<template>
  <main>
    <ModalComp v-show="isModalOpen"></ModalComp>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="() => toggleModal()">+</button>
      </header>
      <NotesCard></NotesCard>
    </div>
  </main>
</template>

<style scoped>
*{
  box-sizing: border-box;
}
.container {
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto
  }

  h1 {
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 75px;
  }

  

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header button {
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: rgb(21, 20, 20);
    border-radius: 1000px;
    color: white;
    font-size: 20px;
  }
  main {
    height: 100vh;
    width: 100vw;
  }
</style>
