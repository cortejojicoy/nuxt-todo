import { defineStore } from "pinia";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { APIAxios } from "~/shared/api";

export const useLogin = defineStore("login", () => {
  // state
  const route = useRoute();
  const token = ref<string | null>(null);
  const user = ref<object | null>(null);
  const tempToken = route.query.tempToken as string;

  // actions

  const loginWithGithub = () => {
    window.location.href = "http://localhost:8000/api/auth";
  };

  const logout = () => {
    
  };

  const getToken = async () => {
    try {
      const { data } = await APIAxios.get(`/get-token?tempToken=${tempToken}`);
      token.value = data;
    } catch (e: unknown) {
      console.log(e);
    }
  };

  const isAuthenticated = () => {
    return !!token.value;
  };

  // return
  return { loginWithGithub, getToken, token, isAuthenticated };
});
