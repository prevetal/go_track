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
                <div class="field" ref="target">
                    <div class="current" @click.prevent="showSortDropdown = !showSortDropdown">
                        <span>{{ $t('message.filter_creation_date_placeholder') }} {{ selectedSort }}</span>

                        <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>
                    </div>

                    <div class="dropdown" v-show="showSortDropdown">
                        <div class="list">
                            <div class="item" @click.prevent="toggleSort('сначала новые')" :class="{ selected: selectedSort == 'сначала новые' }">
                                <span>сначала новые</span>
                                <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_filter_check"></use></svg>
                            </div>

                            <div class="item" @click.prevent="toggleSort('сначала старые')" :class="{ selected: selectedSort == 'сначала старые' }">
                                <span>сначала старые</span>
                                <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_filter_check"></use></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { ref } from 'vue'
    import { onClickOutside } from '@vueuse/core'


    const activeBtn = ref(1),
        showSortDropdown = ref(false),
        target = ref(null),
        selectedSort = ref('сначала новые')


    // Toggle sort
    function toggleSort(name) {
        selectedSort.value = name
    }


    // Сlick element outside
    onClickOutside(target, event => showSortDropdown.value = false)
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

        padding: 7px 14px 8px;

        transition: .2s linear;

        border: 1px solid transparent;
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


    .type .btn:hover
    {
        border-color: #49aa4f;
    }

    .type .btn.active
    {
        color: #fff;
        font-weight: 600;

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

        width: 280px;
        padding: 7px 15px 8px;

        cursor: pointer;
        transition: border-color .2s linear;

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


    .selects .current:hover,
    .selects .current.open
    {
        border-color: #49aa4f;
    }


    .selects .dropdown
    {
        position: absolute;
        z-index: 10;
        top: 100%;
        left: 0;

        width: 220px;
        margin-top: 5px;
        padding: 5px 0;

        border-radius: 4px;
        background: #fff;
        box-shadow: 0 4px 10px 0 rgba(20, 20, 20, .10);
    }


    .selects .list
    {
        overflow: auto;

        max-height: 224px;

        scrollbar-color: #49aa4f #dbe0e4;
        scrollbar-width: thin;
    }

    .selects .list::-webkit-scrollbar
    {
        width: 4px;
        height: 4px;

        border-radius: 5px;
        background-color: #dbe0e4;
    }

    .selects .list::-webkit-scrollbar-thumb
    {
        border-radius: 5px;
        background-color: var(--text_color);
    }


    .selects .list .item
    {
        position: relative;

        padding: 10px 40px 10px 15px;

        cursor: pointer;
        transition: background .2s linear;
    }

    .selects .list .item .icon
    {
        position: absolute;
        top: 0;
        right: 15px;
        bottom: 0;

        display: block;

        width: 15px;
        height: 12px;
        margin: auto;

        transition: opacity .2s linear;

        opacity: 0;
    }


    .selects .list .item:hover,
    .selects .list .item.selected
    {
        background: #f1f8f1;
    }

    .selects .list .item.selected .icon
    {
        opacity: 1;
    }

</style>