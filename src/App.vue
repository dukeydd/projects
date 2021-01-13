<template>
  <div id="app">
    <h1> To-Do List </h1>
    <ul>
        <to-do-list v-bind:todos="todos" />
        <create-todo v-on:add-todo="addTodo" />
    </ul>
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
  // {
  //   label: { required: true, type: String },
  //   done: { default: false, type: Boolean }
  // }
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
    addTodo(title, project, done, priority) {
      this.todos.push({
        title,
        project, 
        done: false, 
        priority
      });
    },
  }
};
</script>

<style>

</style>
