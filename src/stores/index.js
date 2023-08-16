import { defineStore } from 'pinia'


export const useGlobalStore = defineStore('global', {
    state: () => ({
        user: {
            isAuth: true
        },

        showAddingToDeliveryModal: false,
        showRemovingFromDeliveryModal: false,
        showAddingAllToDeliveryModal: false,
        showCreatingDeliveryModal: false,
        showRemovingDeliveryModal: false,
        showEditingDeliveryModal: false,
        showAPIKeyHelpModal: false
    }),


    actions: {

    }
})
