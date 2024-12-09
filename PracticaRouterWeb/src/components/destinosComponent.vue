<script setup>
    import {useRoute} from 'vue-router'
    import {ref, watch} from 'vue'
    import data from '@/assets/data.json'
    
    const imgPath = '/images/';

    const route= useRoute();
    
    const id = ref(route.params.id - 1);

    watch(
        () => route.params.id,
        (newId) => {
            id.value = newId - 1
        }
    )

</script>

<template>
    <button>
        <RouterLink to="/">Return to home</RouterLink>
    </button>
    
    <h1>{{ data.destinations[id].name }}</h1>
    
    <div class="destination-details">
        <img :src="imgPath + data.destinations[id].image" :alt="data.destinations[id].image">
        <p>{{ data.destinations[id].description }}</p>
    </div>

    <div class="experiences">
        <h2>Top experiences in {{ data.destinations[id].name }}</h2>
        <div class="cards">
            <div class="card" v-for="(experience, index) in data.destinations[id].experiences" :key="index">
                <img :src="imgPath + experience.image">
                <div>
                    <RouterLink :to="`/Todos/${route.params.id}/experiences/${experience.slug}`">
                        <span class="card__text">{{ experience.name }}</span>
                    </RouterLink> 
                </div>
            </div>
        </div>
    </div>
</template>