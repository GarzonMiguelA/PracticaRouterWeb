<script setup>
import { RouterLink, RouterView } from 'vue-router'
import data from '@/assets/data.json'
import './assets/main.css'

</script>

<template>
    <header>
        <nav id="nav">
        <ul>
            <!-- En ete caso marcamos con dos routerLink, uno para la home -->
             <!-- El siguiente router link hacemos uso de for para mostrar todos los nombres en el nav -->
            <RouterLink to="/">Home</RouterLink>     
            <RouterLink v-for="(country, index) in data.destinations" :key="index" :to="'/Todos/'+country.id">
                {{ country.name }}
            </RouterLink>
        </ul>
    </nav>
    </header>
    

    <div class="container">
        <!-- Por ultimo mostramos: -->
        <RouterView/>
    </div>

    
</template>

