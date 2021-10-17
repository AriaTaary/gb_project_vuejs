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
                width="200"
            >
                <template slot-scope="scope">
                <div class="operation-buttons">
                    <div class="buttons-row">
                    <el-button
                    size="mini"
                    class="button-admin button-change"
                    @click="editAction(scope.row)">Изменить</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    class="button-admin button-delete"
                    @click="deleteAction(scope.row)">Удалить</el-button>
                    </div>
                </div>
                </template>
            </el-table-column>
        </el-table>
        <UpdateForm
            v-if="showForm"
            :active-item="activeItem[0]"
            @updateCosts="updateCosts"
        />
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import UpdateForm from '../components/UpdateForm'
export default {
    name: 'CostsList',
    components: {
        UpdateForm
    },
    props: ['list'],
    data: () => ({
        costsItem: {},
        showForm: false,
    }),
    computed: {
        ...mapState(['activeList']),
        ...mapState(['activeItem']),
    },
    methods: {
        ...mapMutations(['deleteDataFromList']),
        ...mapMutations(['updateDataFromList']),
        ...mapMutations(['getDataFromList']),
        updateCosts(data) {
            const props = {id: data.id, data: data}
            this.updateDataFromList(props);
            this.showForm = false;
        },
        editAction(row) {
            this.getDataFromList(row.id);
            this.showForm = true;
        },
        deleteAction(row) {
            this.deleteDataFromList(row.id);
        }
    },
}
</script>