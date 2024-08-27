import { defineStore } from "pinia";

export type UserLoginParams = {
  username: string;
  password: string;
};

type AuthResponse = {
  token: string;
};

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
  }),
  actions: {
    async authenticateUser(data: UserLoginParams) {
      const res = await $fetch<AuthResponse>("/api/auth/login", {
        method: "POST",
        body: data,
      });

      if (res) {
        const token = useCookie("accessToken");
        token.value = res?.token;
        this.authenticated = true;
      }
    },
    logUserOut() {
      const token = useCookie("accessToken");
      this.authenticated = false;
      token.value = null; // clear the token cookie
    },
  },
});
