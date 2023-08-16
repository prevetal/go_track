<template>
    <div class="block">
        <div class="title">
            {{ $t('message.account_subscriptions_title') }}
        </div>

        <div class="desc">
            {{ $t('message.account_subscriptions_desc') }}
        </div>
    </div>
</template>


<script setup>

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


    .desc
    {
        color: #808080;
        font-style: italic;
        line-height: 160%;

        width: 407px;
        max-width: 100%;
    }

</style>