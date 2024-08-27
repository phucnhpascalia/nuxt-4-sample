<script lang="ts" setup>
import { reactive, type UnwrapRef } from "vue";
import { useTodoStore, type CreateOrUpdateTodoParams } from "~/store/todo";
import type { Todo } from "~/types/todos";
import type { Rule } from "ant-design-vue/es/form";
import find from "lodash-es/find";

definePageMeta({
  middleware: "auth",
});

const labelCol = { style: { width: "150px" } };
const wrapperCol = { span: 14 };
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: "10%",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "25%",
  },
  {
    title: "Priority",
    dataIndex: "priority",
    key: "priority",
    width: "25%",
  },
  {
    title: "Completed",
    dataIndex: "completed",
    key: "completed",
    width: "25%",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];
const rules: Record<string, Rule[]> = {
  name: [
    {
      required: true,
      message: "Please input Name",
      trigger: "change",
    },
    { min: 3, max: 50, message: "Length should be 3 to 50", trigger: "blur" },
  ],
  priority: [
    {
      required: true,
      message: "Please select priority",
      trigger: "change",
    },
  ],
  completed: [
    {
      required: true,
      message: "Please select completed",
      trigger: "change",
    },
  ],
};

const formRef = ref();
const isEdit = ref<boolean>(false);
const open = ref<boolean>(false);
const formState: UnwrapRef<CreateOrUpdateTodoParams> = reactive({
  id: undefined,
  name: "",
  priority: "",
  completed: false,
});
const todoStore = useTodoStore();
await useAsyncData(() => todoStore.getAll());

const showModalAdd = () => {
  isEdit.value = false;
  open.value = true;
};

const showModalEdit = (id: number) => {
  const todo = find(todoStore.todos, { id });
  if (todo) {
    Object.assign(formState, {
      id: todo.id,
      name: todo.name,
      priority: todo.priority,
      completed: todo.completed,
    });
    isEdit.value = true;
    open.value = true;
  }
};

const handleAddOrUpdate = async () => {
  formRef.value
    .validate()
    .then(async () => {
      if (formState.id != undefined) {
        const dataUpdate = await todoStore.update(formState);
        const todo = find(todoStore.todos, { id: formState.id });
        if (todo) {
          Object.assign(todo, dataUpdate);
        }
      } else {
        const dataCreate = await todoStore.create(formState);
        if (dataCreate) {
          todoStore.todos.push(dataCreate);
        }
      }

      formRef.value.resetFields();
      open.value = false;
    })
    .catch((error: Error) => {
      console.log("error", error);
    });
};

const handleDelete = async (id: number) => {
  await todoStore.delete(id).then(async () => {
    todoStore.todos = todoStore.todos.filter((todo: Todo) => todo.id !== id);
  });
};

const handleCancel = () => {
  formRef.value.resetFields();
};
</script>

<template>
  <div>
    <a-button
      class="editable-add-btn"
      style="margin-bottom: 8px"
      @click="showModalAdd"
    >
      Add
    </a-button>

    <a-table :data-source="todoStore.todos" :columns="columns">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'priority'">
          <span>
            <a-tag
              :color="
                record.priority === 'high'
                  ? 'volcano'
                  : record.priority === 'medium'
                    ? 'geekblue'
                    : 'green'
              "
              >{{ record.priority }}
            </a-tag>
          </span>
        </template>
        <template v-else-if="column.key === 'completed'">
          <span>
            <a-tag :color="record.completed ? 'geekblue' : ''">
              {{ record.completed ? "Completed" : "" }}
            </a-tag>
          </span>
        </template>
        <template v-else-if="column.dataIndex === 'action'">
          <div class="editable-row-operations">
            <span>
              <a @click="showModalEdit(record.id)">Edit</a>
            </span>
            <a-divider type="vertical" />
            <span>
              <a-popconfirm
                title="Are you sure delete this task?"
                ok-text="Yes"
                cancel-text="No"
                @confirm="handleDelete(record.id)"
              >
                <a href="#">Delete</a>
              </a-popconfirm>
            </span>
          </div>
        </template>
      </template>
    </a-table>
    <contextHolder />

    <a-modal
      ref="modalRef"
      v-model:open="open"
      :wrap-style="{ overflow: 'hidden' }"
      @ok="handleAddOrUpdate"
      @cancel="handleCancel"
    >
      <a-form
        ref="formRef"
        :model="formState"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        :rules="rules"
      >
        <a-form-item ref="name" label="Name" name="name">
          <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item label="Priority" name="priority">
          <a-radio-group v-model:value="formState.priority">
            <a-radio value="high">High</a-radio>
            <a-radio value="medium">Medium</a-radio>
            <a-radio value="low">Low</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="Completed" name="completed">
          <a-switch v-model:checked="formState.completed" />
        </a-form-item>
      </a-form>
      <template #title>
        <div ref="modalTitleRef" style="width: 100%; cursor: move">
          <span>{{ isEdit ? "Update Todo" : "Add Todo" }}</span>
        </div>
      </template>
      <template #modalRender="{ originVNode }">
        <div>
          <component :is="originVNode" />
        </div>
      </template>
    </a-modal>
  </div>
</template>
