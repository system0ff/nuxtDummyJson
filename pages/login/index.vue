<template>
  <div
    class="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl ">
    <div class="flex flex-row gap-3 pb-4">
      <!-- Logo -->
      <h1 class="text-xl font-bold text-[#4B5563] my-auto">DummyJson Company</h1>
    </div>
    <!-- Form -->
    <form class="flex flex-col">
      <div class="pb-2">
        <label for="username" class="block mb-2 text-sm  text-[#111827]">Username</label>
        <div class="relative text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
            <span class="pi pi-user"></span>
          </span>
          <input v-model="userLogin.username" type="username" name="username" id="username"
            class="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring-3 ring-transparent focus:ring-1 focus:outline-hidden focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
            placeholder="username" autocomplete="off">
        </div>
      </div>
      <div class="pb-6">
        <label for="password" class="block mb-2 text-sm  text-[#111827]">Password</label>
        <div class="relative text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
          <span class="pi pi-asterisk"></span>  
          </span>
          <input v-model="userLogin.password" type="password" name="password" id="password" placeholder="••••••••••"
            class="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring-3 ring-transparent focus:ring-1 focus:outline-hidden focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
            autocomplete="new-password">
        </div>
      </div>
      <button type="button"
        class="w-full text-[#FFFFFF] bg-[#10b981] focus:ring-4 focus:outline-hidden focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6"
        @click.prevent="login">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/auth'; // import the auth store we just created
import type { UserLogin } from '~/shared/types/user/user';

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const userLogin = ref<UserLogin>({
  username: '',
  password: ''
})

const router = useRouter();

const login = async () => {
  await authenticateUser(userLogin.value); // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated
  if (authenticated) {
    router.push('/');
  }
};

</script>