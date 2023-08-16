<template>
    <header>
        <div class="cont row">
            <!-- Logo -->
            <Logo />

            <!-- Menu -->
            <Menu v-if="store.user.isAuth" />

            <!-- Auth menu -->
            <AuthMenu v-if="!store.user.isAuth" />

            <!-- User -->
            <User v-if="store.user.isAuth" />
        </div>
    </header>
</template>


<script setup>
    import { useGlobalStore } from '@/stores'

    // Components
    import Logo from '@/components/header/Logo.vue'
    import Menu from '@/components/header/Menu.vue'
    import AuthMenu from '@/components/header/AuthMenu.vue'
    import User from '@/components/header/User.vue'


    const store = useGlobalStore()
</script>


<style scoped>
    header
    {
        margin-bottom: 50px;

        background: #1e2c3a;
    }


    header .cont
    {
        max-width: none;
        padding: 0 30px;

        justify-content: space-between;
        align-items: center;
        align-content: center;
    }

</style>