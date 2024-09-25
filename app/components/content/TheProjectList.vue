<script setup lang="ts">
const { data, pending, error } = await useFetch(
  'https://api.github.com/users/alexknight78/repos'
)

const repos = computed(() => data.value.sort((a, b) => b.id - a.id))
</script>
<template>
  <div class="not-prose">
    <section v-if="pending">Is Loading...</section>
    <section v-else-if="error">Is Error...</section>
    <section v-else>Is done...</section>
    <ul>
      <li
        v-for="(repo, index) in data"
        :key="index"
        class="border border-grey-200 rounded-sm mb-1 p-1 ps-2 hover:bg-gray-100"
      >
        <div class="flex items-center justify-between">
          <div>ID: {{ repo.id }}</div>
          <div>
            Link:
            <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
          </div>
          <div>{{ repo.language }}</div>
        </div>
        <p>
          <small>
            {{
              repo.description !== null
                ? repo.description
                : 'Keine Beschreibung vorhanden...'
            }}</small
          >
        </p>
      </li>
    </ul>
  </div>
</template>
