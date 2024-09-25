<script setup>
const colorMode = useColorMode()

const mode = ['light', 'dark']

const modeNext = computed(() => {
  const modeCurrent = mode.indexOf(colorMode.value)
  let modeNextIndex = modeCurrent + 1
  return modeNextIndex === mode.length ? (modeNextIndex = 0) : modeNextIndex
})
</script>
<template>
  <div>
    <button @click="colorMode.value = mode[modeNext]">
      {{ mode[modeNext] }}
    </button>
  </div>
</template>

<style>
.dark-mode body {
  background-color: #222;
  color: #cacaca;
}
.light-mode body {
  background-color: #fff;
  color: #222;
}
</style>
