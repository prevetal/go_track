<template>
    <div class="block">
        <div class="title">
            {{ $t('message.account_personal_title') }}
        </div>

        <div class="item">
            <div class="label">
                {{ $t('message.account_personal_label_name') }}
            </div>

            <div class="val">Вениамин Константинопольский</div>
        </div>

        <div class="item">
            <div class="label">
                {{ $t('message.account_personal_label_email') }}
            </div>

            <div class="val">sweet_venya@gmail.com</div>
        </div>

        <div class="item">
            <div class="label">
                {{ $t('message.account_personal_label_phone') }}
            </div>

            <div class="val">+7(980)188-32-21</div>
        </div>


        <div class="change_password">
            <form action="" class="form">
                <div class="label">
                    {{ $t('message.account_personal_label_change_pass') }}
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
                    <button type="submit" class="submit_btn">
                        {{ $t('message.btn_change_pass') }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>


<script setup>
    import { ref } from 'vue'


    const showPassword = ref(false)
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


    .item
    {
        display: flex;

        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
    }

    .item + .item
    {
        margin-top: 15px;
    }


    .item .label
    {
        color: #808080;

        margin-right: 4px;
    }


    .change_password
    {
        width: 234px;
        max-width: 100%;
        margin-top: 30px;
    }


    .change_password .label
    {
        color: var(--text_color);
        font-weight: 600;

        margin-bottom: 20px;
    }



    .form .line
    {
        margin-bottom: 10px;
    }


    .form .input
    {
        height: 34px;
    }


    .form .submit_btn
    {
        height: 34px;
    }

</style>