<template>
    <div class="user">
        <div class="avatar">
            <img src="@/assets/user_avatar.png" alt="">
        </div>

        <svg class="arr"><use xlink:href="@/assets/sprite.svg#ic_arr_ver"></use></svg>
    </div>
</template>


<script setup>

</script>


<style scoped>
    .user
    {
        display: flex;

        margin-left: auto;

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

</style>