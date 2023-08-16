<template>
    <div class="main">
        <!-- Header -->
        <Header />

        <!-- Router view -->
        <RouterView />
    </div>

    <!-- APIKeyHelp modal -->
    <APIKeyHelp v-if="store.showAPIKeyHelpModal" />
</template>


<script setup>
    import { inject } from 'vue'
    import { useGlobalStore } from '@/stores'

    // Components
    import Header from '@/components/Header.vue'
    import APIKeyHelp from '@/components/modal/APIKeyHelp.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter')


    // Event "openAPIKeyHelpModal"
    emitter.on('openAPIKeyHelpModal', () => {
        store.showAPIKeyHelpModal = true
    })


    // Event "closeAPIKeyHelpModal"
    emitter.on('closeAPIKeyHelpModal', () => {
        store.showAPIKeyHelpModal = false
    })
</script>


<style>
    .auth
    {
        padding: 100px 0;
    }


    .auth .title
    {
        font-size: 24px;
        font-weight: 600;

        text-align: center;
    }


    .auth .desc
    {
        margin-top: 20px;

        text-align: center;
    }


    .auth .form
    {
        margin-top: 30px;
    }



    .auth .links
    {
        color: #49aa4f;
        font-weight: 600;

        display: flex;

        margin-top: 15px;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .auth .links > * + *
    {
        margin-left: auto;
    }


    .auth .links a
    {
        color: currentColor;

        text-decoration: none;
    }



    .auth .or
    {
        color: #808080;

        overflow: hidden;

        margin-top: 30px;

        text-align: center;
    }


    .auth .or span
    {
        position: relative;

        display: inline-block;

        vertical-align: top;
    }

    .auth .or span:before,
    .auth .or span:after
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

    .auth .or span:after
    {
        right: auto;
        left: 100%;

        margin-right: auto;
        margin-left: 20px;
    }



    .auth .socials
    {
        margin-top: 20px;
    }


    .auth .socials .btn
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

    .auth .socials .btn .icon
    {
        display: block;

        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    .auth .socials .ya_btn .icon
    {
        color: #fc3f1d;
    }



    .auth .agree
    {
        color: #808080;
        font-size: 12px;
        line-height: 180%;

        margin-top: 50px;

        text-align: center;
    }


    .auth .agree a
    {
        color: currentColor;
    }

</style>
