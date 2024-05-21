import axios from 'axios';
import { defineStore } from "pinia";
import { ref } from "vue";

export const useLogin = defineStore("login", () => {
    // state
    const token = ref<string | null>(null)
    const user = ref<object | null>(null)

    // actions
    const loginWithGithub = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/api/auth")
            console.log(data)
        } catch(e: unknown) {
            console.log(e)
        }
    }

    const login = () => {
      window.location.href = "http://localhost:8000/api/auth";
    }

    // return
    return { loginWithGithub, login };
});
