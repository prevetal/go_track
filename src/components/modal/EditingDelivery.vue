<template>
    <section class="modal">
        <div class="modal_content" @click.self="emitter.emit('closeEditingDeliveryModal')">
            <div class="data">
                <button class="close_btn" @click.prevent="emitter.emit('closeEditingDeliveryModal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>


                <div class="modal_title">
                    {{ $t('message.editing_delivery_modal_title') }}
                </div>


                <div class="modal_data">
                    <form action="">
                        <div class="line">
                            <div class="label">
                                {{ $t('message.editing_delivery_modal_name_label') }}
                            </div>

                            <div class="field">
                                <input type="text" name="" value="Название" class="input">
                            </div>
                        </div>

                        <div class="btns">
                            <button type="button" class="cancel_btn btn" @click.prevent="emitter.emit('closeEditingDeliveryModal')">
                                {{ $t('message.btn_cancel') }}
                            </button>

                            <button type="submit" class="submit_btn btn">
                                {{ $t('message.btn_save') }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="overlay" @click.prevent="emitter.emit('closeEditingDeliveryModal')"></div>
    </section>
</template>


<script setup>
    import { inject } from 'vue'

    const emitter = inject('emitter')
</script>


<style scoped>
    form .label
    {
        color: #808080;

        margin-bottom: 5px;
    }


    form  .field
    {
        position: relative;
    }

    form  .field .input
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

    .btns .btn.submit_btn
    {
        color: #fff;

        border-color: #49aa4f;
        background: #49aa4f;
    }


    .btns .btn:hover
    {
        background: #f6f7f8;
    }

    .btns .btn.submit_btn:hover
    {
        border-color: #3b9340;
        background: #3b9340;
    }

</style>