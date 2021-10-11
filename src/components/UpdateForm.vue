<template>
    <el-form ref="form" :model="form" label-width="120px">
        <el-form-item>
            <label for="category">Категория:</label>
            <el-input id="category" v-model="form.category"></el-input>
        </el-form-item>
        <el-form-item>
            <label for="value">Значение:</label>
            <el-input id="value" v-model="form.value"></el-input>
        </el-form-item>
        <el-form-item>
            <label for="date">Дата:</label>
            <el-input id="date" v-model="form.date"></el-input>
        </el-form-item>
        <el-form-item>
            <button class="add-button" type="button" @click="onSubmit">Изменить</button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
  name: 'UpdateForm',
  props: {
      activeItem: Object,
  },
  data() {
      return {
        form: {
          id: '',  
          category: '',
          value: '',
          date: '',
        },
      }
    },
    mounted() {
        if (this.activeItem) {
            this.form.id = this.activeItem.id;
            this.form.category = this.activeItem.category;
            this.form.value = this.activeItem.value;
            this.form.date = this.getCurrentDay();
        }
    },
    methods: {
      getCurrentDay() {
        const today = new Date();
        const d = today.getDate();
        const m = today.getMonth() + 1;
        const y = today.getFullYear();
        return `${d}.${m}.${y}`
      },
      onSubmit() {
        const {id, value, category, date} = this.form;
        const data = {
          id,
          category,
          value,
          date,
        }
        this.$emit('updateCosts', data);
      },
    }
}
</script>