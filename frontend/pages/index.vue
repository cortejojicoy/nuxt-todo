<script setup lang="ts">
import { useLogin } from '~/stores/use-login';
// const { loginWithGithub } = useLogin()
const auth = useLogin()

// definePageMeta({
//   middleware: ["auth"]
// })
</script>

<template>
    <div class="login-container">
        <div class="login-form">
            <h2>Login</h2>
            <!-- <form>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password">
                </div>
                <button type="submit">Login</button>
            </form> -->
            <div class="social-login">
                <button class="github" @click="auth.loginWithGithub">Login with GitHub</button>
                <button class="google" @click="''">Login with Google</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
}
.login-form {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    h2 {
        margin-bottom: 1rem;
    }
    .form-group {
        margin-bottom: 1rem;
        text-align: left;

        label {
        display: block;
        margin-bottom: 0.5rem;
        }

        input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        }
    }

    button {
        width: 100%;
        padding: 0.75rem;
        background-color: #007bff;
        border: none;
        color: #fff;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            background-color: #0056b3;
        }
    }

    .social-login {
        display: flex;
        flex-direction: column;

        button {
            padding: 0.75rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-bottom: 0.5rem;

            &.github {
                background-color: #333;
                color: #fff;

                &:hover {
                    background-color: #222;
                }
            }

            &.google {
                background-color: #db4437;
                color: #fff;

                &:hover {
                    background-color: #c23321;
                }
            }
        }
    }
}
</style>