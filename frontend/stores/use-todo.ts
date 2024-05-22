import { useNuxtApp } from "#app";
import gql from "graphql-tag";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodo = defineStore("todo", () => {
  const todos = ref<[] | null>([]);
  const todo = ref<null>(null);

  // actions
  const fetchTodos = async () => {
    const { $apollo }: any = useNuxtApp();
    const GET_TODOS_QUERY = gql`
      query {
        todos {
          id
          description
          status
        }
      }
    `;
    try {
      const { data } = await $apollo.query({ query: GET_TODOS_QUERY });
      todos.value = data.todos;
    } catch (e: unknown) {
      console.log(e);
    }
  };

  const createTodo = () => {};

  return {
    fetchTodos,
    createTodo,
  };
});
