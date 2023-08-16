<template>
    <section class="auth">
        <div class="login">
            <div class="title">
                {{ $t('message.login_page_title') }}
            </div>

            <form class="form">
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
                        {{ $t('message.btn_enter') }}
                    </button>
                </div>
            </form>


            <div class="links">
                <div><router-link to="/register">
                    {{ $t('message.btn_registration') }}
                </router-link></div>

                <div><router-link to="/recovery_password">
                    {{ $t('message.btn_forgot_pass') }}
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
        </div>
    </section>
</template>


<script setup>
    import { ref } from 'vue'


    const showPassword = ref(false)
</script>


<style scoped>
    .login
    {
        width: 426px;
        max-width: 100%;
        margin-right: auto;
        margin-left: auto;
    }
</style>