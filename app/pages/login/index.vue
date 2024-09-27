<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore, type UserLoginParams } from "~/store/auth";
import type { Rule } from "ant-design-vue/es/form";
import type { UnwrapRef } from "vue";
import type { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import LangSwitcher from "../../components/base/LangSwitcher.vue";

definePageMeta({
  layout: false,
});

const { authenticateUser } = useAuthStore();
// make authenticated state reactive with storeToRefs
const { authenticated } = storeToRefs(useAuthStore());

const formRef = ref();
const formState: UnwrapRef<UserLoginParams> = reactive({
  username: "",
  password: "",
});
const rules: Record<string, Rule[]> = {
  username: [
    {
      required: true,
      message: "Please input your username!",
      trigger: "change",
    },
  ],
  password: [
    {
      required: true,
      message: "Please input your password!",
      trigger: "change",
    },
  ],
};

const router = useRouter();

const onSubmit = async () => {
  if (formRef.value) {
    formRef.value
      .validate()
      .then(async () => {
        await authenticateUser(formState); // call authenticateUser and pass the user object
        // redirect to homepage if user is authenticated
        if (authenticated) {
          router.push("/");
        }
      })
      .catch((error: ValidateErrorEntity<UserLoginParams>) => {
        console.log("error", error);
      });
  }
};
</script>

<template>
  <a-layout class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="ml-auto">
      <LangSwitcher />
    </div>
    <a-layout-content>
      <div class="bg-white p-8 rounded-lg shadow-lg w-96 mt-20">
        <!-- Logo Section -->
        <div class="flex flex-col items-center justify-center mb-6">
          <div class="bg-white w-28 mb-2">
            <img
              src="https://s3-ap-northeast-1.amazonaws.com/poc-image/production/54081a7360e6467a2b3d023623ea49d8b8abe621d48ee8fa030d1b6f761b.png"
              alt="Logo"
              class="w-full h-full"
            />
          </div>
          <p class="text-xl text-gray-600">
            <span class="font-semibold">SAML SP</span> Console
          </p>
        </div>

        <!-- Login Form -->
        <a-form
          ref="formRef"
          :model="formState"
          :rules="rules"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
          class="space-y-6"
        >
          <div>
            <label
              for="login-id"
              class="block text-sm font-light text-gray-700"
              >{{ $t("authentication.username") }}</label
            >
            <input
              id="login-id"
              v-model="formState.username"
              type="text"
              name="login-id"
              class="mt-1 block w-full px-3 py-2 border-b border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-light text-gray-700"
              >{{ $t("authentication.password") }}</label
            >
            <input
              id="password"
              v-model="formState.password"
              type="password"
              name="password"
              class="mt-1 block w-full px-3 py-2 border-b border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <button
              style="background-color: #05aceb"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              @click="onSubmit"
            >
              {{ $t("authentication.submit_btn") }}
            </button>
          </div>

          <div class="text-sm text-center">
            <a href="#" class="font-light text-blue-500 hover:text-blue-600">{{
              $t("authentication.forget_pw")
            }}</a>
          </div>
        </a-form>
      </div>
    </a-layout-content>
  </a-layout>
</template>
