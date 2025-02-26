// In this case, I want to protect every route so how do I make this middleware global? 
// we just need to add the .global suffix to our file like so auth.global.ts and it will
// automatically run on every route change.
export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token'); // get token from cookies

  // if token exists and url is /login redirect to homepage
  if (token.value && to?.name === 'login') {
    return navigateTo('/');
  }

  // if token doesn't exist redirect to log in
  if (!token.value && to?.name !== 'login') {
    abortNavigation();

    return navigateTo('/login');
  }
});