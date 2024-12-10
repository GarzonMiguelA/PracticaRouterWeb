<script setup>
import { useRoute } from 'vue-router';
import data from '@/assets/data.json';

const route = useRoute(); // Obtenemos ruta actual

// Obtenemos ID de destino y slug de la experiencia desde la URL
const destinationId = parseInt(route.params.id) - 1;
const experienceSlug = route.params.experienceSlug;

// Buscamos experiencia correspondiente en el JSON
const experience = data.destinations[destinationId].experiences.find(
    (exp) => exp.slug === experienceSlug
);
</script>

<template>
    <div>
        <button>
            <RouterLink :to="`/Todos/${route.params.id}`">Volver a experiencias</RouterLink><!-- Creamos la ruta para volver hacia destinos -->
        </button>
        <!-- Por ultimo mostramos toda la info (h1, img y p:) -->
        <h1>{{ experience.name }}</h1>
        <div>
            <img :src="`/images/${experience.image}`" alt="Imagen de {{ experience.name }}">
            <p>{{ experience.description }}</p>
        </div>
    </div>
</template>
