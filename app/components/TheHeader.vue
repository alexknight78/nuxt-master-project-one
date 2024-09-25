<template>
  <header class="flex justify-between items-center my-5">
    <div class="flex items-center space-x-10">
      <div class="">
        <NuxtLink to="/" class="font-semibold">Alex Knight</NuxtLink>
      </div>
      <TheNavTop />
    </div>
    <div>
      <ClientOnly><TheColorMode /></ClientOnly>
    </div>
  </header>
</template>
