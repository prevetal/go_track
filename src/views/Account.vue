<template>
    <section class="account">
        <div class="cont">
            <div class="page_title">
                {{ $t('message.account_page_title') }}
            </div>

            <div class="row">
                <!-- Personal -->
                <Personal />

                <!-- Shop -->
                <Shop />

                <!-- Subscriptions -->
                <Subscriptions />
            </div>
        </div>
    </section>
</template>


<script setup>
    // Components
    import Personal from '@/components/account/Personal.vue'
    import Shop from '@/components/account/Shop.vue'
    import Subscriptions from '@/components/account/Subscriptions.vue'
</script>


<style scoped>
    .page_title
    {
        font-size: 28px;
        font-weight: 500;

        margin-bottom: 30px;
    }


    .row
    {
        margin-bottom: -20px;
        margin-left: -20px;

        align-items: stretch;
        align-content: stretch;
    }

    .row > *
    {
        width: calc(50% - 20px);
        margin-bottom: 20px;
        margin-left: 20px;
    }

</style>