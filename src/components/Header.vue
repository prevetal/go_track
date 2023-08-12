<template>
    <header>
        <div class="cont row">
            <!-- Logo -->
            <Logo />

            <!-- Menu -->
            <Menu />

            <!-- User -->
            <User />
        </div>
    </header>
</template>


<script setup>
    // Components
    import Logo from '@/components/header/Logo.vue'
    import Menu from '@/components/header/Menu.vue'
    import User from '@/components/header/User.vue'
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