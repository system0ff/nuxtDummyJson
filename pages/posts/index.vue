<template>
  <div class="container mx-auto p-4">

    <Paginator :rows="pageState.rows" :totalRecords="totalRecords"
      template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" @page="paginationEvent" />

    <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3">
      <div v-for="post in posts" :key="post.id" class="bg-white p-4 my-2 ml-4 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-gray-800 min-h-14 mb-5"># {{ post.title }}</h3>
        <p class="text-sm text-gray-600 mt-2">
          <Button :label="`likes`" size="small" rounded :badge="`${post.reactions.likes}`" icon="pi pi-thumbs-up-fill"/>
          <Button :label="`dislikes`" size="small" rounded :badge="`${post.reactions.dislikes}`" class="ml-2" icon="pi pi-thumbs-down-fill" severity="danger" />
        </p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import type { PageState } from 'primevue/paginator'
import type { PaginatedPosts } from '~/shared/types/post/paginatedPosts'
import type { Post } from '~/shared/types/post/post'

const posts = ref<Post[]>([])
const totalRecords = ref(0)
const pageState = ref<PageState>({
  first: 0,
  page: 1,
  rows: 12
})

onMounted(async () => {
  await getPosts(pageState.value.rows, pageState.value.first)
})

const paginationEvent = async (event: PageState) => {
  pageState.value = event
  await getPosts(pageState.value.rows, pageState.value.first)
}

const getPosts = async (limit: number, skip: number) => {
  try {
    const response = await $fetch<PaginatedPosts>(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}&select=title,reactions`)
    if (!response) {
      throw new Error('Failed to fetch posts')
    }

    posts.value = response.posts
    totalRecords.value = response.total

  } catch (err) {
    console.log({
      err
    })
  }
}

</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>