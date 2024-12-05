<script setup>
import { useRoute } from 'vue-router';
import data from '@/assets/data.json';

const route = useRoute();

// Obt el ID del destino y el slug de la experiencia desde la URL
const destinationId = parseInt(route.params.id) - 1;
const experienceSlug = route.params.experienceSlug;

// Busca la experiencia correspondiente en el JSON
const experience = data.destinations[destinationId].experiences.find(
    (exp) => exp.slug === experienceSlug
);
</script>

<template>
    <div>
        <button>
            <RouterLink to="/">Return to home</RouterLink>
        </button>
        <h1>{{ experience.name }}</h1>
        <div class="experience-details">
            <img :src="`/images/${experience.image}`" alt="Imagen de {{ experience.name }}">
            <p>{{ experience.description }}</p>
        </div>
    </div>

    
</template>
