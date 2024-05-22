import { defineStore } from "pinia";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { APIAxios } from "~/shared/api";

const ENDPOINT = "http://localhost:8000/api";
interface ILoginInterface {
  id?: number;
  email?: string;
  avatar?: string;
}
export const useLogin = defineStore("login", () => {
  // state
  const route = useRoute();
  const token = ref<string | null>(localStorage.getItem("authToken"));
  const user = ref<object | null>(
    JSON.parse(localStorage.getItem("userDetails") as string)
  );
  const tempToken = route.query.tempToken as string;

  // actions
  const loginWithGithub = () => {
    window.location.href = `${ENDPOINT}/auth`;
  };

  const logout = () => {};

  const getUserDetails = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const { data } = await APIAxios.get(`${ENDPOINT}/user`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      user.value = data;
      localStorage.setItem("userDetails", JSON.stringify(data));
    } catch (e: unknown) {
      console.log(e);
    }
  };

  const loginWithToken = async () => {
    try {
      const { data } = await APIAxios.get(
        `${ENDPOINT}/get-token?tempToken=${tempToken}`
      );
      token.value = data;
      localStorage.setItem("authToken", data);
    } catch (e: unknown) {
      console.log(e);
    }
  };

  const isAuthenticated = () => {
    return !!token.value;
  };

  // return
  return {
    user,
    token,
    loginWithGithub,
    loginWithToken,
    getUserDetails,
    isAuthenticated,
  };
});
