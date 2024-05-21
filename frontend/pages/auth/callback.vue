<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const { getToken } = useLogin();

onMounted(async () => {
  await getToken();
  router.push('/dashboard');
});

</script>

<template>
  <div>Redirecting...</div>
</template>
