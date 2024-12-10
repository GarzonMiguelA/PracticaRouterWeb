<script setup>
    import {useRoute} from 'vue-router'
    import {ref, watch} from 'vue'
    import data from '@/assets/data.json'
    
    //Nos guardamos el path de las imagenes, para evitar errores:
    const imgPath = '/images/';

    const route= useRoute(); //Obtenemos objeto de la ruta actual (URL)
    
    const id = ref(route.params.id - 1); // Cojo valor de 'id' de la URL para guardarlo en una var reactiva y evitar escribir 'route.params.id' cada vez, substituyendolo por id directamente

    //Utilizo watch para ver cambios en el id de la ruta y actualizo la var id:
    watch(
        () => route.params.id,
        (newId) => {
            id.value = newId - 1
        }
    )
</script>

<template>
    <button>
        <RouterLink to="/">Volver a la home</RouterLink> <!-- Creamos la ruta para volver hacia la home -->
    </button>
    
    <!-- Por ultimo vamos mostrando todo poco a poco: -->
     <!-- Podemos ver que gracias a la var reactiva anterior me evito escribir route.params.id - 1, a su vez llam oa [id] -->
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
                    <!-- Por ultimo en el routerlink configuramos ruta para entrar en cada experiencia -->
                    <RouterLink :to="`/Todos/${route.params.id}/experiences/${experience.slug}`"> 
                        <span class="card__text">{{ experience.name }}</span>
                    </RouterLink> 
                    <!-- Una vez acabado todo el componente podemos dar paso a experiencesComponent -->
                </div>
            </div>
        </div>
    </div>
</template>

