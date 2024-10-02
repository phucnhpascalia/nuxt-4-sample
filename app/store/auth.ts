import { defineStore } from "pinia";

export type UserLoginParams = {
  username: string;
  password: string;
};

type AuthResponse = {
  accessToken: string;
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
        token.value = res?.accessToken;
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
