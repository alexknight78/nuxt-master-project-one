<script setup>
defineProps({
  links: Array,
  level: { type: Number, default: 0 },
  activeId: {
    type: String,
    default: null,
  },
})

const route = useRoute()
</script>
<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <nuxt-link
        :to="{ path: route.path, hash: `#${link.id}` }"
        :class="{
          'ml-4': level,
          'font-semibold text-green-400': activeId === link.id,
        }"
        >{{ link.text }}</nuxt-link
      >
      <TocLinks
        :links="link.children"
        :level="level + 1"
        :active-id="activeId"
      />
    </li>
  </ul>
</template>
