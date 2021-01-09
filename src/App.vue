<template>
  <div id="app">
    <h1> To-Do List </h1>
    <ul>
        <to-do-item v-bind:todos="todos"></to-do-item>
    </ul>
  </div>
</template>

<script>
import ToDoItem from './components/ToDoItem.vue';

export default {
  name: 'app',
  components: {
    ToDoItem
  },
  props: [],
  // {
  //   label: { required: true, type: String },
  //   done: { default: false, type: Boolean }
  // }
  data() {
    return {
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false,
        priority: "high",
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: true,
        priority: "medium",
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false,
        priority: "low",
      }, {
        title: 'Todo D',
        project: 'Project D',
        done: false,
        priority: "high",
      }],
      hover: false,
    }
  }
};
</script>

<style>

</style>
