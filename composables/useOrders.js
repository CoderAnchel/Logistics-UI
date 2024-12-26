export function getOrders() {
    const orders = ref([]);
    const error = ref(null);
    const loading = ref(false);

    const { data, pending, error: fetchError } = useFetch("http://localhost:8080/orders/all");

    if (pending.value) {
        loading.value = true;
    }

    if (fetchError.value) {
        error.value = fetchError.value;
    }

    if (data.value) {
        orders.value = data.value;
    }

    return { orders, error, loading };
}
