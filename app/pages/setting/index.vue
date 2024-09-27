<template>
  <div>
    <!-- Main Content -->
    <div class="bg-white w-full">
      <div class="border-b-2 py-4 pl-10">
        <div class="grid grid-cols-12">
          <label class="col-span-2">アプリ - 新規登録</label>
        </div>
      </div>
      <div class="mt-5 py-4 pl-10">
        <div class="grid grid-cols-12">
          <label class="col-span-1 content-center">アプリ名</label>
          <div class="col-span-7">
            <input
              id="app_name"
              type="text"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="アプリ名を入力してください"
            />
          </div>
        </div>
        <div class="grid grid-cols-12 mt-5">
          <label class="col-span-1 content-center">SKU</label>
          <div class="col-span-7">
            <input
              id="app_name"
              type="text"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="SKUを入力してください"
            />
          </div>
        </div>
        <div class="grid grid-cols-12 mt-5">
          <label class="col-span-1 content-center">起動コード</label>
          <div class="col-span-7">
            <input
              id="app_name"
              type="text"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="半角カンマ区切りで入力してください(例)abcd1234,efgh5678"
            />
          </div>
        </div>
      </div>
      <div class="mt-10 py-4 pl-10">
        <label class="">Yappli連携</label>
        <div class="border-b-2 mt-5"></div>
        <div class="mt-10">
          <label class="text-blue-500">会員情報取得</label>
          <div class="grid grid-cols-12 ml-5 mt-5">
            <label class="col-span-3 content-center">アプリ名</label>
            <div class="col-span-2">
              <div
                class="border border-1 bg-white flex items-center p-1 rounded-lg"
              >
                <span
                  :class="{
                    'bg-blue-400 text-white': switchOn,
                    'text-gray-500': !switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  ON
                </span>
                <span
                  :class="{
                    'bg-blue-400 text-white': !switchOn,
                    'text-gray-500': switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  OFF
                </span>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-12 mt-5 ml-5">
            <label class="col-span-3 content-center"
              >会員情報取得APIのエンドポイント</label
            >
            <div class="col-span-7">
              <input
                id="app_name"
                disabled
                type="text"
                class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div class="grid grid-cols-12 mt-5 ml-5">
            <label class="col-span-3 content-center"
              >会員情報取得APIのシークレットキー</label
            >
            <div class="col-span-7">
              <input
                id="app_name"
                disabled
                type="text"
                class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div class="mt-10">
          <label class="text-blue-500">エラー画面</label>
          <div class="grid grid-cols-12 mt-5 ml-5">
            <label class="col-span-3 content-center">認証成功時の遷移先</label>
            <div class="col-span-7">
              <input
                id="app_name"
                type="text"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div class="grid grid-cols-12 mt-5 ml-5">
            <label class="col-span-3 content-center"
              >ログアウト成功時の遷移先</label
            >
            <div class="col-span-7">
              <input
                id="app_name"
                type="text"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div class="mt-10">
          <label class="text-blue-500">外部SDK連携</label>
          <div class="grid grid-cols-12 ml-5 mt-5">
            <label class="col-span-3 content-center">setMemberIDメソッド</label>
            <div class="col-span-2">
              <div
                class="border border-1 bg-white flex items-center p-1 rounded-lg"
              >
                <span
                  :class="{
                    'bg-blue-400 text-white': switchOn,
                    'text-gray-500': !switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  ON
                </span>
                <span
                  :class="{
                    'bg-blue-400 text-white': !switchOn,
                    'text-gray-500': switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  OFF
                </span>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-12 ml-5 mt-5">
            <label class="col-span-3 content-center">sendSfmcメソッド</label>
            <div class="col-span-2">
              <div
                class="border border-1 bg-white flex items-center p-1 rounded-lg"
              >
                <span
                  :class="{
                    'bg-blue-400 text-white': switchOn,
                    'text-gray-500': !switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  ON
                </span>
                <span
                  :class="{
                    'bg-blue-400 text-white': !switchOn,
                    'text-gray-500': switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  OFF
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 py-4 pl-10">
        <label class="">YappliCRM</label>
        <div class="border-b-2 mt-5"></div>
        <div class="mt-10">
          <div class="grid grid-cols-12 mt-5">
            <label class="col-span-2 content-center">YappliCRM接続先</label>
            <div class="col-span-2">
              <div
                class="border border-1 bg-white flex items-center p-1 rounded-lg"
              >
                <span
                  :class="{
                    'bg-blue-400 text-white': switchOn,
                    'text-gray-500': !switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  本番
                </span>
                <span
                  :class="{
                    'bg-blue-400 text-white': !switchOn,
                    'text-gray-500': switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  ステージング
                </span>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-12 mt-5">
            <label class="col-span-2 content-center">YappliCRM利用</label>
            <div class="col-span-2">
              <div
                class="border border-1 bg-white flex items-center p-1 rounded-lg"
              >
                <span
                  :class="{
                    'bg-blue-400 text-white': switchOn,
                    'text-gray-500': !switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  ON
                </span>
                <span
                  :class="{
                    'bg-blue-400 text-white': !switchOn,
                    'text-gray-500': switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  OFF
                </span>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-12 mt-5">
            <label class="col-span-2 content-center"
              >YappliCRMのクライアントID</label
            >
            <div class="col-span-7">
              <input
                id="app_name"
                disabled
                type="text"
                class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div class="grid grid-cols-12 mt-5">
            <label class="col-span-2 content-center"
              >YappliCRMのシークレットキー</label
            >
            <div class="col-span-7">
              <input
                id="app_name"
                disabled
                type="text"
                class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 py-4 pl-10">
        <label class="">SAML認証</label>
        <div class="border-b-2 mt-5"></div>
        <div class="mt-10">
          <div class="grid grid-cols-12 mt-5">
            <label class="col-span-2 content-center">IdpのmetadataのURL</label>
            <div class="col-span-7">
              <input
                id="app_name"
                type="text"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div class="grid grid-cols-12 mt-5">
            <label class="col-span-2 content-center">Idpの認証URL</label>
            <div class="col-span-7">
              <input
                id="app_name"
                type="text"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div class="grid grid-cols-12 mt-5">
            <label class="col-span-2 content-center"
              >NameIDPolicyのFormat</label
            >
            <div class="col-span-3">
              <select
                class="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Unspecified</option>
                <option>Specified</option>
              </select>
            </div>
          </div>
          <div class="grid grid-cols-12 mt-5">
            <label class="col-span-2 content-center"
              >NameIDPolicyのAllowCreate</label
            >
            <div class="col-span-2">
              <div
                class="border border-1 bg-white flex items-center p-1 rounded-lg"
              >
                <span
                  :class="{
                    'bg-blue-400 text-white': switchOn,
                    'text-gray-500': !switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  True
                </span>
                <span
                  :class="{
                    'bg-blue-400 text-white': !switchOn,
                    'text-gray-500': switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  False
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 py-4 pl-10">
        <label class="">マッピング</label>
        <div class="border-b-2 mt-5"></div>
        <div class="mt-10">
          <div class="grid grid-cols-12 mt-5">
            <label class="col-span-2 content-center">Column1</label>
            <div class="col-span-1">
              <div
                class="border border-1 bg-white flex items-center p-1 rounded-lg"
              >
                <span
                  :class="{
                    'bg-blue-400 text-white': switchOn,
                    'text-gray-500': !switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  ON
                </span>
                <span
                  :class="{
                    'bg-blue-400 text-white': !switchOn,
                    'text-gray-500': switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  OFF
                </span>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-12 mt-5">
            <label class="col-span-2 content-center"></label>
            <div class="col-span-3">
              <div
                class="border border-1 bg-gray-100 flex items-center p-1 rounded-lg h-full"
              >
                <span
                  class="cursor-pointer flex-1 text-center py-1 text-gray-500"
                >
                  固定値
                </span>
                <span
                  class="cursor-pointer flex-1 text-center py-1 text-gray-500"
                >
                  SAML IdP
                </span>
                <span
                  class="cursor-pointer flex-1 text-center py-1 bg-blue-400 text-white"
                >
                  外部API
                </span>
              </div>
            </div>
            <div class="col-span-1 ml-5">
              <div
                class="border border-1 bg-gray-100 flex items-center p-1 rounded-lg h-full"
              >
                <span
                  :class="{
                    'bg-blue-400 text-white': switchOn,
                    'text-gray-500': !switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  必須
                </span>
                <span
                  :class="{
                    'bg-blue-400 text-white': !switchOn,
                    'text-gray-500': switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  任意
                </span>
              </div>
            </div>
            <div class="col-span-5 ml-5">
              <input
                id="app_name"
                disabled
                type="text"
                class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div class="mt-10">
          <div class="grid grid-cols-12 mt-5">
            <label class="col-span-2 content-center">Column2</label>
            <div class="col-span-1">
              <div
                class="border border-1 bg-white flex items-center p-1 rounded-lg"
              >
                <span
                  :class="{
                    'bg-blue-400 text-white': switchOn,
                    'text-gray-500': !switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  ON
                </span>
                <span
                  :class="{
                    'bg-blue-400 text-white': !switchOn,
                    'text-gray-500': switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  OFF
                </span>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-12 mt-5">
            <label class="col-span-2 content-center"></label>
            <div class="col-span-3">
              <div
                class="border border-1 bg-white flex items-center p-1 rounded-lg h-full"
              >
                <span
                  class="cursor-pointer flex-1 text-center py-1 text-gray-500"
                >
                  固定値
                </span>
                <span
                  class="cursor-pointer flex-1 text-center py-1 text-gray-500"
                >
                  SAML IdP
                </span>
                <span
                  class="cursor-pointer flex-1 text-center py-1 bg-blue-400 text-white"
                >
                  外部API
                </span>
              </div>
            </div>
            <div class="col-span-1 ml-5">
              <div
                class="border border-1 bg-white flex items-center p-1 rounded-lg h-full"
              >
                <span
                  :class="{
                    'bg-blue-400 text-white': switchOn,
                    'text-gray-500': !switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  必須
                </span>
                <span
                  :class="{
                    'bg-blue-400 text-white': !switchOn,
                    'text-gray-500': switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  任意
                </span>
              </div>
            </div>
            <div class="col-span-5 ml-5">
              <input
                id="app_name"
                type="text"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div class="mt-10">
          <div class="grid grid-cols-12 mt-5">
            <label class="col-span-2 content-center">Column3</label>
            <div class="col-span-1">
              <div
                class="border border-1 bg-white flex items-center p-1 rounded-lg"
              >
                <span
                  :class="{
                    'bg-blue-400 text-white': switchOn,
                    'text-gray-500': !switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  ON
                </span>
                <span
                  :class="{
                    'bg-blue-400 text-white': !switchOn,
                    'text-gray-500': switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  OFF
                </span>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-12 mt-5">
            <label class="col-span-2 content-center"></label>
            <div class="col-span-3">
              <div
                class="border border-1 bg-white flex items-center p-1 rounded-lg h-full"
              >
                <span
                  class="cursor-pointer flex-1 text-center py-1 text-gray-500"
                >
                  固定値
                </span>
                <span
                  class="cursor-pointer flex-1 text-center py-1 text-gray-500"
                >
                  SAML IdP
                </span>
                <span
                  class="cursor-pointer flex-1 text-center py-1 bg-blue-400 text-white"
                >
                  外部API
                </span>
              </div>
            </div>
            <div class="col-span-1 ml-5">
              <div
                class="border border-1 bg-white flex items-center p-1 rounded-lg h-full"
              >
                <span
                  :class="{
                    'bg-blue-400 text-white': switchOn,
                    'text-gray-500': !switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  必須
                </span>
                <span
                  :class="{
                    'bg-blue-400 text-white': !switchOn,
                    'text-gray-500': switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  任意
                </span>
              </div>
            </div>
            <div class="col-span-5 ml-5">
              <input
                id="app_name"
                type="text"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <div class="mt-10">
          <div class="grid grid-cols-12 mt-5">
            <label class="col-span-2 content-center">Column50</label>
            <div class="col-span-1">
              <div
                class="border border-1 bg-white flex items-center p-1 rounded-lg"
              >
                <span
                  :class="{
                    'bg-blue-400 text-white': switchOn,
                    'text-gray-500': !switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  ON
                </span>
                <span
                  :class="{
                    'bg-blue-400 text-white': !switchOn,
                    'text-gray-500': switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  OFF
                </span>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-12 mt-5">
            <label class="col-span-2 content-center"></label>
            <div class="col-span-3">
              <div
                class="border border-1 bg-white flex items-center p-1 rounded-lg h-full"
              >
                <span
                  class="cursor-pointer flex-1 text-center py-1 text-gray-500"
                >
                  固定値
                </span>
                <span
                  class="cursor-pointer flex-1 text-center py-1 text-gray-500"
                >
                  SAML IdP
                </span>
                <span
                  class="cursor-pointer flex-1 text-center py-1 bg-blue-400 text-white"
                >
                  外部API
                </span>
              </div>
            </div>
            <div class="col-span-1 ml-5">
              <div
                class="border border-1 bg-white flex items-center p-1 rounded-lg h-full"
              >
                <span
                  :class="{
                    'bg-blue-400 text-white': switchOn,
                    'text-gray-500': !switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  必須
                </span>
                <span
                  :class="{
                    'bg-blue-400 text-white': !switchOn,
                    'text-gray-500': switchOn,
                  }"
                  class="cursor-pointer flex-1 text-center py-1"
                  @click="toggleSwitch"
                >
                  任意
                </span>
              </div>
            </div>
            <div class="col-span-5 ml-5">
              <input
                id="app_name"
                type="text"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 py-4 pl-10 border-b-2">
        <label class="">デザイン</label>
        <div class="border-b-2 mt-5"></div>
        <div class="mt-10 mb-10">
          <div class="grid grid-cols-12 mt-5">
            <label class="col-span-2 content-center">背景色</label>
            <div class="col-span-4">
              <input
                id="app_name"
                type="text"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div class="grid grid-cols-12 mt-5">
            <label class="col-span-2 content-center">文字色</label>
            <div class="col-span-4">
              <input
                id="app_name"
                type="text"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div class="grid grid-cols-12 mt-5">
            <label class="col-span-2 content-center">ボタン文字色</label>
            <div class="col-span-4">
              <input
                id="app_name"
                type="text"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div class="grid grid-cols-12 mt-5">
            <label class="col-span-2 content-center">ボタン背景色</label>
            <div class="col-span-4">
              <input
                id="app_name"
                type="text"
                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="border-b-2 py-4 pl-10 flex justify-center">
        <button
          type="button"
          class="w-1/6 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          キャンセル
        </button>
        <button
          type="button"
          class="w-1/6 text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          登録
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      switchOn: false,
    };
  },
  methods: {
    toggleSwitch() {
      this.switchOn = !this.switchOn;
    },
  },
};
</script>

<style scoped>
/* Additional styling if necessary */
</style>
