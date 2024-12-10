<script setup>
    import {useRoute} from 'vue-router'
    import data from '@/assets/data.json'
    //Lo mismo que en todos los compoenntes, me guardo el path de las imagenes para evitar errores:
    const imgPath = 'images/';
</script>

<template>
    <div class="home">
        <h1> Destinos </h1>
        <div class="destinations">
            <!-- Utilizamos un for para mostrar todos los destinos y seguidamente sus imagenes -->
             <!-- IMportante utilizar router link para poder dirigirnos dentro de cada destino -->
            <ul v-for="(country, index) in data.destinations" :key="index">
                <RouterLink :to="'/Todos/' + country.id">
                    <h2>{{ country.name }}</h2>
                </RouterLink>
                <img :src="imgPath + country.image" alt="Imagen {{ country.name }}">
                <!-- Acabado este componente podemos pasar a destinosComponent -->
            </ul>
        </div>
    </div>

</template>
