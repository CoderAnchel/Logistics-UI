<script setup>
    console.log("Good Morning Vietnam!!")
</script>
<template>
    <nav class="navbar">
        <div class="logo-wrapper">
            <img src="public/dhl-logo.svg" alt="">
        </div>
        <div class="options">
            <button>DHL Logistic Hub</button>
            <ul>
                <li>EN</li>
                <li>ES</li>
            </ul>
            <button class="log-button">Create Order</button>
            <button style="margin-left: 10px;" class="log-button">Create Center</button>
        </div>
    </nav>
</template>
<style scoped>
.navbar {
        display: flex;
        align-items: center;
        background: linear-gradient(to right, #FFCC00 60%, #FDF0B0);
        height: 60px;
        width: 100%;
        justify-content: space-between;
    }

    .logo-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
    }

    .options {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: 40px;
    }

    .options button {
        background: none;
        height: 25px;
        border: none;
        font-weight: bold;
    }

    .options ul {
        display: flex !important;
        list-style: none;
        justify-content: center !important;
        margin-right: 30px;
    }

    .options ul li{
        margin-left: 10px;
    }

    .log-button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ffffff, opacity 60.0%;
        color: #d40511;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        border: 1px solid #d40511 !important;
        padding: 10px;
        height: 30px !important;
    }
</style>
