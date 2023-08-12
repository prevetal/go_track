<template>
    <div class="filter">
        <div class="row">
            <div class="type">
                <button class="btn" :class="{ active: activeBtn == 1 }" @click="activeBtn = 1">
                    <span>{{ $t('message.filter_type_btn1'), { count: 230 } }}</span>
                </button>

                <button class="btn" :class="{ active: activeBtn == 2 }" @click="activeBtn = 2">
                    <span>{{ $t('message.filter_type_btn2'), { count: 2 } }}</span>
                </button>

                <button class="btn" :class="{ active: activeBtn == 3 }" @click="activeBtn = 3">
                    <span>{{ $t('message.filter_type_btn3'), { count: 4 } }}</span>
                </button>

                <button class="btn" :class="{ active: activeBtn == 4 }" @click="activeBtn = 4">
                    <span>{{ $t('message.filter_type_btn4'), { count: 224 } }}</span>
                </button>
            </div>


            <div class="selects">
                <div class="field">
                    <div class="current">
                        <span>{{ $t('message.filter_creation_date_placeholder') }} сначала новые</span>
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



    .type
    {
        display: flex;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .type .btn
    {
        display: flex;

        padding: 8px 15px 9px;

        transition: .2s linear;

        border-radius: 4px;
        background: #f6f7f8;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .type .btn + .btn
    {
        margin-left: 10px;
    }


    .type .btn:hover,
    .type .btn.active
    {
        color: #fff;

        background: #49aa4f;
    }

    .type .btn.active
    {
        font-weight: 600;
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

        width: 280px;
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