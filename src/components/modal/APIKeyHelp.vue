<template>
    <section class="modal">
        <div class="modal_content" @click.self="emitter.emit('closeAPIKeyHelpModal')">
            <div class="data">
                <button class="close_btn" @click.prevent="emitter.emit('closeAPIKeyHelpModal')">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_close"></use></svg>
                </button>


                <div class="modal_title">
                    {{ $t('message.API_key_help_modal_title') }}
                </div>


                <div class="modal_data">
                    <div class="text">
                        <div class="step step1">
                            {{ $t('message.API_key_help_step1') }}
                        </div>

                        <div class="step step2">
                            {{ $t('message.API_key_help_step2') }}

                            <img src="@/assets/API_key_help_step2.jpg" alt="">
                        </div>

                        <div class="step step3">
                            {{ $t('message.API_key_help_step3') }}
                        </div>

                        <div class="step step4">
                            {{ $t('message.API_key_help_step4') }}
                        </div>

                        <div class="step step5">
                            {{ $t('message.API_key_help_step5') }}

                            <img src="@/assets/API_key_help_step5.jpg" alt="">
                        </div>

                        <div class="step step6">
                            {{ $t('message.API_key_help_step6') }}
                        </div>
                    </div>

                    <div class="btns">
                        <button class="need_help_btn btn">
                            {{ $t('message.btn_need_help') }}
                        </button>

                        <button class="close_btn btn" @click.prevent="emitter.emit('closeAPIKeyHelpModal')">
                            {{ $t('message.btn_sure_close') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="overlay" @click.prevent="emitter.emit('closeAPIKeyHelpModal')"></div>
    </section>
</template>


<script setup>
    import { inject } from 'vue'

    const emitter = inject('emitter')
</script>


<style scoped>
    .btns
    {
        display: flex;

        margin-top: 30px;

        justify-content: space-between;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }



    .step
    {
        line-height: 160%;
    }

    .step + .step
    {
        margin-top: 10px;
    }


    .step img
    {
        display: block;

        max-width: 100%;
        margin: 30px 0;

        border: 1px solid #dbe0e4;
        border-radius: 4px;
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

    .btns .btn.close_btn
    {
        color: #fff;

        border-color: #49aa4f;
        background: #49aa4f;
    }


    .btns .btn:hover
    {
        color: #fff;

        border-color: #49aa4f;
        background: #49aa4f;
    }

</style>