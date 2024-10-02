<script lang="ts" setup>
import { reactive, type UnwrapRef } from "vue";
import type { CreateOrUpdateTodoParams } from "~/store/todo";
import { useApplicationStore } from "~/store/application";
import type { Rule } from "ant-design-vue/es/form";
import type { FormInstance } from "ant-design-vue";

definePageMeta({
  middleware: "auth",
});

const labelCol = { style: { width: "150px" } };
const wrapperCol = { span: 14 };
const i18n = useI18n();
const pagination = ref({
  position: ["topRight", "bottomRight"], // Show pagination controls in both header and footer
});
const columns = [
  {
    title: i18n.t("todo.id"),
    dataIndex: "application_name",
    key: "application_name",
    width: "30%",
  },
  {
    title: i18n.t("todo.name"),
    dataIndex: "sku",
    key: "sku",
    width: "50%",
  },
  {
    dataIndex: "action",
    width: "20%",
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

const formRef = ref<FormInstance>();
const isEdit = ref<boolean>(false);
const open = ref<boolean>(false);
const formState: UnwrapRef<CreateOrUpdateTodoParams> = reactive({
  id: undefined,
  name: "",
  priority: "",
  completed: false,
});
const applicationStore = useApplicationStore();
// await useAsyncData(() => applicationStore.getAll());
const handlePageChange = (page: number) => {
  applicationStore.setCurrentPage(page);
};
</script>

<template>
  <div class="bg-white">
    <a-button class="editable-add-btn" style="margin-bottom: 8px">
      {{ $t("todo.btn_add") }}
    </a-button>
    <div class="my-5 bg-table">
      <div>
        <!-- Top Section: Button, Text, and Pagination -->
        <div class="table-top">
          <div class="left-controls">
            <!-- Button on the left -->
            <a-button type="primary">新增追加</a-button>

            <!-- Text on the left -->
            <span class="pagination-text">全 123 件 (1～100件)</span>
          </div>

          <!-- Pagination on the right -->
          <a-pagination
            :current="applicationStore.currentPage"
            :page-size="10"
            :total="applicationStore.totalItems"
            @change="handlePageChange"
          />
        </div>
      </div>
      <a-table
        :data-source="applicationStore.applications"
        :columns="columns"
        :pagination="pagination"
      >
        <template #bodyCell="{ column }">
          <template v-if="column.dataIndex === 'action'">
            <div class="editable-row-operations">
              <span>
                <a>{{ $t("todo.btn_edit") }}</a>
              </span>
              <a-divider type="vertical" />
              <span>
                <a-popconfirm
                  :title="$t('todo.delete_confirm_msg')"
                  :ok-text="$t('todo.yes')"
                  :cancel-text="$t('todo.no')"
                >
                  <a href="#">{{ $t("todo.btn_delete") }}</a>
                </a-popconfirm>
              </span>
            </div>
          </template>
        </template>
      </a-table>
    </div>

    <contextHolder />

    <a-modal
      ref="modalRef"
      v-model:open="open"
      :wrap-style="{ overflow: 'hidden' }"
    >
      <a-form
        ref="formRef"
        :model="formState"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        :rules="rules"
      >
        <a-form-item ref="name" :label="$t('todo.name')" name="name">
          <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item :label="$t('todo.priority')" name="priority">
          <a-radio-group v-model:value="formState.priority">
            <a-radio value="high">{{ $t("todo.high") }}</a-radio>
            <a-radio value="medium">{{ $t("todo.medium") }}</a-radio>
            <a-radio value="low">{{ $t("todo.low") }}</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item :label="$t('todo.completed')" name="completed">
          <a-switch v-model:checked="formState.completed" />
        </a-form-item>
      </a-form>
      <template #title>
        <div ref="modalTitleRef" style="width: 100%; cursor: move">
          <span>{{
            isEdit ? $t("todo.update_title") : $t("todo.add_title")
          }}</span>
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
<style>
.ant-table {
  margin-left: 35px !important;
  margin-right: 35px !important;
}
.ant-pagination {
  margin-left: 35px !important;
  margin-right: 35px !important;
}
.bg-table {
  background-color: #f6f6f6;
}
.ant-table-content {
  border: 1px solid #cccccc;
}
thead .ant-table-cell {
  border-bottom: 2px solid #cccccc !important;
}

/* Customize pagination style to match second image */
.ant-pagination-item {
  border-radius: 0 !important; /* Remove rounded corners */
  padding: 0 !important; /* Remove padding inside the pagination items */
  border: 1px solid #d9d9d9 !important; /* Add a solid border */
  box-sizing: border-box !important; /* Ensure the borders are sized correctly */
  margin-inline-end: unset !important;
}

.ant-pagination-item-active {
  border-color: #d9d9d9 !important; /* Keep the same border color for active */
  background-color: #fff !important; /* White background */
}

.ant-pagination-item:hover {
  border-color: #d9d9d9 !important; /* Border color on hover */
}

.ant-pagination-item a {
  color: #333 !important; /* Default text color */
}

.ant-pagination-prev {
  margin-inline-end: unset !important;
}

.ant-pagination-prev .ant-pagination-item-link,
.ant-pagination-next .ant-pagination-item-link {
  border-radius: 0 !important; /* Remove rounded corners from arrows */
  border: 1px solid #d9d9d9 !important; /* Add border to the arrow buttons */
  background: transparent !important; /* Make arrow buttons transparent */
}

.ant-pagination-prev .ant-pagination-item-link:hover,
.ant-pagination-next .ant-pagination-item-link:hover {
  border-color: #d9d9d9 !important; /* Ensure hover state for arrows matches the rest */
}

.anticon {
  vertical-align: unset !important;
}

.table-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.left-controls {
  display: flex;
  align-items: center;
  margin-left: 35px !important;
}

.left-controls .pagination-text {
  margin-left: 12px; /* Spacing between button and text */
  font-size: 14px;
  color: #333;
}

a-pagination {
  margin-left: auto; /* Align pagination to the right */
}

.pagination-item {
  border: 1px solid #d9d9d9;
  border-radius: 0;
}
</style>
