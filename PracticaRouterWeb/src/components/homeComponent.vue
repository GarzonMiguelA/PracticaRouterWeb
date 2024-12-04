<script setup>
    import {useRoute} from 'vue-router'
    import data from '@/assets/data.json'
    
    const imgPath = 'images/';
</script>

<template>
    <div class="home">
        <h1> All destinations </h1>
        <div class="destinations">
            <ul v-for="(country, index) in data.destinations" :key="index">
                <RouterLink :to="'/Todos/' + country.id">
                    <h2>{{ country.name }}</h2>
                </RouterLink>
                <img :src="imgPath + country.image" alt="Imagen {{ country.name }}">
            </ul>
        </div>
    </div>

</template>
