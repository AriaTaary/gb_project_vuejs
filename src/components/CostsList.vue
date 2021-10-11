<template>
    <div>
        <el-table class="costs_table"
            :data="activeList"
            style="width: 100%">
            <el-table-column
            prop="id"
            label="#"
            width="50">
            </el-table-column>
            <el-table-column
            prop="date"
            label="Дата"
            width="180">
            </el-table-column>
            <el-table-column
            prop="category"
            label="Категория">
            </el-table-column>
            <el-table-column
            prop="value"
            label="Значение">
            </el-table-column>
            <el-table-column
                label="Операции"
                width="200">
                <template slot-scope="scope">
                <div class="operation-buttons">
                    <div class="buttons-row">
                    <el-button
                    size="mini"
                    class="button-admin button-change"
                    @click="editAction(scope.$index, scope.row)">Изменить</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    class="button-admin button-delete"
                    @click="deleteAction(scope.$index, scope.row)">Удалить</el-button>
                    </div>
                </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CostsList',
  props: ['list'],
  computed: {
    ...mapState(['activeList'])
  },
}
</script>