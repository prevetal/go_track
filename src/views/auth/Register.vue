<template>
    <section class="auth">
        <div class="register">
            <div class="title">
                {{ $t('message.register_page_title') }}
            </div>

            <form class="form">
                <div class="line">
                    <div class="field">
                        <input type="text" name="" value="" class="input" :placeholder="$t('message.form_placeholder_name')">
                    </div>
                </div>

                <div class="line">
                    <div class="field">
                        <input type="tel" name="" value="" class="input" :placeholder="$t('message.form_placeholder_phone')">
                    </div>
                </div>

                <div class="line">
                    <div class="field">
                        <input type="text" name="" value="" class="input" :placeholder="$t('message.form_placeholder_email')">
                    </div>
                </div>

                <div class="line">
                    <div class="field">
                        <input :type="!showPassword ? 'password' : 'text'" name="" value="" class="input" :placeholder="$t('message.form_placeholder_password')">

                        <button type="button" class="show_btn" @click.prevent="showPassword = !showPassword">
                            <svg class="icon" v-if="showPassword"><use xlink:href="@/assets/sprite.svg#ic_eye"></use></svg>
                            <svg class="icon" v-else><use xlink:href="@/assets/sprite.svg#ic_eye2"></use></svg>
                        </button>
                    </div>
                </div>

                <div class="submit">
                    <button type="button" class="submit_btn">
                        {{ $t('message.btn_register') }}
                    </button>
                </div>
            </form>


            <div class="links">
                <div><router-link to="/login">
                    {{ $t('message.btn_already_have_account') }}
                </router-link></div>
            </div>


            <div class="or">
                <span>{{ $t('message.form_label_or') }}</span>
            </div>


            <div class="socials">
                <button class="btn ya_btn">
                    <svg class="icon"><use xlink:href="@/assets/sprite.svg#ic_ya"></use></svg>
                    <span>{{ $t('message.form_social_auth_ya') }}</span>
                </button>
            </div>


            <div class="agree">
                <span v-html="$t('message.form_agree', { btn: $t('message.btn_register') })"></span>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref } from 'vue'


    const showPassword = ref(false)
</script>


<style scoped>
    .register
    {
        width: 426px;
        max-width: 100%;
        margin-right: auto;
        margin-left: auto;
    }



    .or
    {
        color: #808080;

        overflow: hidden;

        margin-top: 30px;

        text-align: center;
    }


    .or span
    {
        position: relative;

        display: inline-block;

        vertical-align: top;
    }

    .or span:before,
    .or span:after
    {
        position: absolute;
        top: 0;
        right: 100%;
        bottom: 0;

        display: block;

        width: 180px;
        height: 1px;
        margin: auto;
        margin-right: 20px;

        content: '';

        background: #dbe0e4;
    }

    .or span:after
    {
        right: auto;
        left: 100%;

        margin-right: auto;
        margin-left: 20px;
    }



    .socials
    {
        margin-top: 20px;
    }


    .socials .btn
    {
        display: flex;

        width: 100%;
        height: 45px;

        border: 1px solid #dbe0e4;
        border-radius: 4px;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .socials .btn .icon
    {
        display: block;

        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    .socials .ya_btn .icon
    {
        color: #fc3f1d;
    }

</style>