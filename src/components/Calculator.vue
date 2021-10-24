<template>
    <div>
      <h1>Калькулятор</h1>
      <div class="calc-display">
        <input 
          id="operand1"
          data-test="operand1"
          name="operand1"
          @click="picked = 'operand1'" 
          class="calc-input" 
          v-model.number="operand1"
        />
        <p class="calc-func">{{ operator }}</p>
        <input 
          id="operand2"
          data-test="operand2"
          name="operand2"
          @click="picked = 'operand2'" 
          class="calc-input" 
          v-model.number="operand2"
        />
        <p class="calc-func">=</p>
        <p class="calc-result">{{ result }}</p>
      </div>
      <div class="message" v-if="message !== null">
          <p>{{message}}</p>
      </div>
      <div class="keyboard">
          <button class="keyboard-button" @click="addition">+</button>
          <button class="keyboard-button" @click="subtraction">-</button>
          <button class="keyboard-button" @click="division">/</button>
          <button class="keyboard-button" @click="multiplication">*</button>
          <button class="keyboard-button" @click="exponentiation">^</button>
          <button class="keyboard-button" @click="wholeDivision">//</button>
          <button class="keyboard-button" @click="remainder">%</button>
      </div>
      <div class="checkbox">
          <input type="checkbox" id="show-keyboard" v-model="show">
          <label for="show-keyboard">Отобразить экранную клавиатуру</label>
      </div>
      <div v-if="this.show === true">
          <ul class="keyboard-buttons-list" id="keys">
              <li v-for="item in keys" :key="item.value">
                  <button class="keyboard-button" @click="displayKeyboard(item.value), value=item.value" >{{ item.value }}</button>
              </li>
              <button class="keyboard-button" @click="deleteLastSymbol()">&#8592;</button>
          </ul>
      </div>
      <div class="change">
          <input type="radio" id="operand1" value="operand1" v-model="picked">
          <label for="one">Operand 1</label>
          <input type="radio" id="operand2" value="operand2" v-model="picked">
          <label for="two">Operand 2</label>
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
    addition() {
      this.result = this.operand1 + this.operand2;
      this.operator='+';
    },
    subtraction() {
      this.result = this.operand1 - this.operand2;
      this.operator='-';
    },
    division() {
      this.message = null;
      this.operator = '/';
      this.operand2 !== 0 ? this.result = this.operand1 / this.operand2 :  this.message = "Пожалуйста, не делите на 0"
    },
    multiplication() {
      this.result = this.operand1 * this.operand2;
      this.operator='*';
    },
    exponentiation() {
      this.result = Math.pow(this.operand1, this.operand2);
      this.operator='^';
    },
    wholeDivision() {
      this.message = null;
      this.operator='//';
      this.operand2 !== 0 ? this.result = (this.operand1 - this.operand1 % this.operand2) / this.operand2 : this.message = "Пожалуйста, не делите на 0"
    },
    remainder() {
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