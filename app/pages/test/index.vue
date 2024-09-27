<template>
  <div>
    <!-- Main Content -->
    <div class="bg-white w-full">
      <div class="border-b-2 py-4 pl-10">
        <div class="grid grid-cols-12">
          <label class="col-span-2">アプリ管理</label>
        </div>
      </div>
      <div class="mt-5 py-4 pl-10">
        <div class="flex">
          <label>絞り込み</label>
          <input
            id="app_name"
            type="text"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="アプリ名を入力してください"
          />
        </div>
      </div>
    </div>
  </div>
</template>
