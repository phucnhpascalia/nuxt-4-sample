<script lang="ts" setup>
import { reactive } from "vue";
import { useTodoStore } from "~/store/todo";
import { useAuthStore } from "~/store/auth";
import type { Todo } from "~/types/todos";

definePageMeta({
  middleware: "auth",
});

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Priority",
    dataIndex: "priority",
    key: "priority",
  },
  {
    title: "Completed",
    dataIndex: "completed",
    key: "completed",
  },
];

const initialTodo: Todo = {
  name: "",
  priority: "",
  completed: false,
};
const delayTime = 500;
const open = ref<boolean>(false);
const formState = reactive<Todo>(initialTodo);
const todoStore = useTodoStore();
const { loading } = storeToRefs(useAuthStore());
await useAsyncData(() => todoStore.getAll());
const showModal = () => {
  open.value = true;
};
const handleAdd = async () => {
  loading.value = true;
  await useAsyncData(() => todoStore.create(formState));
  resetFormState();
  open.value = false;
  loading.value = false;
};
const handleCancel = () => {
  resetFormState();
};
const resetFormState = () => {
  formState.name = "";
  formState.priority = "";
  formState.completed = false;
};
</script>

<template>
  <div>
    <a-button
      class="editable-add-btn"
      style="margin-bottom: 8px"
      @click="showModal"
    >
      Add
    </a-button>
    <a-table :data-source="todoStore.todos" :columns="columns" />
    <a-modal
      ref="modalRef"
      v-model:open="open"
      :wrap-style="{ overflow: 'hidden' }"
      @ok="handleAdd"
      @cancel="handleCancel"
    >
      <a-spin :spinning="loading" :delay="delayTime">
        <a-form
          :model="formState"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-item label="Name">
            <a-input v-model:value="formState.name" />
          </a-form-item>
          <a-form-item label="Priority">
            <a-radio-group v-model:value="formState.priority">
              <a-radio value="high">High</a-radio>
              <a-radio value="medium">Medium</a-radio>
              <a-radio value="low">Low</a-radio>
            </a-radio-group>
          </a-form-item>
          <a-form-item label="Completed">
            <a-switch v-model:checked="formState.completed" />
          </a-form-item>
        </a-form>
        <template #title>
          <div ref="modalTitleRef" style="width: 100%; cursor: move">
            Add Todo
          </div>
        </template>
        <template #modalRender="{ originVNode }">
          <div :style="transformStyle">
            <component :is="originVNode" />
          </div>
        </template>
      </a-spin>
    </a-modal>
  </div>
</template>
