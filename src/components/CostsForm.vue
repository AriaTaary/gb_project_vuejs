<template>
  <v-form
    ref="form"
    v-model="form"
    class="form"
  >
    <v-text-field
      v-model="form.category"
      label="Категория:"
    ></v-text-field>

    <v-text-field
      v-model="form.value"
      label="Значение:"
    ></v-text-field>

    <v-text-field
      v-model="form.date"
      label="Дата:"
    ></v-text-field>

    <v-btn @click="onSubmit">Создать</v-btn>
  </v-form>
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
        return `${d}.${m}.${y}`
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