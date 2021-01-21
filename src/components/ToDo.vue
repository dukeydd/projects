<template>
  <el-card class="box-card" shadow="hover">
    <div class="content" v-show="!isEditing">
    
      <!-- <el-checkbox v-model="todo.done" v-on:change="completeTodo(todo)"></el-checkbox> -->
      
      <i class="el-icon-arrow-up" v-if="todo.priority === 'High'" style="padding: 10px 10px" />
      <i class="el-icon-minus" v-if="todo.priority === 'Medium'" style="padding: 10px 10px" />
      <i class="el-icon-arrow-down" v-if="todo.priority === 'Low'" style="padding: 10px 10px" />
      {{ todo.name }}
      <span style="float:right">
      <el-button type="default" icon="el-icon-edit" circle v-on:click="showForm" />
      <el-button type="default" icon="el-icon-delete" circle v-on:click="deleteTodo(todo)" />
      </span>
    </div>

    <el-form ref="form" :model="form" label-width="120px" v-show="isEditing">
      <el-form-item label="Todo">
        <el-input v-model="todo.name"></el-input>
      </el-form-item>
      <el-form-item label="Project">
        <el-input v-model="todo.project"></el-input>
      </el-form-item>
      <el-form-item label="Priority">
        <el-select v-model="todo.priority" placeholder="Select" value-key="id">
          <el-option
            v-for="prio in priorities"
            :key="prio.value"
            :label="prio.label"
            :value="prio.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="hideForm">Update</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
  export default {
    props: ['todo'],
    data() {
      return {
        isEditing: false,
        priorities: [
          {
            value: 'High',
            label: 'High'
          },
          {
            value: 'Medium',
            label: 'Medium'
          },
          {
            value: 'Low',
            label: 'Low'
          }
        ],
        value: '',
      };
    },
    methods: {
      showForm() {
        this.isEditing = true;
      },
      hideForm() {
        this.isEditing = false;
      },
      deleteTodo(todo) {
        this.$emit('delete-todo', todo);
      },
      completeTodo(todo, ) {
        this.$emit('complete-todo', todo);
      }
    }
  }
</script>