<script setup lang="ts">
let route = useRoute()
// console.log('route', route.meta)

useHead({
  title: route.meta.title,
})
</script>
<template>
  <div class="container mx-auto">
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
