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

    <!-- RemovingDelivery modal -->
    <RemovingDelivery v-if="store.showRemovingDeliveryModal" />

    <!-- EditingDelivery modal -->
    <EditingDelivery v-if="store.showEditingDeliveryModal" />

    <!-- APIKeyHelp modal -->
    <APIKeyHelp v-if="store.showAPIKeyHelpModal" />
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
    import RemovingDelivery from '@/components/modal/RemovingDelivery.vue'
    import EditingDelivery from '@/components/modal/EditingDelivery.vue'
    import APIKeyHelp from '@/components/modal/APIKeyHelp.vue'


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


    // Event "openRemovingDeliveryModal"
    emitter.on('openRemovingDeliveryModal', () => {
        store.showRemovingDeliveryModal = true
    })


    // Event "closeRemovingDeliveryModal"
    emitter.on('closeRemovingDeliveryModal', () => {
        store.showRemovingDeliveryModal = false
    })


    // Event "openEditingDeliveryModal"
    emitter.on('openEditingDeliveryModal', () => {
        store.showEditingDeliveryModal = true
    })


    // Event "closeEditingDeliveryModal"
    emitter.on('closeEditingDeliveryModal', () => {
        store.showEditingDeliveryModal = false
    })


    // Event "openAPIKeyHelpModal"
    emitter.on('openAPIKeyHelpModal', () => {
        store.showAPIKeyHelpModal = true
    })


    // Event "closeAPIKeyHelpModal"
    emitter.on('closeAPIKeyHelpModal', () => {
        store.showAPIKeyHelpModal = false
    })
</script>
