<template>
    <div class="block">
        <div class="title red">
            {{ $t('message.account_shop_title') }}
        </div>

        <div class="desc">
            {{ $t('message.account_shop_desc') }}
        </div>

        <form action="" class="form">
            <div class="line">
                <div class="field">
                    <input type="text" name="" value="" class="input" :placeholder="$t('message.form_placeholder_shop_name')">
                </div>
            </div>

            <div class="line">
                <div class="field">
                    <input :type="!showAPIKey ? 'password' : 'text'" name="" value="" class="input" :placeholder="$t('message.form_placeholder_api_key')">

                    <button type="button" class="show_btn" @click.prevent="showAPIKey = !showAPIKey">
                        <svg class="icon" v-if="showAPIKey"><use xlink:href="@/assets/sprite.svg#ic_eye"></use></svg>
                        <svg class="icon" v-else><use xlink:href="@/assets/sprite.svg#ic_eye2"></use></svg>
                    </button>

                    <button type="button" class="btn api_key_help_btn" @click.prevent="emitter.emit('openAPIKeyHelpModal')">
                        {{ $t('message.btn_where_get_key') }}
                    </button>
                </div>
            </div>

            <div class="submit">
                <button type="submit" class="submit_btn">
                    {{ $t('message.btn_add_shop') }}
                </button>
            </div>
        </form>
    </div>
</template>


<script setup>
    import { inject, ref } from 'vue'


    const emitter = inject('emitter'),
        showAPIKey = ref(false)
</script>


<style scoped>
    .block
    {
        min-height: 366px;
        padding: 40px;

        border-radius: 8px;
        background: #f6f7f8;
    }


    .title
    {
        font-size: 18px;
        font-weight: 600;

        margin-bottom: 30px;
    }

    .title.red
    {
        color: #c75d57;

        margin-bottom: 10px;
    }


    .desc
    {
        line-height: 160%;

        margin-bottom: 30px;
    }


    .form
    {
        width: 300px;
        max-width: 100%;
    }


    .form .line
    {
        margin-bottom: 10px;
    }


    .form .input
    {
        height: 34px;
    }


    .form .api_key_help_btn
    {
        color: #49aa4f;

        position: absolute;
        top: 50%;
        left: 100%;
display: block;
        margin-left: 20px;

        transform: translateY(-50%);
        white-space: nowrap;

        text-decoration-line: underline;
    }


    .form .submit_btn
    {
        height: 34px;
    }

</style>