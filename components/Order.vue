<script setup>
    defineProps({
        order: Object
    })

</script>
<template>
    <div>
        <div class="order">
            <div class="content">
                <div class="row">
                    <div class="title-wrapper">
                        <h3><img src="public/parcel_rgb_red.svg" alt=""> N: {{ order.id }}</h3>
                    </div>
                    <div class="row-light">
                        <span style="font-weight: bold;" class="title">Status:</span>
                        <span v-if="order.status =='Asigned'" style="color: #006443; font-weight: bold;">  {{ order.status }}</span>
                        <span v-else style="color: #f08c00; font-weight: bold;">  {{ order.status }}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="row-light small">
                        <span class="title">Type:</span>
                        <span style="color: #f08c00; font-weight: bold;">  {{ order.size  }}</span>
                    </div>
                    <div class="row-light espec">
                        <span class="title">Position:</span>
                        <span v-if="order.asignedCenter" style="font-weight: bold;">  {{ order.asignedCenter.name }}</span>
                        <span v-else style="font-weight: bold;">  Not Asigned</span>
                    </div>
                </div>
                <div class="row">
                    <div class="row" style="justify-content: space-between;  width: 100%;">
                        <span class="title">Operation Type:</span>
                        <span style=" font-weight: bold;">  Delivery</span>
                    </div>
                </div>
            </div>
            <button class="buttons">Details</button>
    </div>
    </div>
</template>
<style scoped>
    .bar {
        width: 100%;
        height: 1px;
        background: #000000;
        margin-bottom: 20px;
    }

    .espec {
        width: 180px !important;
    }

    .small {
        width: 80px !important;
    }

    .order {
        display: flex;
        width: 100%;
        margin-bottom: 30px;
        flex-direction: column;
    }

    .content {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ffcc00;
        color: white;
        border: none;
        height: 30px;
        margin-top: 10px;
        border: 1px solid #000000;
        color: #000000;
        font-weight: bold;
    }

    .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 5px;
    }

    .row-light {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 120px;
    }

    .title-wrapper {
        display: flex;
        align-items: center;
    }

    .title-wrapper h3 {
        font-size: 20px;
        display: flex;
        align-items: center;
        font-weight: 600;
        position: relative;
    }

    .title-wrapper img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }
</style>
