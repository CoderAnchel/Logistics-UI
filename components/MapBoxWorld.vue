<template>
  <div>
    <div id="map" class="map"></div>
  </div>
</template>
<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import { getCenters } from "#build/imports";
import mapboxgl from "mapbox-gl";

// Access the token from environment variables
const MAPBOX_TOKEN = "pk.eyJ1IjoiYW5jaGVsY29kZSIsImEiOiJjbTRiNXZ6ZXkwMDhzMmtzOXgwd3liZXZ3In0._4-k_VvuIMfs1mmKbhqHyg";

// Reference to the map
const map = ref(null);

// Array to store markers
const markers = ref([]);

// Function to add a marker to the map
const addMarker = (airport) => {
  if (!airport) return; // If no airport, do not add marker
  const marker = new mapboxgl.Marker()
    .setLngLat([airport.longitud, airport.latitud])
    .addTo(map.value);
  markers.value.push(marker);
};

// Function to remove all markers from the map
const removeMarkers = () => {
  markers.value.forEach((marker) => marker.remove());
  markers.value = [];
};

// Function to add a line between two airports
const addLine = (from, to) => {
  if (!from || !to) return; // If either airport is missing, do not add line

  const lineData = {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [
        [from.longitud, from.latitud],
        [to.longitud, to.latitud],
      ],
    },
  };

  if (map.value.getSource("route")) {
    map.value.getSource("route").setData(lineData);
  } else {
    map.value.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: lineData,
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#e03131",
        "line-width": 3,
      },
    });
  }
};

onMounted(() => {
  mapboxgl.accessToken = MAPBOX_TOKEN;

  // Initialize the map
  map.value = new mapboxgl.Map({
    container: "map", // ID of the div where the map will be rendered
    style: "mapbox://styles/anchelcode/cm4ogjbyv006d01r0djcw4pas", // Map style
    center: [0, 0], // Initial coordinates [longitude, latitude]
    zoom: 1, // Initial zoom level
  });

  addMarker({ longitud: -3.7038, latitud: 40.4168 });

});

onBeforeUnmount(() => {
  removeMarkers();
  if (map.value) {
    map.value.remove();
  }
});
</script>

  <style>
.map {
  width: 100%;
  height: 500px;
}
</style>
