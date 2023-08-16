<template>
    <div class="chart">
        <div class="head">
            <div class="title">
                {{ $t('message.orders_chart_title') }}
            </div>

            <button class="previous_period" :class="{ active: previousData }" @click.prevent="togglePreviousData()">
                <div class="check">
                    <svg><use xlink:href="@/assets/sprite.svg#ic_check"></use></svg>
                </div>
                <span>{{ $t('message.orders_chart_previous_period_label') }}</span>
            </button>
        </div>
    </div>
</template>


<script setup>
    import { ref } from 'vue'

    const previousData = ref(true)


    // Toggle previous data
    function togglePreviousData() {
        previousData.value = !previousData.value
    }
</script>


<style scoped>
    .chart
    {
        padding: 30px;

        background: #f6f7f8;
    }


    .chart .head
    {
        display: flex;

        margin-bottom: 32px;

        justify-content: space-between;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .chart .title
    {
        font-size: 10px;
        font-weight: 600;

        letter-spacing: 1px;
        text-transform: uppercase;
    }


    .chart .previous_period
    {
        color: #808080;

        position: relative;

        margin-left: auto;
        padding-left: 28px;
    }


    .chart .previous_period .check
    {
        color: #fff;

        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;

        display: flex;

        width: 18px;
        height: 18px;
        margin: auto;

        transition: .2s linear;

        border: 1px solid #dbe0e4;
        border-radius: 4px;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .chart .previous_period .check svg
    {
        display: block;

        width: 10px;
        height: 8px;

        transition: opacity .2s linear;

        opacity: 0;
    }


    .chart .previous_period:hover .check
    {
        border-color: #e69f47;
    }


    .chart .previous_period.active .check
    {
        border-color: #e69f47;
        background: #e69f47;
    }

    .chart .previous_period.active .check svg
    {
        opacity: 1;
    }

</style>