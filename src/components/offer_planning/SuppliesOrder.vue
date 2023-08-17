<template>
    <div class="order">
        <div class="head">
            <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_hor"></use></svg>

            <div class="name" @click.prevent="toggleActiveClass">
                Катя, рубашки срочно в каледино...
            </div>

            <div class="crated_date">
                {{ $t('message.delivery_created') }} <span>23.05.2023</span>
            </div>

            <div class="delivery_date">
                {{ $t('message.delivery_date') }} <span>29.05.2023</span>
            </div>

            <div class="items_count">
                {{ $t('message.delivery_positions') }} <span>120</span>
            </div>

            <div class="products_count">
                {{ $t('message.delivery_products') }} <span>2 120</span>
            </div>

            <div class="status" ref="target">
                <div class="current" @click.prevent="showStatusDropdown = !showStatusDropdown">
                    <span>{{ orderStatus }}</span>
                    <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>
                </div>

                <div class="dropdown" v-show="showStatusDropdown">
                    <div class="list">
                        <div class="item" @click.prevent="toggleStatus($t('message.delivery_status_draft'))" :class="{ selected: orderStatus == $t('message.delivery_status_draft') }">
                            <span>{{ $t('message.delivery_status_draft') }}</span>
                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_filter_check"></use></svg>
                        </div>

                        <div class="item" @click.prevent="toggleStatus($t('message.delivery_status_in_work'))" :class="{ selected: orderStatus == $t('message.delivery_status_in_work') }">
                            <span>{{ $t('message.delivery_status_in_work') }}</span>
                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_filter_check"></use></svg>
                        </div>

                        <div class="item" @click.prevent="toggleStatus($t('message.delivery_status_completed'))" :class="{ selected: orderStatus == $t('message.delivery_status_completed') }">
                            <span>{{ $t('message.delivery_status_completed') }}</span>
                            <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_filter_check"></use></svg>
                        </div>
                    </div>
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

            <!-- Products -->
            <SuppliesProducts />
        </div>
    </div>
</template>


<script setup>
    import { ref, inject } from 'vue'

    // Components
    import SuppliesProducts from '@/components/offer_planning/SuppliesProducts.vue'
    import SuppliesProductsEmpty from '@/components/offer_planning/SuppliesProductsEmpty.vue'


    const emitter = inject('emitter'),
        i18n = inject('i18n'),
        target = ref(null),
        showStatusDropdown = ref(false),
        orderStatus = ref(i18n.global.t('message.delivery_status_draft'))


    // Toggle status
    function toggleStatus(value) {
        // Set new value
        orderStatus.value = value

        // Hide dropdown
        showStatusDropdown.value = false
    }


    // Toggle active class
    function toggleActiveClass(e) {
        e.target.closest('.head').classList.toggle('active')
    }
</script>


<style scoped>
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

        cursor: pointer;
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
        transition: border-color .2s linear;

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


    .order .head .status .current:hover,
    .order .head .status .current.open
    {
        border-color: #49aa4f;
    }


    .order .head .status .dropdown
    {
        position: absolute;
        z-index: 10;
        top: 100%;
        left: 0;

        width: 130px;
        margin-top: 5px;
        padding: 5px 0;

        border-radius: 4px;
        background: #fff;
        box-shadow: 0 4px 10px 0 rgba(20, 20, 20, .10);
    }


    .order .head .status .list
    {
        overflow: auto;

        max-height: 224px;

        scrollbar-color: #49aa4f #dbe0e4;
        scrollbar-width: thin;
    }

    .order .head .status .list::-webkit-scrollbar
    {
        width: 4px;
        height: 4px;

        border-radius: 5px;
        background-color: #dbe0e4;
    }

    .order .head .status .list::-webkit-scrollbar-thumb
    {
        border-radius: 5px;
        background-color: var(--text_color);
    }


    .order .head .status .list .item
    {
        position: relative;

        padding: 10px 40px 10px 15px;

        cursor: pointer;
        transition: background .2s linear;
    }

    .order .head .status .list .item .icon
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


    .order .head .status .list .item:hover,
    .order .head .status .list .item.selected
    {
        background: #f1f8f1;
    }

    .order .head .status .list .item.selected .icon
    {
        opacity: 1;
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