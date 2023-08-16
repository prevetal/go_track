<template>
    <nav class="menu row">
        <div><router-link to="/help" class="link">
            {{ $t('message.menu_link4') }}
        </router-link></div>

        <div v-if="route.path == '/register' || route.path == '/add_shop'"><router-link to="/login" class="link">
            {{ $t('message.menu_link5') }}
        </router-link></div>

        <div v-if="route.path == '/login' || route.path == '/recovery_password'"><router-link to="/register" class="link">
            {{ $t('message.menu_link6') }}
        </router-link></div>
    </nav>
</template>


<script setup>
    import { useRoute } from 'vue-router'

    const route = useRoute()
</script>


<style scoped>
    .menu > * + *
    {
        margin-left: 60px;
    }


    .menu .link
    {
        color: #c0c0c0;
        font-size: 16px;

        position: relative;

        display: block;

        padding: 25px 0;

        transition: .2s linear;
        text-decoration: none;
    }

    .menu .link:after
    {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;

        width: 0;
        height: 3px;
        margin: auto;

        content: '';
        transition: width .3s linear;

        background: #49aa4f;
    }


    .menu .link:hover
    {
        color: #fff;
    }


    .menu .link.active
    {
        color: #fff;
        font-weight: 600;
    }

    .menu .link.active:after
    {
        width: 100%;
    }

</style>