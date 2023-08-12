<template>
    <form action="" class="search">
        <input type="text" name="" value="" class="input" :placeholder="$t('message.search_placeholder')">
    </form>
</template>


<style scoped>
    .search
    {
        width: 360px;
        max-width: 100%;
    }


    .search ::-webkit-input-placeholder
    {
        color: #808080;
    }

    .search :-moz-placeholder
    {
        color: #808080;
    }

    .search ::-moz-placeholder
    {
        color: #808080;

        opacity: 1;
    }

    .search :-ms-input-placeholder
    {
        color: #808080;
    }


    .search .input
    {
        color: var(--text_color);
        font-family: var(--font_family);
        font-size: var(--font_size);

        display: block;

        width: 100%;
        height: 34px;
        padding: 0 14px;

        border: 1px solid #dbe0e4;
        border-radius: 100px;
    }

</style>