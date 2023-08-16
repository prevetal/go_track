<template>
    <div class="user" ref="target">
        <div class="current" @click.prevent="showDropdown = !showDropdown">
        <div class="avatar">
            <img src="@/assets/user_avatar.png" alt="">
        </div>

        <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>
        </div>

        <div class="dropdown" v-show="showDropdown">
            <div>
                <router-link to="/account">{{ $t('message.account_link') }}</router-link>
            </div>

            <div>
                <button class="btn logout_btn">{{ $t('message.btn_logout') }}</button>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { ref } from 'vue'
    import { onClickOutside } from '@vueuse/core'


    const showDropdown = ref(false),
        target = ref(null)


    // Сlick element outside
    onClickOutside(target, event => showDropdown.value = false)
</script>


<style scoped>
    .user
    {
        position: relative;

        margin-left: auto;
    }


    .user .current
    {
        display: flex;

        cursor: pointer;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .avatar
    {
        display: flex;

        width: 40px;
        height: 40px;

        border-radius: 50%;
        background: #f5f5f5;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .avatar img
    {
        display: block;

        width: 24px;
        height: 24px;
    }


    .arr
    {
        color: #f5f5f5;

        display: block;

        width: 14px;
        height: 8px;
        margin-left: 10px;
    }


    .dropdown
    {
        position: absolute;
        top: 100%;
        right: 0;

        margin-top: 10px;
        padding: 5px 0;

        border-radius: 4px;
        background: #fff;
        box-shadow: 0 4px 10px 0 rgba(20, 20, 20, .10);
    }


    .dropdown a,
    .dropdown .btn
    {
        color: currentColor;

        display: block;

        width: 100%;
        padding: 10px 15px;

        transition: .2s linear;
        text-align: left;
        white-space: nowrap;
        text-decoration: none;
    }


    .dropdown a:hover,
    .dropdown .btn:hover
    {
        background: #f1f8f1;
    }

</style>