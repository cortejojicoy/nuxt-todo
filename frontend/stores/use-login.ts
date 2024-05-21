import { defineStore } from "pinia";
import { useRoute } from "vue-router";

interface ILoginInterface {

}

const route = useRoute();
export const useLogin = defineStore("login", {
  state:() => ({
    isAuthenticate: false,
    token: ''
  }),

  actions: {
    loginWithGithub() {
      window.location.href = `${process.env.BASE_URL}/auth`
    },

    async loginWithToken() {
      try {
        const { data }: any = await useFetch(
          `${process.env.BASE_URL}/get-token`, 
          {
            query: {
              tempToken: route.query.tempToken as string,
            },
          }
        );
        this.token = data
      } catch(e:unknown) {
        console.log(e)
      }
    }
  }
  // state
  // const token = ref<string | null>(null);
  // const user = ref<object | null>(null);
  // const tempToken = route.query.tempToken as string;

  // // actions

  // const loginWithGithub = () => {
  //   window.location.href = "http://localhost:8000/api/auth";
  // };

  // const logout = () => {
    
  // };

  // const getToken = async () => {
  //   try {
  //     const { data } = await APIAxios.get(`/get-token?tempToken=${tempToken}`);
  //     token.value = data;
  //   } catch (e: unknown) {
  //     console.log(e);
  //   }
  // };

  // const isAuthenticated = () => {
  //   return !!token.value;
  // };

  // // return
  // return { loginWithGithub, getToken, token, isAuthenticated };
});
