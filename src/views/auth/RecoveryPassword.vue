<template>
    <section class="auth">
        <div class="recovery_pass">
            <div class="title">
                {{ $t('message.recovery_password_page_title') }}
            </div>

            <div class="desc">
                {{ $t('message.recovery_password_desc') }}
            </div>

            <form class="form">
                <div class="line">
                    <div class="field">
                        <input type="text" name="" value="" class="input" :placeholder="$t('message.form_placeholder_email')">
                    </div>
                </div>

                <div class="submit">
                    <button type="button" class="submit_btn">
                        {{ $t('message.btn_recovery_pass') }}
                    </button>
                </div>
            </form>


            <div class="links">
                <div><router-link to="/login">
                    {{ $t('message.btn_enter') }}
                </router-link></div>

                <div><router-link to="/register">
                    {{ $t('message.btn_registration') }}
                </router-link></div>
            </div>
        </div>
    </section>
</template>


<script setup>

</script>


<style scoped>
    .recovery_pass
    {
        width: 426px;
        max-width: 100%;
        margin-right: auto;
        margin-left: auto;
    }

</style>