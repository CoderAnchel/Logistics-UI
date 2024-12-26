<script setup>

</script>
<template>
    <div class="content">
        <div class="title">
            <h1>CREATE CENTER</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel rem facilis ipsa iure alias, amet nam iste deserunt voluptatibus asperiores magnam fugiat quos laboriosam perspiciatis labore voluptates commodi error consectetur.</p>
        </div>
        <div class="title">
            <div>
                <h2>NAME</h2>
            </div>
            <!-- <div class="bar">

            </div> -->
            <input class="input" type="text">
        </div>
    </div>
</template>
<style scoped>
    .content {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .content h1 {
        font-size: 40px;
        font-weight: 600;
        margin-top: 50px;
        margin-left: 40px;
        color: #D40511;
    }

    .content p {
        font-size: 17px;
        margin-left: 40px;
        margin-right: 40px;
        color: #000000;
        line-height: 1.6;
    }

    .title {
        width: 70%;
    }

    .title h2 {
        font-size: 27px;
        font-weight: 600;
        margin-left: 40px;
        color: #D40511;
        margin-bottom: 5px;
    }

    .bar {
        width: 100%;
        height: 2px;
        background: #D40511;
        margin-left: 40px;
    }

    .input {
        width: 98%;
        margin-top: 10px;
        margin-left: 40px;
        border: 1px solid #393636;
        border-radius: 5px;
        padding: 10px;
        font-size: 17px;
    }
</style>
