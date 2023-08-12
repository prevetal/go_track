<template>
    <div class="filter">
        <div class="row">
            <div class="period">
                <button class="btn" :class="{ active: activeBtn == 1 }" @click="activeBtn = 1">
                    <span>{{ $t('message.filter_period_btn1') }}</span>
                </button>

                <button class="btn" :class="{ active: activeBtn == 2 }" @click="activeBtn = 2">
                    <span>{{ $t('message.filter_period_btn2') }}</span>
                </button>

                <button class="btn" :class="{ active: activeBtn == 3 }" @click="activeBtn = 3">
                    <span>{{ $t('message.filter_period_btn3') }}</span>
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_calendar"></use></svg>
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
            </div>
        </div>
    </div>
</template>


<script setup>
    import { ref } from 'vue'

    const activeBtn = ref(1)
</script>


<style scoped>
    .filter .row
    {
        margin-bottom: -20px;
        margin-left: -20px;
    }

    .filter .row > *
    {
        margin-bottom: 20px;
        margin-left: 20px;
    }



    .period
    {
        display: flex;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .period .btn
    {
        color: #49aa4f;
        font-weight: 600;

        display: flex;

        height: 34px;
        padding: 7px 15px;

        transition: .2s linear;

        border: 1px solid #dbe0e4;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .period .btn:first-child
    {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    .period .btn:last-child
    {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }


    .period .btn + .btn
    {
        margin-left: -1px;
    }


    .period .btn .icon
    {
        display: block;

        width: 18px;
        height: 18px;
        margin-left: 6px;
    }


    .period .btn:hover,
    .period .btn.active
    {
        color: #fff;

        border-color: #49aa4f;
        background: #49aa4f;
    }



    .selects
    {
        display: flex;

        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
    }

    .selects > * + *
    {
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