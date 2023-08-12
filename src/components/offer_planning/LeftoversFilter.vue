<template>
    <div class="filter">
        <div class="status">
            <button class="btn" :class="{ active: activeStatus == 1 }" @click.prevent="activeStatus = 1">
                {{ $t('message.filter_status_all') }} <span>1240</span>
            </button>

            <button class="btn" :class="{ active: activeStatus == 2 }" @click.prevent="activeStatus = 2">
                <div class="circle red"></div>
                {{ $t('message.filter_status_urgently') }} <span>240</span>
            </button>

            <button class="btn" :class="{ active: activeStatus == 3 }" @click.prevent="activeStatus = 3">
                <div class="circle orange"></div>
                {{ $t('message.filter_status_soon') }} <span>129</span>
            </button>

            <button class="btn" :class="{ active: activeStatus == 4 }" @click.prevent="activeStatus = 4">
                <div class="circle green"></div>
                {{ $t('message.filter_status_no_need') }} <span>628</span>
            </button>
        </div>


        <div class="selects">
            <div class="field">
                <div class="current">
                    <span>{{ $t('message.filter_category_placeholder') }}</span>
                    <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>
                </div>

                <div class="dropdown">

                </div>
            </div>

            <div class="field">
                <div class="current">
                    <span>{{ $t('message.filter_brand_placeholder') }}</span>
                    <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>
                </div>

                <div class="dropdown">

                </div>
            </div>

            <div class="field">
                <div class="current">
                    <span>{{ $t('message.filter_abc_placeholder') }}</span>
                    <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>
                </div>

                <div class="dropdown">

                </div>
            </div>

            <div class="field">
                <div class="current">
                    <span>{{ $t('message.filter_supplies_placeholder') }}</span>
                    <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>
                </div>

                <div class="dropdown">

                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { ref } from 'vue'

    const activeStatus = ref(1)
</script>


<style scoped>
    .filter > * + *
    {
        margin-top: 20px;
    }



    .status
    {
        display: flex;

        margin-bottom: -10px;
        margin-left: -10px;

        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
    }

    .status > *
    {
        margin-bottom: 10px;
        margin-left: 10px;
    }


    .status .btn
    {
        display: flex;

        padding: 8px 10px 9px;

        transition: .2s linear;

        border-radius: 4px;
        background: #f6f7f8;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .status .btn .circle
    {
        width: 14px;
        height: 14px;
        margin-right: 8px;

        border-radius: 50%;
    }

    .status .btn .circle.red
    {
        background: #c75d57;
    }

    .status .btn .circle.orange
    {
        background: #E69F47;
    }

    .status .btn .circle.green
    {
        background: #49aa4f;
    }


    .status .btn span
    {
        margin-left: 4px;
    }


    .status .btn:hover,
    .status .btn.active
    {
        color: #fff;

        background: #49aa4f;
    }



    .selects
    {
        display: flex;

        margin-bottom: -10px;
        margin-left: -10px;

        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
    }

    .selects > *
    {
        margin-bottom: 10px;
        margin-left: 10px;
    }


    .selects .field
    {
        position: relative;
    }


    .selects .current
    {
        display: flex;

        width: 160px;
        padding: 7px 15px 8px;

        cursor: pointer;

        border: 1px solid #dbe0e4;
        border-radius: 100px;

        justify-content: space-between;
        align-items: center;
        align-content: center;
        flex-wrap: nowrap;
    }


    .selects .current span
    {
        overflow: hidden;

        width: 100%;

        white-space: nowrap;
        text-overflow: ellipsis;
    }


    .selects .current .arr
    {
        display: block;

        width: 14px;
        height: 8px;
        margin-left: auto;
    }

</style>