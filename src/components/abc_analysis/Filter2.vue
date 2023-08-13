<template>
    <div class="filter">
        <div class="row">
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
    </div>
</template>


<script setup>

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