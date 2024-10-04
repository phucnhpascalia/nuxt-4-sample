import { defineStore } from "pinia";
import type { TodoRequestDTO } from "~/types/request/TodoRequestDto";
import type { TodoResponseDTO } from "~/types/response/TodoResponseDto";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [] as TodoResponseDTO[],
  }),
  actions: {
    async getAll() {
      try {
        const data = await $fetch<TodoResponseDTO[]>("/api/todos");
        this.todos = data;
      } catch (e) {
        console.log(e);
      }
    },
    async create(data: TodoRequestDTO) {
      return await $fetch<TodoResponseDTO>("/api/todos", {
        method: "POST",
        body: data,
      }).catch((e) => {
        console.log(e);
      });
    },
    async update(data: TodoRequestDTO) {
      return await $fetch<TodoResponseDTO>("/api/todos", {
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
