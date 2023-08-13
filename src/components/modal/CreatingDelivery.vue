<template>
    <section class="modal" id="adding_to_delivery_modal">
        <div class="modal_content" @click.self="emitter.emit('closeCreatingDeliveryModal')">
            <div class="data">
                <button class="close_btn" @click.prevent="emitter.emit('closeCreatingDeliveryModal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>


                <div class="modal_title">
                    {{ $t('message.adding_all_to_delivery_modal_title', { count: 342 }) }}
                </div>


                <div class="modal_data">
                    <div class="new_delivery">
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


                    <div class="btns">
                        <button class="cancel_btn btn" @click.prevent="emitter.emit('closeRemovingFromDeliveryModal')">
                            {{ $t('message.btn_cancel') }}
                        </button>

                        <button class="add_btn btn">
                            {{ $t('message.btn_add_product_to_delivery') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="overlay" @click.prevent="emitter.emit('closeCreatingDeliveryModal')"></div>
    </section>
</template>


<script setup>
    import { inject } from 'vue'

    const emitter = inject('emitter')
</script>


<style scoped>
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

    .btns .btn.add_btn
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