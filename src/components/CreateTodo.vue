<template>
  <el-row :gutter="12">
    <el-col :span="18">
      <el-card class="box-card">
        <el-button type="default" icon="el-icon-plus" circle v-on:click="openForm" v-show="!isCreating" />
        <el-form ref="form" :model="form" label-width="120px" v-show="isCreating">
          <el-form-item label="Todo">
              <el-input v-model="titleText" ref="title" defaultValue ="" />
          </el-form-item>
          <el-form-item label="Project">
              <el-input v-model="projectText" ref="project" defaultValue ="" />
          </el-form-item>
          <el-form-item label="Priority">
              <el-select v-model="priorityText" ref="priority" placeholder="Select" value-key="id">
                <el-option
                    v-for="prio in priorities"
                    :key="prio.value"
                    :label="prio.label"
                    :value="prio.value">
                </el-option>
              </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" v-on:click="sendForm">Create</el-button>
            <el-button type="default" v-on:click="closeForm">Cancel</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      titleText: '',
      projectText: '',
      priorityText: '',
      isCreating: false,
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
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.titleText.length > 0 && this.projectText.length > 0) {
        // if no priority then default to something
        const title = this.titleText;
        const project = this.projectText;
        console.log(title, project);
        // const priority= this.priorityText;
        this.$emit('add-todo', {
          title,
          project,
          done: false,
          priority: "Medium",
        });
        this.newTodoText = '';
        console.log(this, "hi");
      }
      this.isCreating = false;
    },
  }
};

</script>

<style scoped>

</style>