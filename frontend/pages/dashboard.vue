<script setup lang="ts">
import { ref } from "vue";

const newTodo = ref<string>("");
const todos = ref<string[]>([]);
const inProgress = ref<string[]>([]);
const done = ref<string[]>([]);

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push(newTodo.value.trim());
    newTodo.value = "";
  }
};

const moveToInProgress = (index: number) => {
  inProgress.value.push(todos.value[index]);
  todos.value.splice(index, 1);
};

const moveToDone = (index: number) => {
  done.value.push(inProgress.value[index]);
  inProgress.value.splice(index, 1);
};

definePageMeta({
  middleware: ["auth"],
  // or middleware: 'auth'
});
</script>

<template>
  <div class="todo-container">
    <div class="todo-box todo">
      <div class="content">
        <h3>To-do</h3>
        <textarea v-model="newTodo" placeholder="Add a new task..."></textarea>
        <button @click="addTodo">Add</button>
        <ul>
          <li v-for="(item, index) in todos" :key="index">
            {{ item }}
            <button @click="moveToInProgress(index)">In-progress</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="todo-box in-progress">
      <div class="content">
        <h3>In-progress</h3>
        <ul>
          <li v-for="(item, index) in inProgress" :key="index">
            {{ item }}
            <button @click="moveToDone(index)">Done</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="todo-box done">
      <div class="content">
        <h3>Done</h3>
        <ul>
          <li v-for="(item, index) in done" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.todo-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 80vh;
  gap: 20px;
  padding-top: 20px;

  .todo-box {
    flex: 1;
    max-width: 300px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
    padding: 20px;
    box-sizing: border-box;

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: stretch; /* Align content to the top */

      h3 {
        margin-bottom: 20px;
      }

      textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 4px;
        border: 1px solid #ddd;
        resize: vertical;
      }

      button {
        margin-bottom: 10px;
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        background-color: #007bff;
        color: white;
        transition: background-color 0.3s;

        &:hover {
          background-color: #0056b3;
        }
      }

      ul {
        list-style-type: none;
        padding: 0;
        width: 100%;
        margin: 0;
  
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: white;
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 4px;
          border: 1px solid #ddd;
  
          button {
            margin: 0;
            padding: 5px 10px;
            background-color: #28a745;
  
            &:hover {
              background-color: #218838;
            }
          }
        }
      }
    }
  }

  .todo {
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }

  .in-progress {
    background-color: #fff3cd;
    border-color: #ffeeba;
  }

  .done {
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
}
</style>
