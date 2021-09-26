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
            <el-input id="date" type="date" v-model="form.date"></el-input>
        </el-form-item>
        <el-form-item>
            <button class="add-button" type="button" @click="onSubmit">Создать</button>
        </el-form-item>
    </el-form>
</template>

<script>
  export default {
    props: {
        costs: Array,
    },
    data() {
      return {
        form: {
          id: '',  
          category: '',
          value: '',
          date: '',
        }
      }
    },
    methods: {
      getCurrentDay(){
        const today = new Date();
        const d = today.getDate();
        const m = today.getMonth() + 1;
        const y = today.getFullYear();
        return `${d}-${m}-${y}`
      },
      onSubmit() {
        const {value, category, date} = this.form;
        const data = {
          id: this.costs.length + 1,
          category,
          value,
          date: date || this.getCurrentDay()
        }
        this.$emit('updateCosts', data);
      },
    }
  }
</script>