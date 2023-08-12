<template>
    <component :is="layout" />
</template>


<script setup>
    import { computed, onBeforeMount, inject } from 'vue'
    import { useRoute } from 'vue-router'
    import { useTitle } from '@vueuse/core'


    const layout = computed(() => route.meta.layout || 'default-layout'),
        i18n = inject('i18n'),
        route = useRoute(),
        title = useTitle()


    onBeforeMount(() => {
        // Set title
        title.value = i18n.global.t('message.page_title')
    })
</script>