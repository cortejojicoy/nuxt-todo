import { defineStore } from "pinia";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { APIAxios } from "~/shared/api";

const ENDPOINT = "http://localhost:8000/api";
interface ILoginInterface {
  id?: number;
  email?: string;
  social_avatar?: string;
}
export const useLogin = defineStore("login", () => {
  // state
  const route = useRoute();
  const token = ref<string | null>(localStorage.getItem("authToken"));
  const user = ref<ILoginInterface | null>(
    JSON.parse(localStorage.getItem("userDetails") as string)
  );
  const tempToken = route.query.tempToken as string;

  // actions
  const loginWithGithub = () => {
    window.location.href = `${ENDPOINT}/auth`;
  };

  const logout = () => {
    const authToken = localStorage.getItem("authToken");
    APIAxios.post(`${ENDPOINT}/logout`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    localStorage.removeItem("userDetails")
    localStorage.removeItem("authToken")
  };

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

  // getters
  // const isAuthenticated = computed(() => !token.value)
  // const userDetails = computed(() => user[0].value);

  // return
  return {
    user,
    token,
    logout,
    loginWithGithub,
    loginWithToken,
    // userDetails,
    getUserDetails,
    // isAuthenticated,
  };
});
