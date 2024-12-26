import { defineStore } from "pinia";

export const useCreateCenterStore = defineStore({
    id: "center",
    state: () => ({
        name: null,
        status: null,
        capacity: null,
        maxCapacity: null,
        currentLoad: null,
        coordinates: {
            latitude: null,
            longitude: null
        }
    }),
})
