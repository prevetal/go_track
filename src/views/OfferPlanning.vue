<template>
    <div class="offer_planning">
        <div class="cont">
            <div class="tabs">
                <button class="btn" :class="{ active: activeTab == 1 }" @click.prevent="activeTab = 1">
                    {{ $t('message.offer_planing_tab_leftovers') }}
                </button>

                <button class="btn" :class="{ active: activeTab == 2 }" @click.prevent="activeTab = 2">
                    {{ $t('message.offer_planing_tab_supplies') }}
                </button>
            </div>


            <template v-if="activeTab == 1">
            <div class="head">
                <!-- Filter -->
                <LeftoversFilter />

                <div>
                    <!-- Search -->
                    <Search />

                    <button class="all_products_in_delivery" @click.prevent="emitter.emit('openAddingAllToDeliveryModal')">
                        {{ $t('message.btn_all_products_in_delivery') }}
                    </button>
                </div>
            </div>

            <!-- Products -->
            <LeftoversProducts />
            </template>


            <template v-if="activeTab == 2">
            <div class="head">
                <!-- Filter -->
                <SuppliesFilter />

                <!-- Search -->
                <Search />

                <button class="create_delivery_btn" @click.prevent="emitter.emit('openCreatingDeliveryModal')">
                    {{ $t('message.btn_create_delivery') }}
                </button>
            </div>


            <div class="orders">
                <Order />

                <Order />
            </div>
            </template>
        </div>
    </div>
</template>


<script setup>
    import { inject, ref } from 'vue'

    // Components
    import LeftoversFilter from '@/components/offer_planning/LeftoversFilter.vue'
    import SuppliesFilter from '@/components/offer_planning/SuppliesFilter.vue'
    import Search from '@/components/Search.vue'
    import LeftoversProducts from '@/components/offer_planning/LeftoversProducts.vue'
    import Order from '@/components/offer_planning/SuppliesOrder.vue'


    const emitter = inject('emitter'),
        activeTab = ref(1)
</script>


<style scoped>
    .offer_planning .tabs
    {
        display: flex;

        margin-bottom: 30px;

        border-bottom: 1px solid #dbe0e4;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .offer_planning .tabs > * + *
    {
        margin-left: 40px;
    }


    .offer_planning .tabs .btn
    {
        color: #808080;
        font-size: 28px;

        position: relative;

        display: block;

        padding-bottom: 14px;

        transition: color .2s linear;
    }

    .offer_planning .tabs .btn:after
    {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;

        width: 0;
        height: 3px;
        margin: auto;

        content: '';
        transition: width .3s linear;

        background: #49aa4f;
    }


    .offer_planning .tabs .btn:hover,
    .offer_planning .tabs .btn.active
    {
        color: var(--text_color);
    }

    .offer_planning .tabs .btn.active:after
    {
        width: 100%;
    }


    .offer_planning .head
    {
        display: flex;

        margin-bottom: 30px;

        cursor: pointer;

        justify-content: space-between;
        align-items: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
    }



    .offer_planning .all_products_in_delivery
    {
        color: #49aa4f;

        display: block;

        margin-top: 14px;
        margin-left: auto;
        padding: 13px 19px;

        transition: .2s linear;

        border: 1px solid #dbe0e4;
        border-radius: 4px;
    }

    .offer_planning .all_products_in_delivery:hover
    {
        color: #fff;

        border-color: #49aa4f;
        background: #49aa4f;
    }



    .offer_planning .create_delivery_btn
    {
        color: #49aa4f;
        font-weight: 600;

        display: block;

        width: 100%;
        margin-top: 20px;
        padding: 13px 19px;

        transition: background .2s linear;

        border: 1px dashed #dbe0e4;
        border-radius: 4px;
    }

    .offer_planning .create_delivery_btn:hover
    {
        background: #f6f7f8;
    }
</style>