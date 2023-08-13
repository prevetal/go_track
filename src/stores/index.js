import { defineStore } from 'pinia'


export const useGlobalStore = defineStore('global', {
    state: () => ({
        showAddingToDeliveryModal: false,
        showRemovingFromDeliveryModal: false,
        showAddingAllToDeliveryModal: false,
        showCreatingDeliveryModal: false
    }),


    actions: {

    }
})
