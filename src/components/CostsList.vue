<template>
    <div class="costs-list">
        <h1>Мои расходы</h1>
        <el-table 
            class="costs_table"
            :data="activeList"
            style="width: 100%">
            <el-table-column
                prop="id"
                label="#"
                width="50"
            >
            </el-table-column>
            <el-table-column
                prop="date"
                label="Дата"
                width="180"
            >
            </el-table-column>
            <el-table-column
                prop="category"
                label="Категория"
            >
            </el-table-column>
            <el-table-column
                prop="value"
                label="Значение"
            >
            </el-table-column>
            <el-table-column
                label="Операции"
                width="300"
            >
                <template slot-scope="scope">
                    <div class="v-table__points" @click="$modal.show(scope.row)">
                        <img class="menu-button" src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"/>
                    </div>
                    <transition name="fade">
                        <ContextMenu v-if="scope.row.id === activeID" :id="scope.row.id" @showForm="showForm"></ContextMenu>
                    </transition>
                </template>
            </el-table-column>
        </el-table>
        <UpdateForm
            v-if="isShownForm"
            :active-item="activeItem[0]"
            @updateCosts="updateCosts"
        />
    </div>
</template>

<script>
import ContextMenu from '@/components/ContextMenu'
import { mapState, mapMutations } from 'vuex'
import UpdateForm from '../components/UpdateForm'
export default {
    name: 'CostsList',
    components: {
        UpdateForm,
        ContextMenu
    },
    props: ['list'],
    data: () => ({
        costsItem: {},
        isShownForm: false,
        activeID: null
    }),
    computed: {
        ...mapState(['activeList']),
        ...mapState(['activeItem']),
    },
    mounted () {
        this.$modal.EventBus.$on('shown', this.onShown)
        this.$modal.EventBus.$on('hide', this.onHide)
    },
    methods: {
        ...mapMutations(['updateDataFromList']),
        onShown (params) {
            this.activeID = params.id
        },
        onHide () {
            this.activeID = null
        },
        updateCosts(data) {
            const props = {id: data.id, data: data}
            this.updateDataFromList(props);
            this.showForm();
        },
        showForm(){
            this.isShownForm ? this.isShownForm = false : this.isShownForm = true;
        },
    },
}
</script>