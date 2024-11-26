<script setup>
    import {useRoute} from 'vue-router'
    import data from '@/assets/data.json'


</script>

<template>
    <h1>Brazil</h1>
    <div v-for="(item, index) in data" :key="index">
        
    </div>
</template>