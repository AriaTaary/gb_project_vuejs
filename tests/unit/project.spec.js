/* eslint-disable quote-props */
import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Calculator from '@/components/Calculator.vue'
import Pages from '@/components/VPage.vue'
import StubCategoryList from './stubs/stubCategoryList.json'

const LocalVue = createLocalVue()
LocalVue.use(Vuex)

describe('Calculator operators', () => {
    let wrapper

    const createComponent = () => {
        wrapper = mount(Calculator)
    }
    const findButtonByText = (text) =>
        wrapper.findAll('button').wrappers.find(w => {
            return w.text() === text
        })
    const findLabelText = (text) => {
        return wrapper.findAll('label').wrappers.find(w => {
            return w.text() === text
        })
    }

    afterEach(() => {
        wrapper.destroy()
    })
    test('Ввод данных', () => {
        createComponent()
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('10')
        expect(wrapper.vm.operand1).toBe(10)
    })
    it('Удаление символа', async () => {
        createComponent()
        const operand1 = wrapper.find('[data-test=operand1]')
        await operand1.setValue('10')
        await findButtonByText('←').trigger('click')
        expect(wrapper.vm.operand1).toBe('1')
    })

    it('Клавиатура показана', async () => {
        createComponent()
        expect(wrapper.vm.checked).toBe(true)
    })
    it('Клавиатура скрывается', async () => {
        createComponent()
        await findLabelText('Отобразить экранную клавиатуру').trigger('click')
        expect(wrapper.vm.checked).toBe(false)
    })

    it.each`
  firstNumber | secondNumber | operator  | expectedResult
  ${'3'} | ${'2'} | ${'+'} | ${5}
  ${'7'} | ${'2'} | ${'-'} | ${5}
  ${'4'} | ${'2'} | ${'/'} | ${2}
  ${'8'} | ${'2'} | ${'*'} | ${16}
  ${'2'} | ${'5'} | ${'^'} | ${32}
  ${'10'} | ${'4'} | ${'//'} | ${2}
  ${'23'} | ${'10'} | ${'%'} | ${3}
  `('Проверка оператора "$operator" с числами $firstNumber и $secondNumber',
        async ({ firstNumber, secondNumber, operator, expectedResult }) => {
            createComponent()
            await findLabelText('Operand 1').trigger('click')
            await findButtonByText(firstNumber).trigger('click')

            await findLabelText('Operand 2').trigger('click')
            await findButtonByText(secondNumber).trigger('click')

            await findButtonByText(operator).trigger('click')
            expect(wrapper.vm.result).toBe(expectedResult)
        })
})

describe('Vuex', () => {
    let wrapper

    let fakeStore, state
    beforeEach(() => {
        state = {
            categoryList2: () => []
        }
        fakeStore = new Vuex.Store({
            state,
            namespaced: true
        })
    })
    const createComponent = () => {
        wrapper = mount(Pages, {
            store: fakeStore,
            localVue: LocalVue,
            computed: {
                categoryList2: () => StubCategoryList.data
            }
        })
    }
    afterEach(() => {
        wrapper.destroy()
    })
    test('Расчет количества страниц', async () => {
        createComponent()
        const pageCount = wrapper.findAll('[data-test=page]').wrappers.length
        expect(pageCount === wrapper.vm.pages).toBe(true)
    })
})
