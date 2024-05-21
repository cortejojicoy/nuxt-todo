<script setup lang="ts">

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
        <textarea>Add a new task...</textarea>
        <button>Add</button>
      </div>
    </div>
    <div class="todo-box in-progress">In-progress</div>
    <div class="todo-box done">Done</div>
  </div>
</template>

<style lang="scss">
.todo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  gap: 20px;

  .todo-box {
    flex: 1;
    max-width: 200px;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    transition: all 0.3s ease-in-out;
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

  .todo-box:hover {
    transform: translateY(-5px);
  }
}
</style>
