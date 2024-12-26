<script setup>
import { getCenters } from "#build/imports";
const centers = ref(getCenters());
</script>
<template>
    <MapBoxWorld :centers="centers" />
</template>
