import type { NitroFetchOptions } from "nitropack";
import { defu } from "defu";
import { useAuthStore, type AuthResponse } from "~/store/auth";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const accessToken = useCookie("accessToken");
  const refreshToken = useCookie("refreshToken");

  let refreshingFunc: Promise<AuthResponse> | undefined = undefined;

  const { logUserOut } = useAuthStore();

  async function useCustomFetch<T>(
    url: string,
    options: NitroFetchOptions<T> = {},
  ): Promise<T> {
    const defaults: NitroFetchOptions<T> = {
      // baseURL: config.apiBase,
      baseURL: "https://api.escuelajs.co",
      retryStatusCodes: [408, 409, 425, 429, 500, 502, 503, 504, 401],
      headers: accessToken.value
        ? { Authorization: `Bearer ${accessToken.value}` }
        : {},
      onResponse: async ({ response, options }) => {
        if (response.status === 401) {
          try {
            if (refreshingFunc == undefined) {
              refreshingFunc = getNewToken();
            }
            const { access_token, refresh_token } = await refreshingFunc;
            accessToken.value = access_token;
            refreshToken.value = refresh_token;
            options.headers = { Authorization: `Bearer ${access_token}` };
          } catch (error) {
            console.error("Token refresh failed:", error);
            throw error;
          } finally {
            refreshingFunc = undefined;
          }
        }
      },
    };

    const params = defu(options, defaults);

    return $fetch(url, params);
  }

  async function getNewToken() {
    const refreshToken = useCookie("refreshToken");

    const { access_token, refresh_token } = await $fetch<AuthResponse>(
      "/api/v1/auth/refresh-token",
      {
        // baseURL: config.apiBase,
        baseURL: "https://api.escuelajs.co",
        method: "POST",
        body: { refreshToken: refreshToken.value },
      },
    );

    if (access_token && refresh_token) {
      return {
        access_token,
        refresh_token,
      };
    } else {
      logUserOut();
      throw new Error("Token refresh failed");
    }
  }

  return {
    provide: {
      customFetch: useCustomFetch,
    },
  };
});
