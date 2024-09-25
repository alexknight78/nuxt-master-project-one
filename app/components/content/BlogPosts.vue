<script setup>
const { data } = await useAsyncData('blog-list', () =>
  queryContent('/blog')
    .where({ _path: { $ne: '/blog' } })
    .only(['_path', 'title', 'publishAdd'])
    .sort({ publishAdd: -1 })
    .find()
)
const posts = computed(() => {
  if (!data.value) {
    return []
  }

  const result = []
  let lastYear = null

  for (const post of data.value) {
    const year = new Date(post.publishAdd).getFullYear()
    const yearShow = year !== lastYear
    // console.log(year)

    lastYear = year

    result.push({ year, yearShow, ...post })
  }
  // const groups = data.value.reduce((groups, post) => {
  //   const year = new Date(post.publishAdd).getFullYear()
  //   if (!groups[year]) {
  //     groups[year] = []
  //   }
  //   groups[year].push(post)
  //   return groups
  // }, {})

  return result
})
</script>
<template>
  <section class="not-prose font-mono">
    <div class="column text-gray-400 text-sm">
      <div>date</div>
      <div>title</div>
    </div>
    <!-- <pre>{{ posts }}</pre> -->
    <ul>
      <li v-for="post in posts" :key="post._path">
        <NuxtLink
          :to="post._path"
          class="column hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div class="text-gray-500 w-8">
            {{ post.yearShow ? post.year : ' ' }}
          </div>
          <div>{{ post.title }}</div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style>
.column {
  @apply flex items-center space-x-8 p-2 border-b;
}
</style>
