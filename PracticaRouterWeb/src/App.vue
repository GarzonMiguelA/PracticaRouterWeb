<script setup>
import { RouterLink, RouterView } from 'vue-router'
import data from '@/assets/data.json'
import './assets/main.css'

</script>

<template>
    <nav id="nav">
        <ul>
            <RouterLink to="/">Home</RouterLink>     
            <RouterLink v-for="(country, index) in data.destinations" :key="index" :to="'/Todos/'+country.id">
                {{ country.name }}
            </RouterLink>
        </ul>
    </nav>

    <div class="container">
        <RouterView/>
    </div>


</template>

