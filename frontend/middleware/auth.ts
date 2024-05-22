import { useLogin } from "~/stores/use-login";

export default defineNuxtRouteMiddleware((to, from) => {
  const login = useLogin();
  const { token } = storeToRefs(login);

  if (token && to.name === "index") {
    return navigateTo("/dashboard");
  }

  if (!token && to.name !== "index") {
    abortNavigation();
    return navigateTo("/");
  }
});
