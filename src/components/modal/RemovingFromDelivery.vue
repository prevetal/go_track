<template>
    <section class="modal" id="removing_from_delivery_modal">
        <div class="modal_content" @click.self="emitter.emit('closeRemovingFromDeliveryModal')">
            <div class="data">
                <button class="close_btn" @click.prevent="emitter.emit('closeRemovingFromDeliveryModal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>


                <div class="modal_title">
                    {{ $t('message.removing_from_delivery_modal_title') }}
                </div>


                <div class="modal_data">
                    <div class="text">
                        {{ $t('message.removing_from_delivery_text') }}
                    </div>

                    <div class="btns">
                        <button class="cancel_btn btn" @click.prevent="emitter.emit('closeRemovingFromDeliveryModal')">
                            {{ $t('message.btn_cancel') }}
                        </button>

                        <button class="remove_btn btn">
                            {{ $t('message.btn_remove_from_delivery') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="overlay" @click.prevent="emitter.emit('closeRemovingFromDeliveryModal')"></div>
    </section>
</template>


<script setup>
    import { inject } from 'vue'

    const emitter = inject('emitter')
</script>


<style scoped>
    .text
    {
        line-height: 130%;
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


    .btns .btn:hover
    {
        color: #fff;

        border-color: #49aa4f;
        background: #49aa4f;
    }

    .btns .btn.remove_btn
    {
        color: #fff;

        border-color: #c75d57;
        background: #c75d57;
    }

</style>