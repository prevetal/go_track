<template>
    <section class="auth">
        <div class="add_shop">
            <div class="title">
                {{ $t('message.add_shop_page_title') }}
            </div>

            <form class="form">
                <div class="line">
                    <div class="field">
                        <input type="text" name="" value="" class="input" :placeholder="$t('message.form_placeholder_shop_name')">
                    </div>
                </div>

                <div class="line">
                    <div class="field">
                        <input type="text" name="" value="" class="input" :placeholder="$t('message.form_placeholder_api_key')">
                    </div>
                </div>

                <div class="line api_key_help">
                    <button type="button" class="btn" @click.prevent="emitter.emit('openAPIKeyHelpModal')">
                        {{ $t('message.btn_where_get_key') }}
                    </button>
                </div>

                <div class="submit">
                    <button type="button" class="submit_btn">
                        {{ $t('message.btn_connect_shop') }}
                    </button>
                </div>
            </form>


            <div class="links">
                <div><router-link to="/">
                    {{ $t('message.btn_skip') }}
                </router-link></div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { inject } from 'vue'


    const emitter = inject('emitter')
</script>


<style scoped>
    .add_shop
    {
        width: 426px;
        max-width: 100%;
        margin-right: auto;
        margin-left: auto;
    }


    .api_key_help
    {
        color: #49aa4f;

        padding-bottom: 5px;
    }


    .api_key_help .btn{
        text-decoration: underline;
    }

</style>