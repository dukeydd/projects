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

export default {
  name: 'app',
  components: {
    ToDoList,
    CreateTodo
  },
  props: [],
  data() {
    return {
      todos: [
        {
          title: 'Todo A',
          project: 'Project A',
          done: false,
          priority: "High",
        }, {
          title: 'Todo B',
          project: 'Project B',
          done: true,
          priority: "Medium",
        }, {
          title: 'Todo C',
          project: 'Project C',
          done: false,
          priority: "Low",
        }, {
          title: 'Todo D',
          project: 'Project D',
          done: false,
          priority: "High",
        }
      ],
      hover: false,
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
