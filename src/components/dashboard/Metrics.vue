<template>
    <div class="metrics">
        <div class="cont">
            <div class="scroll">
                <div class="row">
                    <!-- Orders -->
                    <Orders />

                    <!-- Sales -->
                    <Sales />

                    <!-- Revenue -->
                    <Revenue />

                    <!-- Profit -->
                    <Profit />

                    <!-- Lost profit -->
                    <LostProfit />
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
    // Components
    import Orders from '@/components/dashboard/metrics/Orders.vue'
    import Sales from '@/components/dashboard/metrics/Sales.vue'
    import Revenue from '@/components/dashboard/metrics/Revenue.vue'
    import Profit from '@/components/dashboard/metrics/Profit.vue'
    import LostProfit from '@/components/dashboard/metrics/LostProfit.vue'
</script>


<style>
    .metrics
    {
        margin-bottom: 20px;
    }


    .metrics .scroll
    {
        overflow: auto;

        width: 100vw;
        margin-right: calc((100vw - 1440px) / -2);
        margin-left: calc((100vw - 1440px) / -2);

        scrollbar-color: transparent transparent;
        scrollbar-width: thin;
        padding: 0 calc((100vw - 1440px - 120px) / 2);
    }

    .metrics .scroll::-webkit-scrollbar
    {
        display: none;

        width: 0;
        height: 0;

        background-color: transparent;
    }

    .metrics .scroll::-webkit-scrollbar-thumb
    {
        display: none;

        background-color: transparent;
    }


    .metrics .row
    {
        display: flex;

        width: 1480px;

        justify-content: flex-start;
        align-items: stretch;
        align-content: stretch;
        flex-wrap: wrap;
    }

    .metrics .row > * + *
    {
        margin-left: 20px;
    }


    .metrics .item
    {
        display: flex;

        width: 280px;
        padding: 20px;

        transition: box-shadow .2s linear;

        border-radius: 8px;
        background: #f6f7f8;

        justify-content: space-between;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .metrics .item .name
    {
        font-size: 18px;
        font-weight: 600;
    }


    .metrics .item .total_val
    {
        font-size: 18px;
        font-weight: 600;

        position: relative;

        margin-left: auto;
        padding-left: 13px;
    }

    .metrics .item .total_val:before
    {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;

        display: block;

        width: 8px;
        height: 8px;
        margin: auto;

        content: '';

        border-right: 4px solid transparent;
        border-bottom: 8px solid currentColor;
        border-left: 4px solid transparent;
    }


    .metrics .item .total_val.green
    {
        color: #49aa4f;
    }

    .metrics .item .total_val.red
    {
        color: #c75d57;
    }

    .metrics .item .total_val.red:before
    {
        transform: rotate(180deg);
    }


    .metrics .item .features
    {
        width: 100%;
        margin-top: 15px;

        white-space: nowrap;
    }


    .metrics .item .features > *
    {
        display: flex;

        justify-content: space-between;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .metrics .item .features > * + *
    {
        margin-top: 10px;
    }


    .metrics .item .features .label
    {
        color: #808080;
    }


    .metrics .item .features .val
    {
        color: #1e2c3a;

        text-align: right;
    }

    .metrics .item .features .val.green
    {
        color: #49aa4f;
    }

    .metrics .item .features .val.red
    {
        color: #c75d57;
    }


    .metrics .item.green:hover
    {
        box-shadow: inset 0 0 0 1px #49aa4f;
    }

    .metrics .item.red:hover
    {
        box-shadow: inset 0 0 0 1px #c75d57;
    }

</style>