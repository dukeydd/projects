<template>
  <div>
    <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    <el-row :gutter="12">
      <el-col :span="18">
        <todo v-on:delete-todo="deleteTodo" v-for="todo in todos" v-bind:todo="todo" :key="todo.id"></todo>
      </el-col>     
    </el-row>
    <!-- <el-row :gutter="12">
      
    </el-row> -->
  </div>
</template>

<script>
import Todo from './ToDo';
export default {
  props: [
    'todos'
  ],
  components: {
    Todo
  },
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    }
  }
};
</script>

<style>
</style>