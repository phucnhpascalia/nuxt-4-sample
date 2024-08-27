export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const data = await readBody(event);

  return await $fetch(`${config.authServer}auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: data,
  });
});
