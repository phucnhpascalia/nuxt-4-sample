import { defineStore } from "pinia";
import type { Todo } from "~/types/todos";

export type CreateOrUpdateTodoParams = {
  id?: number;
  name: string;
  priority: string;
  completed: boolean;
};

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [] as Todo[],
  }),
  actions: {
    async getAll() {
      try {
        const data = await $fetch<Todo[]>("/api/todos");
        this.todos = data;
      } catch (e) {
        console.log(e);
      }
    },
    async create(data: CreateOrUpdateTodoParams) {
      return await $fetch<Todo>("/api/todos", {
        method: "POST",
        body: data,
      }).catch((e) => {
        console.log(e);
      });
    },
    async update(data: CreateOrUpdateTodoParams) {
      return await $fetch<Todo>("/api/todos", {
        method: "PUT",
        body: data,
      }).catch((e) => {
        console.log(e);
      });
    },
    async delete(id: number) {
      await $fetch("api/todos", {
        method: "DELETE",
        body: {
          id,
        },
      }).catch((e) => {
        console.log(e);
      });
    },
  },
});
