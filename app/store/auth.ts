import { defineStore } from "pinia";
import { useNuxtApp } from "#app";

export type UserLoginParams = {
  username: string;
  password: string;
};

export type AuthResponse = {
  access_token: string;
  refresh_token: string;
};

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
  }),
  actions: {
    async authenticateUser(data: UserLoginParams) {
      const { $customFetch } = useNuxtApp();
      const res = await $customFetch<AuthResponse>("/api/v1/auth/login", {
        method: "POST",
        body: {
          email: data.username,
          password: data.password,
        },
      });

      if (res) {
        const accessToken = useCookie("accessToken");
        accessToken.value = res?.access_token;
        const refreshToken = useCookie("refreshToken");
        refreshToken.value = res?.refresh_token;
        this.authenticated = true;
      }
    },
    logUserOut() {
      const accessToken = useCookie("accessToken");
      const refreshToken = useCookie("refreshToken");
      this.authenticated = false;
      accessToken.value = null;
      refreshToken.value = null;
    },
  },
});
