<template>
  <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <!-- Icon App -->
      <NuxtLink class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" :to="homeItem.to">
        <i :class="homeItem.icon"></i>
        <span class="ml-3 text-xl">{{ homeItem.label }}</span>
      </NuxtLink>

      <!-- Links -->
      <nav v-if="isAuthenticated" class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <NuxtLink class="mr-5 hover:text-gray-900" v-for="menu in menuItems" :key="menu.id" :to="menu.to">{{
          menu.label }}</NuxtLink>
      </nav>

      <!-- Login / Logout -->
      <div v-if="isAuthenticated">
         <span>| {{ userData?.firstName }}</span> 
         <Button class="ml-2" icon="pi pi-sign-out" aria-label="Logout" @click="logout" size="small" severity="secondary"/>
       </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/store/auth'

const { logoutUser } = useAuthStore()
const { isAuthenticated, userData } = storeToRefs(useAuthStore())
const router = useRouter()

type MenuItem = {
  id: number,
  label: string,
  icon?: string,
  to?: string
}

const homeItem = ref<MenuItem>({
  id: 0, label: "DummyJson App", icon: "pi pi-book", to: "/"
})

const menuItems = ref<MenuItem[]>([
  { id: 1, label: 'posts', to: '/posts' }
])

const logout = () => {
  logoutUser()
  router.push('/login')
}
</script>