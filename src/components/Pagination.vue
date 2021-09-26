<template>
    <div class="pagination">
        <el-pagination
            background
            layout="prev, pager, next"
            :total="this.pages"
            :page-size="this.per_page"
            :current-page="this.current_page"
            @current-change="changePage"
            @prev-click="changePage"
            @next-click="changePage">
        </el-pagination>
    </div>
</template>

<script>
export default {
    props: {
        costs: Array,
    },
    data() {
      return {
        pages: 0,
        per_page: 1,
        length: 0,
        current_page: 1,
        firstItem: 0,
        lastItem: 0,
      }
    },
    methods: {
        changePage(page){
            if (page == 1){
                this.firstItem = 0;
                this.lastItem = this.firstItem + this.per_page - 1;
            } else if (this.costs.length > page & page > 1){
                this.firstItem = (this.costs.length - this.costs.length % page) / page;
                this.lastItem = this.firstItem + this.per_page - 1;
            } else if (this.costs.length === page){
                this.firstItem = -1 + page;
                this.lastItem = this.firstItem + this.per_page - 1;
            }
            this.$emit('updatePagination', this.firstItem, this.lastItem);
        }
    },
    created(){
        this.length = this.costs.length;
        let pages = Math.ceil(this.length / this.per_page);
        this.pages = pages;
    }
}
</script>