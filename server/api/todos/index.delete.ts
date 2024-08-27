export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const data = await readBody(event);

  return await $fetch(`${config.apiBase}api/todos/${data.id}`, {
    method: "DELETE",
  });
});
