<template>
    <div class="products">
        <div class="titles">
            <div class="col_info">
                {{ $t('message.products_titles_col_products') }}
            </div>

            <div class="col_sku_apt">
                {{ $t('message.products_titles_col_sku_apt') }}
            </div>

            <div class="col_abc">
                {{ $t('message.products_titles_col_abc') }}
            </div>

            <div class="col_remainder">
                {{ $t('message.products_titles_col_remainder') }}
            </div>

            <div class="col_sales_speed">
                {{ $t('message.products_titles_col_sales_speed') }}
            </div>

            <div class="col_will_end">
                {{ $t('message.products_titles_col_will_end') }}
            </div>

            <div class="col_lost_profit">
                {{ $t('message.products_titles_col_lost_profit') }}
            </div>

            <div class="col_count">
                {{ $t('message.products_titles_col_count') }}
            </div>

            <div class="col_remove"></div>
        </div>


        <div class="empty">
            {{ $t('message.products_empty_text') }}
        </div>
    </div>
</template>


<script setup>

</script>


<style scoped>
    .titles
    {
        color: #808080;
        font-size: 10px;
        font-weight: 600;
        line-height: 22px;

        display: flex;

        padding: 10px 0;

        text-align: center;
        white-space: nowrap;
        letter-spacing: 1px;
        text-transform: uppercase;

        border-top: 1px solid #dbe0e4;
        border-bottom: 1px solid #dbe0e4;
        background: #f6f7f8;

        justify-content: flex-start;
        align-items: stretch;
        align-content: stretch;
        flex-wrap: nowrap;
    }


    .titles > *
    {
        padding-right: 19px;
        padding-left: 19px;
    }

    .titles > * + *
    {
        padding-left: 18px;

        border-left: 1px solid #dbe0e4;
    }



    .empty
    {
        color: #808080;
        font-style: italic;

        padding: 40px 0 100px;
    }



    .col_info
    {
        width: 100%;
    }

    .col_sku_apt
    {
        width: 164px;
        min-width: 164px;
    }

    .col_abc
    {
        width: 80px;
        min-width: 80px;
    }

    .col_remainder
    {
        width: 120px;
        min-width: 120px;
    }

    .col_sales_speed
    {
        width: 180px;
        min-width: 180px;
    }

    .col_will_end
    {
        width: 140px;
        min-width: 140px;
    }

    .col_lost_profit
    {
        width: 180px;
        min-width: 180px;
    }

    .col_count
    {
        width: 160px;
        min-width: 160px;
    }


    .col_remove
    {
        width: 40px;
        min-width: 40px;
    }

</style>