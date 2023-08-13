<template>
    <nav class="menu row">
        <div><router-link to="/" class="link" :class="{ active: route.path == '/' }">
            {{ $t('message.menu_link1') }}
        </router-link></div>

        <div><router-link to="/offer_planning" class="link" :class="{ active: route.path == '/offer_planning' }">
            {{ $t('message.menu_link2') }}
        </router-link></div>

        <div><router-link to="/abc_analysis" class="link" :class="{ active: route.path == '/abc_analysis' }">
            {{ $t('message.menu_link3') }}
        </router-link></div>
    </nav>
</template>


<script setup>
    import { useRoute } from 'vue-router'

    const route = useRoute()
</script>


<style scoped>
    .menu
    {
        margin-right: 40px;
    }


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