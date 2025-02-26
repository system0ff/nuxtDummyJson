import { defineStore } from 'pinia';
import type { UserResponse, UserLogin, User } from '~/shared/types/user/user';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    user: null as User | null
  }),
  getters: {
    userData: (state) => {
      return state.user;
    },
    isAuthenticated: (state) => {
      return state.authenticated;
    }
  },
  actions: {
    async authenticateUser(userLogin: UserLogin) {
      const response = await $fetch<UserResponse>('https://dummyjson.com/auth/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: {
          username: userLogin.username,
          password: userLogin.password,
        },
      });

      if (response) {
        const token = useCookie('token');     // useCookie new hook in nuxt 3
        token.value = response.accessToken;   // set token to cookie
        this.authenticated = true;            // set authenticated  state value to true
        this.setUserResponse(response)        // set user info
      }
    },
    logoutUser() {
      const token = useCookie('token');       // useCookie new hook in nuxt 3
      this.authenticated = false;             // set authenticated  state value to false
      token.value = null;                     // clear the token cookie
      this.user = null;                       // clear the user state

    },
    setUserResponse(userResponse: UserResponse) {
      this.user = {
        username: userResponse.username,
        email: userResponse.email,
        firstName: userResponse.firstName,
        lastName: userResponse.lastName,
        image: userResponse.image,
      }
    }
  },
});