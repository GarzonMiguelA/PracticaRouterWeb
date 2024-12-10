<script setup>
  import DestinosComponent from '@/components/destinosComponent.vue';
</script>

<template>
  <div>
    <DestinosComponent /><!-- Llamamos al componente para mostrar todos los destinos -->
    <RouterView/><!-- Importante llamar cuando se acabe componente a router-view, ya que si no, nos quedamos sin poder ver destinos -->
  </div>
</template>