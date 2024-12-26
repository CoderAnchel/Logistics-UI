<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import mapboxgl from "mapbox-gl";
import { getOrders } from "#build/imports";
import { getCenters } from "#build/imports";

useHead({
  title: "Dashboard",
  meta: [
    {
      name: "description",
      content: "Dashboard page",
      icon: "public/carbon_dashboard_rgb_red.svg",
    }
  ],
});

// Access the token from environment variables
const MAPBOX_TOKEN = useRuntimeConfig().public.mapboxToken;

// Reference to the map
const map = ref(null);

const orders = ref(getOrders());

console.log(orders);

const centers = ref(getCenters());
const currentIndex = ref(0);
const itemsPerPage = 4;

console.log(centers);

const visibleCenters = computed(() => {
  return centers.value.slice(currentIndex.value, currentIndex.value + itemsPerPage);
});

const next = () => {
  if (currentIndex.value + itemsPerPage < centers.value.length) {
    currentIndex.value += itemsPerPage;
  }
};

const prev = () => {
  if (currentIndex.value - itemsPerPage >= 0) {
    currentIndex.value -= itemsPerPage;
  }
};

const markers = ref([]);

// Function to add a marker to the map
const addMarker = (center) => {
  if (!center) return; // If no center, do not add marker
  const marker = new mapboxgl.Marker()
    .setLngLat({ lng: center.coordinates.longitude, lat: center.coordinates.latitude })
    .addTo(map.value);
  markers.value.push(marker);
};

// Function to remove all markers from the map
const removeMarkers = () => {
  markers.value.forEach((marker) => marker.remove());
  markers.value = [];
};

onMounted(async () => {
  mapboxgl.accessToken = "pk.eyJ1IjoiYW5jaGVsY29kZSIsImEiOiJjbTRiNXZ6ZXkwMDhzMmtzOXgwd3liZXZ3In0._4-k_VvuIMfs1mmKbhqHyg";

  // Initialize the map
  map.value = new mapboxgl.Map({
    container: "map", // ID of the div where the map will be rendered
    style: "mapbox://styles/mapbox/streets-v10", // Map style
    center: [0, 0], // Initial coordinates [longitude, latitude]
    zoom: 1, // Initial zoom level
  });

  // Add markers for each center
  centers.value.forEach((center) => addMarker(center));

});

onBeforeUnmount(() => {
  removeMarkers();
  if (map.value) {
    map.value.remove();
  }
});
</script>
<template>
    <div class="wrapper">
        <div class="carrousel">
            <img class="passer" @click="prev" src="public/arrow_back_ios_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="">
            <div v-for="center in visibleCenters" :key="center.id">
                <Center :center="center"/>
            </div>
            <img class="passer" @click="next" src="public/arrow_forward_ios_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="">
        </div>
        <div class="content">
            <div class="bar">
                <h2>On-Going Operations</h2>
                <div v-for="order in orders.orders" :key="order.id">
                    <Order :order="order"/>
                </div>
            </div>
            <div class="map-wrapper">
                <div id="map" class="map"></div>
            </div>
            <!-- <MapBoxWorld/> -->
        </div>
    </div>
</template>
<style scoped>
.passer:hover {
  cursor: pointer;
}

.map-wrapper {
  width: 75%;
  height: 100% !important;
  position: relative; /* Asegura que el contenedor sea relativo */
  overflow: hidden; /* Evita que los marcadores "salgan" del mapa */
}

.map {
  width: 100%;
  height: 100%; /* Cambiar de 95% a 100% para ocupar todo el contenedor */
  position: absolute; /* Asegura que el mapa no se mueva con el scroll */
  top: 0;
  left: 0;
}

.wrapper {
  height: 90vh;
}

.carrousel {
  margin-top: 20px;
  display: flex;
  width: 100%;
  justify-content: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #000000;
}

.content {
  display: flex;
  width: 100%;
  height: 85%;
}

.bar {
  width: 25%;
  height: 100%;
  border-right: 2px solid #000000;
  padding: 20px;
  overflow-y: auto;
}

/* WebKit browsers */
.bar::-webkit-scrollbar {
  width: 12px;
}

.bar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.bar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.bar::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
