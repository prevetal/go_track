<template>
     <div class="abc_analysis">
        <div class="cont">
            <div class="title">
                {{ $t('message.abc_analysis_title') }}
            </div>

            <div class="head">
                <!-- Filter -->
                <Filter />
            </div>

            <div class="groups">
                <!-- Groups -->
                <Groups />
            </div>

            <div class="head">
                <!-- Filter -->
                <Filter2 />

                <!-- Search -->
                <Search />
            </div>

            <!-- Products -->
            <Products />
        </div>
    </div>
</template>


<script setup>
    // Components
    import Filter from '@/components/abc_analysis/Filter.vue'
    import Groups from '@/components/abc_analysis/Groups.vue'
    import Filter2 from '@/components/abc_analysis/Filter2.vue'
    import Search from '@/components/Search.vue'
    import Products from '@/components/abc_analysis/Products.vue'
</script>


<style scoped>
    .title
    {
        font-size: 28px;
        font-weight: 500;

        margin-bottom: 30px;
    }


    .head
    {
        display: flex;

        margin-bottom: 30px;

        justify-content: space-between;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

</style>