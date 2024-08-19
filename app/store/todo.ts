import { defineStore } from "pinia";
import type { Todo } from "~/types/todos";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [] as Todo[],
  }),
  actions: {
    async getAll() {
      try {
        const data = await $fetch<Todo[]>(
          "https://656c4464e1e03bfd572e1e84.mockapi.io/api/todos"
        );
        this.todos = data;
        return data as Todo[];
      } catch (e) {
        console.log(e);
      }
    },
    async create(data: Todo) {
      await $fetch("https://656c4464e1e03bfd572e1e84.mockapi.io/api/todos", {
        method: "POST",
        body: data,
      })
        .catch((e) => {
          console.log(e);
        })
        .then(async () => {
          await this.getAll();
        });
    },
  },
});
