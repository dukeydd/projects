<template>
  <div>
    <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    <el-row :gutter="12">
      <el-col :span="18">

        <el-card class="box-card" shadow="hover" v-for="todo in todos" :key="todo.id">
          <div class="content" v-show="!isEditing">
          
            <el-checkbox v-model="todo.done"></el-checkbox>
            {{ todo.title }}             
            
            <i class="el-icon-arrow-up" v-if="todo.priority === 'High'" style="float: right; padding: 3px 0" />
            <i class="el-icon-minus" v-if="todo.priority === 'Medium'" style="float: right; padding: 3px 0" />
            <i class="el-icon-arrow-down" v-if="todo.priority === 'Low'" style="float: right; padding: 3px 0" />
            
            <el-button type="default" icon="el-icon-edit" circle v-on:click="showForm"></el-button>
          </div>

          <el-form ref="form" :model="form" label-width="120px" v-show="isEditing">
            <el-form-item label="Todo">
              <el-input v-model="todo.title"></el-input>
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: [
    'todos'
    ],
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
  }
};
</script>

<style>
</style>