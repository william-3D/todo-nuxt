<template>
  <h1>To-Do</h1>
  <form @submit.prevent="addTodo()">
    <label>New To-Do</label>
    <input v-model="newTodo" name="newTodo" autocomplete="off" />
    <button @click="addTodo()">Add To-Do</button>
  </form>
  <h2>To-Do List</h2>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <span :class="{ done: todo.done }" @click="doneTodo(todo)">{{ todo.content }}</span>
      <button @click="removeTodo(index)">Remove</button>
    </li>
  </ul>
  <h4 v-if="todos.length === 0">Empty list.</h4>
</template>

<script src="script.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>