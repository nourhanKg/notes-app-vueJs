<template>
    <div class="overlay">
      <div class="modal">
        <button class="closeBtn" @click="() => toggleModal()">x</button>
        <textarea v-model.trim="newNote" @input="validate"></textarea>
        <button class="btn" @click="creatNewNote">Add Note</button>
        <p v-show="showMsg">{{ validationMsg }}</p>
      </div>
    </div>
</template>

<script>
    import { v4 as uuidv4 } from 'uuid';
    import {useNotesStore} from "../store/notes-store";
    import { ref } from 'vue';
    export default {
        name: "ModalComp",
        setup() {
            const notesStore = useNotesStore(); 
            const {toggleModal} = notesStore;
            const {addNote} = notesStore;
            const newNote = ref("");
            const enableAddNote = ref(false);
            const validationMsg = "You can't enter an empty note!";
            const showMsg = ref(false);
            function validate() {
              if(newNote.value.length > 0) {
                enableAddNote.value = true
                showMsg.value = false
                return true;
              }
              showMsg.value = true
            }
            function creatNewNote() {
            if(validate()) {
                const note = {
                id: uuidv4(),
                value: newNote.value,
                date: new Date().toLocaleDateString({ weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }),
                backgroundColor: getRandomColor()
                }
                // cardStyle.backgroundColor = getRandomColor();
                // Notes.value.push(newNote);
                addNote(note);
                clear();
            }}
            //helper functions
            function getRandomColor() {
                const color = `hsl(${Math.random() * 360}, 100%, 75%)`;
                return color;
            }
            function clear() {
                newNote.value = "";
                enableAddNote.value = false;
                toggleModal();
            }
            return {
                toggleModal,
                newNote,
                validate,
                creatNewNote,
                showMsg,
                validationMsg
            }
        }
    }
</script>

<style scoped>
    .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
    .modal {
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    padding-top: 15px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .modal .btn {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: blueviolet;
    border-radius: 20px;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 15px;
  }
  .modal .closeBtn {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-bottom: 15px;
    background-color: rgb(237, 44, 147);
    border: none;
    outline: none;
    font-size: 20px;
    color: white;
    align-self: end;
    cursor: pointer;
  }
  .modal p {
    /* margin-left: auto;
    /* font-size: 20px; */
    padding-top: 10px;
    font-weight: 500;
    /* z-index: 100000;
    cursor: pointer;  */
    color: rgb(231, 83, 83);
  }

  textarea {
    width: 100%;
    height: 200px;
    padding: 10px;
    font-size: 20px;
    resize: none;
    border: 1px solid blueviolet;
    border-radius: 20px;
    caret-color: rgb(237, 182, 44);
  }
  textarea:focus {
    outline: none;
    border-color: rgb(237, 182, 44);
  }
</style>