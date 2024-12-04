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
    <!-- <div class="experiences">
        <h2>Top experiences in {{ data.destinations[id].name }}</h2>
        <div class="cards">
            <div class="card" v-for="(experience, index) in data.destinations[id].experiences" :key = "index">
                <img :src="imgPath + experience.image">
                <div class="card__text">
                    <p>{{ experience.name }}</p>


                <!--<RouterLink v-for="(experience, index) in data.destinations[id].experiences" :key="index" :to="'/Todos/'+experience.">
                        {{ experience.name }}
                    </RouterLink> 
                </div>
            </div>
        </div>
    </div> -->

    <h3>HOLA</h3>
</template>
