import type { Todo } from "~/types/todos";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const data = await readBody(event);

  return await $fetch<Todo>(`${config.apiBase}api/todos/${data.id}`, {
    method: "PUT",
    body: data,
  });
});
