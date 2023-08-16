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
                <div class="order">
                    <div class="head">
                        <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_hor"></use></svg>

                        <div class="name" @click.prevent="toggleActiveClass">Катя, рубашки срочно в каледино...</div>

                        <div class="crated_date">Создана: <span>23.05.2023</span></div>

                        <div class="delivery_date">Дата поставки: <span>29.05.2023</span></div>

                        <div class="items_count">Позиций: <span>120</span></div>

                        <div class="products_count">Товара: <span>2 120</span></div>

                        <div class="status">
                            <div class="current">
                                <span>Черновик</span>
                                <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>
                            </div>

                            <div class="dropdown">

                            </div>
                        </div>

                        <div class="btns">
                            <button class="btn edit_btn" @click.prevent="emitter.emit('openEditingDeliveryModal')">
                                <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_edit"></use></svg>
                            </button>

                            <button class="btn remove_btn" @click.prevent="emitter.emit('openRemovingDeliveryModal')">
                                <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_remove"></use></svg>
                            </button>
                        </div>
                    </div>

                    <div class="data">
                        <!-- Products -->
                        <SuppliesProductsEmpty />
                    </div>
                </div>


                <div class="order">
                    <div class="head">
                        <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_hor"></use></svg>

                        <div class="name" @click.prevent="toggleActiveClass">Катя, рубашки срочно в каледино...</div>

                        <div class="crated_date">Создана: <span>23.05.2023</span></div>

                        <div class="delivery_date">Дата поставки: <span>29.05.2023</span></div>

                        <div class="items_count">Позиций: <span>120</span></div>

                        <div class="products_count">Товара: <span>2 120</span></div>

                        <div class="status">
                            <div class="current">
                                <span>Черновик</span>
                                <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>
                            </div>

                            <div class="dropdown">

                            </div>
                        </div>

                        <div class="btns">
                            <button class="btn edit_btn" @click.prevent="emitter.emit('openEditingDeliveryModal')">
                                <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_edit"></use></svg>
                            </button>

                            <button class="btn remove_btn" @click.prevent="emitter.emit('openRemovingDeliveryModal')">
                                <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_remove"></use></svg>
                            </button>
                        </div>
                    </div>

                    <div class="data">
                        <!-- Products -->
                        <SuppliesProducts />
                    </div>
                </div>
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
    import SuppliesProducts from '@/components/offer_planning/SuppliesProducts.vue'
    import SuppliesProductsEmpty from '@/components/offer_planning/SuppliesProductsEmpty.vue'


    const emitter = inject('emitter'),
        activeTab = ref(1)


    // Toggle active class
    function toggleActiveClass(e) {
        e.target.closest('.head').classList.toggle('active')
    }
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



    .order + .order
    {
        margin-top: 2px;
    }


    .order .head
    {
        display: flex;

        margin: 0;
        padding: 15px 20px 13px;

        background: #f6f7f8;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .order .head > .arr
    {
        display: block;

        width: 8px;
        min-width: 12px;
        height: 14px;
        margin-right: 20px;
    }


    .order .head .name
    {
        font-size: 18px;

        overflow: hidden;

        width: 321px;
        max-width: 100%;

        transition: .2s linear;
        white-space: nowrap;
        text-overflow: ellipsis;
    }


    .order .head .crated_date
    {
        margin-left: 28px;
    }

    .order .head .delivery_date,
    .order .head .items_count,
    .order .head .products_count
    {
        margin-left: 20px;
    }

    .order .head .crated_date span,
    .order .head .delivery_date span,
    .order .head .items_count span,
    .order .head .products_count span
    {
        color: #808080;
    }


    .order .head .status
    {
        position: relative;

        margin-left: auto;
    }


    .order .head .status .current
    {
        display: flex;

        width: 130px;
        padding: 7px 15px 8px;

        cursor: pointer;

        border: 1px solid #dbe0e4;
        border-radius: 100px;

        justify-content: space-between;
        align-items: center;
        align-content: center;
        flex-wrap: nowrap;
    }


    .order .head .status .current span
    {
        overflow: hidden;

        width: 100%;

        white-space: nowrap;
        text-overflow: ellipsis;
    }


    .order .head .status .current .arr
    {
        display: block;

        width: 14px;
        height: 8px;
        margin-left: auto;
    }


    .order .head .btns
    {
        display: flex;

        margin-left: 32px;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .order .head .btns .btn
    {
        color: #808080;

        display: flex;

        width: 20px;
        height: 20px;

        transition: color .2s linear;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .order .head .btns .btn + .btn
    {
        margin-left: 12px;
    }

    .order .head .btns .btn .icon
    {
        display: block;

        width: 20px;
        height: 20px;
    }

    .order .head .btns .edit_btn .icon
    {
        width: 18px;
        height: 18px;
    }

    .order .head .btns .btn:hover
    {
        color: #49aa4f;
    }


    .order .head.active .name
    {
        color: #49aa4f;
        font-weight: 600;
    }


    .order .data
    {
        display: none;
    }


    .order .head.active + .data
    {
        display: block;
    }

</style>