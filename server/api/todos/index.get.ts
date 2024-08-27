import type { Todo } from "~/types/todos";

export default defineEventHandler(() => {
  const config = useRuntimeConfig();
  return $fetch<Todo[]>(`${config.apiBase}api/todos`);
});
