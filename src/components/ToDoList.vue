<template>
  <div>
    <el-row type="flex" justify="center">
      <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    </el-row>
    <el-row type="flex" justify="center">
      <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="9">
        <todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="todo in todos" v-bind:todo="todo" :key="todo.id"></todo>
      </el-col>     
    </el-row>
  </div>
</template>

<script>
import Todo from './ToDo';
export default {
  props: {
    'todos': Array
  },
  components: {
    Todo
  },
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done != this.todos[todoIndex].done;
      console.log(this.todos);
    }
  }
};
</script>

<style>
</style>