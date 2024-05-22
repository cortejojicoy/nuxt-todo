<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useLogin } from "~/stores/use-login";
const router = useRouter();
const { loginWithToken } = useLogin();

onMounted(async () => {
  await loginWithToken();
  router.push('/dashboard');
});
</script>

<template>
  <div>Redirecting...</div>
</template>
