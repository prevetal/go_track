<template>
    <section class="modal" id="adding_to_delivery_modal">
        <div class="modal_content" @click.self="emitter.emit('closeAddingAllToDeliveryModal')">
            <div class="data">
                <button class="close_btn" @click.prevent="emitter.emit('closeAddingAllToDeliveryModal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>


                <div class="modal_title">
                    {{ $t('message.adding_all_to_delivery_modal_title', { count: 342 }) }}
                </div>


                <div class="modal_data">
                    <div class="text">
                        {{ $t('message.adding_all_to_delivery_text') }}
                    </div>


                    <div class="choose_delivery">
                        <div class="current">
                            <span>{{ $t('message.adding_to_delivery_choose_delivery_placeholder') }}</span>
                            <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>
                        </div>
                    </div>


                    <div class="new_delivery" v-if="showNewDelivery">
                        <div class="label">Создание новой поставки</div>

                        <div class="field">
                            <input type="text" name="" value="" class="input">
                        </div>

                        <div class="row">
                            <div class="date">
                                <div class="label">Выбрать дату поставки</div>
                                <input type="text" name="" value="29.05.2023" class="input">
                            </div>

                            <div class="days">
                                <div class="label">На сколько дней заполнить склад</div>
                                <input type="number" name="" value="30" class="input">
                            </div>
                        </div>
                    </div>


                    <button class="create_delivery_btn" @click.prevent="showNewDelivery = true" v-if="!showNewDelivery">
                        {{ $t('message.btn_create_delivery') }}
                    </button>


                    <div class="btns">
                        <button class="cancel_btn btn" @click.prevent="emitter.emit('closeRemovingFromDeliveryModal')">
                            {{ $t('message.btn_cancel') }}
                        </button>

                        <button class="add_btn btn disabled">
                            {{ $t('message.btn_add_product_to_delivery') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="overlay" @click.prevent="emitter.emit('closeAddingAllToDeliveryModal')"></div>
    </section>
</template>


<script setup>
    import { inject, ref } from 'vue'

    const emitter = inject('emitter'),
        showNewDelivery = ref(false)
</script>


<style scoped>
    .text
    {
        line-height: 130%;

        width: 487px;
        max-width: 100%;
    }



    .choose_delivery
    {
        margin-top: 30px;
    }


    .choose_delivery .current
    {
        color: #808080;

        position: relative;

        padding: 13px 14px 14px 14px;

        cursor: pointer;

        border: 1px solid #dbe0e4;
        border-radius: 4px;
    }


    .choose_delivery .current .arr
    {
        position: absolute;
        z-index: 3;
        top: 0;
        right: 15px;
        bottom: 0;

        display: block;

        width: 14px;
        height: 8px;
        margin: auto;

        pointer-events: none;
    }



    .create_delivery_btn
    {
        color: #49aa4f;
        font-weight: 600;

        display: block;

        width: 100%;
        margin-top: 10px;
        padding: 13px 19px;

        transition: .2s linear;

        border: 1px dashed #dbe0e4;
        border-radius: 4px;
    }

    .create_delivery_btn:hover
    {
        color: #fff;

        border-color: #49aa4f;
        background: #49aa4f;
    }


    .new_delivery
    {
        margin-top: 20px;
    }


    .new_delivery .label
    {
        color: #808080;

        margin-bottom: 5px;
    }


    .new_delivery .field
    {
        position: relative;
    }

    .new_delivery .field .input
    {
        color: var(--text_color);
        font-family: var(--font_family);
        font-size: 18px;

        display: block;

        width: 100%;
        height: 43px;

        border: none;
        border-bottom: 1px solid #dbe0e4;
        background: none;
    }


    .new_delivery .row
    {
        display: flex;

        margin-top: 25px;
        margin-bottom: -10px;
        margin-left: -20px;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .new_delivery .row > *
    {
        display: flex;

        margin-bottom: 10px;
        margin-left: 20px;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .new_delivery .row .label
    {
        margin-right: 10px;
        margin-bottom: 0;
    }

    .new_delivery .row .input
    {
        color: var(--text_color);
        font-family: var(--font_family);
        font-size: 12px;

        display: block;

        width: 85px;
        height: 30px;

        text-align: center;

        border: 1px solid #dbe0e4;
        border-radius: 4px;
        background: none;
    }

    .new_delivery .row .days .input
    {
        width: 36px;
    }



    .btns
    {
        display: flex;

        margin-top: 30px;

        justify-content: space-between;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .btns .btn
    {
        color: #49aa4f;
        font-weight: 600;

        width: calc(50% - 10px);
        height: 45px;

        transition: .2s linear;

        border: 1px solid #dbe0e4;
        border-radius: 4px;
    }

    .btns .btn.add_btn
    {
        color: #fff;

        border-color: #49aa4f;
        background: #49aa4f;
    }

    .btns .btn.add_btn.disabled
    {
        pointer-events: none;

        border-color: #92cc95;
        background: #92cc95;
    }


    .btns .btn:hover
    {
        color: #fff;

        border-color: #49aa4f;
        background: #49aa4f;
    }

</style>