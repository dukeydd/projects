<template>
  <div id="app">
    <h1 style="text-align:center">To-Do List</h1>
      <to-do-list v-bind:todos="todos" />
      <create-todo v-on:add-todo="addTodo" />
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue';
import CreateTodo from './components/CreateTodo.vue';
const axios = require('axios');

export default {
  name: 'app',
  components: {
    ToDoList,
    CreateTodo
  },
  props: [],
  mounted () {
    axios
      .get('http://localhost:3000/todos')
      .then(response => (this.todos = response.data))
  },
  data() {
    return {
      todos: this.todos,
      hover: false
    }
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

html, body {
  font-family: 'Roboto', sans-serif;
}

#app {
  font-family: 'Roboto', sans-serif;
}
</style>
