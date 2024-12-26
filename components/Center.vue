<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  center: Object
});
let currentLoad = (props.center.currentLoad /props.center.maxCapacity)* 100;
let barPercentage = (100 - currentLoad) + '%';
const barColor = computed(() => {
  if (currentLoad > 90) {
    return '#D40511'; // Red
  } else if (currentLoad > 70) {
    return '#f08c00'; // Orange
  } else {
    return '#006443'; // Green
  }
});
</script>
<template>
    <div class="center">
        <div class="center-content">
            <div class="title-wrapper">
                <h1><img src="public/warehouse_rgb_red.svg" alt=""> {{ center.name }}</h1>
            </div>
            <div class="rows">
                <span class="title">Status:</span>
                <span style="color: #006443; font-weight: bold;">  {{ center.status }}</span>
            </div>
            <div class="rows">
                <span class="title">Type:</span>
                <span style="color: #f08c00; font-weight: bold ;">  {{ center.capacity }}</span>
            </div>
            <button class="buttons">Details</button>
        </div>
        <div :style="{background: barColor}" class="prueba">
            <div :style="{ height: barPercentage }" class="porcentaje">

            </div>
        </div>
    </div>
</template>
<style scoped>
    .center {
        border: 1px solid #000000;
        width: 250px;
        margin: 10px;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        height: 170px;
    }

    .center-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }

    .title-wrapper {
        display: flex;
    }

    .title-wrapper h1 {
        font-size: 20px;
        display: flex;
        align-items: center;
        font-weight: 600;
    }

    .title-wrapper img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }

    .rows {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .buttons {
        background: #FFCC00;
        border: none;
        width: 100%;
        padding: 5px;
        font-weight: bold;
        border: 1px solid #000000;
    }

    .buttons:hover {
        background: #D40511;
        color: #ffffff;
        border: 1px solid #D40511;
        transition: all 0.2s;
        cursor: pointer;
    }

    .title {
        font-weight: bold;
    }


    .prueba {
        background: #006443;
        width: 10%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        border: 1px solid #000000;
    }

    .porcentaje {
        background: #ffffff;
        width: 100%;
        height: 20%;
    }

</style>
