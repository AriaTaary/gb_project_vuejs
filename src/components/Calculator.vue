<template>
    <div>
      <v-btn class="add-button" @click="showCalculator">
        {{ showCalc ? 'Скрыть' : 'Показать' }} калькулятор
      </v-btn>
      <div class="calculator" v-if="showCalc">
        <h1>Калькулятор</h1>
        <div class="calc-display">
          <v-text-field
            label="operand 1"
            id="operand1"
            data-test="operand1"
            name="operand1"
            @click="picked = 'operand1'" 
            class="calc-input" 
            v-model.number="operand1"
          ></v-text-field>
          <p class="calc-func">{{ operator }}</p>
          <v-text-field
            label="operand 2"
            id="operand2"
            data-test="operand2"
            name="operand2"
            @click="picked = 'operand2'" 
            class="calc-input" 
            v-model.number="operand2"
          ></v-text-field>
          <p class="calc-func">=</p>
          <p class="calc-result">{{ result }}</p>
        </div>
        <div class="message" v-if="message !== null">
            <p>{{message}}</p>
        </div>
        <div class="keyboard">
          <v-btn class="keyboard-button" @click="addition">+</v-btn>
          <v-btn class="keyboard-button" @click="subtraction">-</v-btn>
          <v-btn class="keyboard-button" @click="division">/</v-btn>
          <v-btn class="keyboard-button" @click="multiplication">*</v-btn>
          <v-btn class="keyboard-button" @click="exponentiation">^</v-btn>
          <v-btn class="keyboard-button" @click="wholeDivision">//</v-btn>
          <v-btn class="keyboard-button" @click="remainder">%</v-btn>
        </div>
        <div v-if="this.show === true">
            <ul class="keyboard-buttons-list" id="keys">
                <li v-for="item in keys" :key="item.value">
                    <v-btn class="keyboard-button" @click="displayKeyboard(item.value), value=item.value">{{ item.value }}</v-btn>
                </li>
                <v-btn class="keyboard-button" @click="deleteLastSymbol()">&#8592;</v-btn>
            </ul>
        </div>
        <div class="checkbox">
          <v-checkbox
          v-model="show"
          :label="'Отобразить экранную клавиатуру'"
          ></v-checkbox>
          <v-radio-group row v-model="picked">
            <v-radio
              v-for="n in 2"
              :key="n"
              :label="`Operand ${n}`"
              :value="`operand${n}`"
            ></v-radio>
          </v-radio-group>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data: () => ({
    operand1: 0,
    operand2: 0,
    result: 0,
    operator: '',
    show: null,
    showCalc: false,
    keys: [
        {value: '1'},
        {value: '2'},
        {value: '3'},
        {value: '4'},
        {value: '5'},
        {value: '6'},
        {value: '7'},
        {value: '8'},
        {value: '9'},
    ],
    picked: '',
    value: '',
    message: null,
  }),
  methods: {
    showCalculator() {
      if (this.showCalc) {
        this.showCalc = false;
      } else {
        this.showCalc = true;
      }
    },
    addition() {
      this.message = null;
      this.result = this.operand1 + this.operand2;
      this.operator='+';
    },
    subtraction() {
      this.message = null;
      this.result = this.operand1 - this.operand2;
      this.operator='-';
    },
    division() {
      this.message = null;
      this.operator = '/';
      this.operand2 !== 0 ? this.result = this.operand1 / this.operand2 :  this.message = "Пожалуйста, не делите на 0"
    },
    multiplication() {
      this.message = null;
      this.result = this.operand1 * this.operand2;
      this.operator='*';
    },
    exponentiation() {
      this.message = null;
      this.result = Math.pow(this.operand1, this.operand2);
      this.operator='^';
    },
    wholeDivision() {
      this.message = null;
      this.operator='//';
      this.operand2 !== 0 ? this.result = (this.operand1 - this.operand1 % this.operand2) / this.operand2 : this.message = "Пожалуйста, не делите на 0"
    },
    remainder() {
      this.message = null;
      this.result = this.operand1 % this.operand2;
      this.operator='%';
    },
    displayKeyboard(value){
      this.picked === 'operand1' ? this.operand1 = Number(this.operand1 + value) : this.operand2 = Number(this.operand2 + value);
    },
    deleteLastSymbol(){
      if(this.picked === 'operand1'){
          this.operand1 = String(this.operand1);
          let newData = this.operand1.slice(0, -1);
          this.operand1 = newData;
      }
      else{
          this.operand2 = String(this.operand2);
          let newData = this.operand2.slice(0, -1);
          this.operand2 = newData;
      }
    }
  },
}
</script>