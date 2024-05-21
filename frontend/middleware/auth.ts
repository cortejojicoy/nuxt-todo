import { useLogin } from "~/stores/use-login";

export default defineNuxtRouteMiddleware((to, from) => {
  const { token } = useLogin();

  // Check if the user is authenticated
  if ((token && to.path === "/auth/callback") || to.path === "/") {
    // If the user is authenticated and trying to access the login page, redirect to the dashboard
    return navigateTo("/dashboard");
  }
});
