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
            <button class="add-button" type="button" @click="onSubmit">Создать</button>
        </el-form-item>
    </el-form>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'CostsForm',
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
      this.form.category = this.$route.name ? this.$route.name : '';
      this.form.value = this.$route.params.value ? this.$route.params.value : '';
      this.form.date = Object.keys(this.$route.params).length ? this.getCurrentDay() : '';
    },
    computed: {
    ...mapState(['categoryList'])
  },
    methods: {
      getCurrentDay(){
        const today = new Date();
        const d = today.getDate();
        const m = today.getMonth() + 1;
        const y = today.getFullYear();
        return `${y}-${m}-${d}`
      },
      onSubmit() {
        const {value, category, date} = this.form;
        const data = {
          id: this.categoryList.length + 1,
          category,
          value,
          date: date || this.getCurrentDay()
        }
        this.$emit('updateCosts', data);
      },
    }
  }
</script>