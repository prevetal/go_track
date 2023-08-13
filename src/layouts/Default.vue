<template>
    <div class="main">
        <!-- Header -->
        <Header />

        <!-- Router view -->
        <RouterView />
    </div>

    <!-- AddingToDelivery modal -->
    <AddingToDelivery v-if="store.showAddingToDeliveryModal" />

    <!-- RemovingFromDelivery modal -->
    <RemovingFromDelivery v-if="store.showRemovingFromDeliveryModal" />

    <!-- AddingAllToDelivery modal -->
    <AddingAllToDelivery v-if="store.showAddingAllToDeliveryModal" />

    <!-- CreatingDelivery modal -->
    <CreatingDelivery v-if="store.showCreatingDeliveryModal" />
</template>


<script setup>
    import { inject } from 'vue'
    import { useGlobalStore } from '@/stores'

    // Components
    import Header from '@/components/Header.vue'
    import AddingToDelivery from '@/components/modal/AddingToDelivery.vue'
    import RemovingFromDelivery from '@/components/modal/RemovingFromDelivery.vue'
    import AddingAllToDelivery from '@/components/modal/AddingAllToDelivery.vue'
    import CreatingDelivery from '@/components/modal/CreatingDelivery.vue'


    const store = useGlobalStore(),
        emitter = inject('emitter')


    // Event "openAddingToDeliveryModal"
    emitter.on('openAddingToDeliveryModal', () => {
        store.showAddingToDeliveryModal = true
    })


    // Event "closeAddingToDeliveryModal"
    emitter.on('closeAddingToDeliveryModal', () => {
        store.showAddingToDeliveryModal = false
    })


    // Event "openRemovingFromDeliveryModal"
    emitter.on('openRemovingFromDeliveryModal', () => {
        store.showRemovingFromDeliveryModal = true
    })


    // Event "closeRemovingFromDeliveryModal"
    emitter.on('closeRemovingFromDeliveryModal', () => {
        store.showRemovingFromDeliveryModal = false
    })


    // Event "openAddingAllToDeliveryModal"
    emitter.on('openAddingAllToDeliveryModal', () => {
        store.showAddingAllToDeliveryModal = true
    })


    // Event "closeAddingAllToDeliveryModal"
    emitter.on('closeAddingAllToDeliveryModal', () => {
        store.showAddingAllToDeliveryModal = false
    })


    // Event "openCreatingDeliveryModal"
    emitter.on('openCreatingDeliveryModal', () => {
        store.showCreatingDeliveryModal = true
    })


    // Event "closeCreatingDeliveryModal"
    emitter.on('closeCreatingDeliveryModal', () => {
        store.showCreatingDeliveryModal = false
    })
</script>
