<template>
  <div>
    <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    <el-row :gutter="12">
      <el-col :span="10">
        <el-card class="box-card" shadow="hover" v-for="todo in todos" :key="todo">
          <div>
            <el-checkbox v-model="todo.done"></el-checkbox>
            {{ todo.title }}             
            <i class="el-icon-arrow-up" v-if="todo.priority === 'high'" style="float: right; padding: 3px 0"> </i>
            <i class="el-icon-minus" v-if="todo.priority === 'medium'" style="float: right; padding: 3px 0"> </i>
            <i class="el-icon-arrow-down" v-if="todo.priority === 'low'" style="float: right; padding: 3px 0"> </i>
          </div>
        </el-card>
      </el-col>
    </el-row>
  
  </div>
</template>

<script>
export default {
  props: ['todos']
}
</script>

<style>
</style>