<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore, type UserLoginParams } from "~/store/auth";
import type { Rule } from "ant-design-vue/es/form";
import type { UnwrapRef } from "vue";
import type { ValidateErrorEntity } from "ant-design-vue/es/form/interface";

definePageMeta({
  layout: false,
});

const { authenticateUser } = useAuthStore();
// make authenticated state reactive with storeToRefs
const { authenticated } = storeToRefs(useAuthStore());

const formRef = ref();
const formState: UnwrapRef<UserLoginParams> = reactive({
  username: "emilys",
  password: "emilyspass",
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
};
</script>

<template>
  <a-layout
    class="flex flex-col justify-center px-6 py-12 lg:px-8"
    style="min-height: 100vh"
  >
    <a-layout-content>
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2
          class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Login
        </h2>
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <a-form
          ref="formRef"
          :model="formState"
          :rules="rules"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
        >
          <a-form-item label="Username" name="username">
            <a-input v-model:value="formState.username" />
          </a-form-item>

          <a-form-item label="Password" name="password">
            <a-input-password v-model:value="formState.password" />
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" @click="onSubmit">Submit</a-button>
          </a-form-item>
        </a-form>
      </div>
    </a-layout-content>
  </a-layout>
</template>
