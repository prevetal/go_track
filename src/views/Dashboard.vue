<template>
    <div class="dashboard">
        <div class="cont">
            <div class="title">
                {{ $t('message.dashboard_title') }}
            </div>

            <div class="head">
                <!-- Filter -->
                <Filter />

                <!-- Search -->
                <Search />
            </div>

            <!-- Metrics -->
            <Metrics />

            <!-- Orders chart -->
            <OrdersChart />
        </div>
    </div>
</template>


<script setup>
    // Components
    import Filter from '@/components/dashboard/Filter.vue'
    import Search from '@/components/Search.vue'
    import Metrics from '@/components/dashboard/Metrics.vue'
    import OrdersChart from '@/components/dashboard/OrdersChart.vue'
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