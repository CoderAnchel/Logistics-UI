export function getCenters() {
    const centers = ref([]);
    const error = ref(null);
    const loading = ref(false);

    const { data, pending, error: fetchError } = useFetch("http://localhost:8080/centers");

    if (pending.value) {
        loading.value = true;
    }

    if (fetchError.value) {
        error.value = fetchError.value;
    }

    if (data.value) {
        centers.value = data.value;
    }

    return centers;
}
