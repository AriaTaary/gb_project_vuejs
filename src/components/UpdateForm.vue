<template>
  <v-form
    ref="form"
    v-model="form"
    lazy-validation
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

    <v-btn @click="onSubmit">Изменить</v-btn>
  </v-form>
</template>

<script>
export default {
    name: 'UpdateForm',
    props: {
        activeItem: Object,
    },
    data: () => ({
        form: {
            id: '',  
            category: '',
            value: '',
            date: '',
        },
    }),
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