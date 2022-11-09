<template>
  <lay-layout class="example">
    <lay-header>
      <lay-menu
        v-model:selected-key="selectedKey"
        v-model:open-keys="openKeys1"
        theme="light"
      >
        <lay-menu-item id="1"
          ><router-link to="/">hahah </router-link></lay-menu-item
        >
        <lay-menu-item id="2">首页</lay-menu-item>
        <lay-menu-item id="3">首页</lay-menu-item>
        <lay-sub-menu id="7">
          <template #title> 首页 </template>
          <lay-menu-item id="8">首页</lay-menu-item>
          <lay-menu-item id="9">首页</lay-menu-item>
          <lay-sub-menu title="菜单" id="10">
            <template #title> 首页 </template>
            <lay-menu-item id="11">首页</lay-menu-item>
            <lay-menu-item id="12">首页</lay-menu-item>
            <lay-menu-item id="13">首页</lay-menu-item>
          </lay-sub-menu>
        </lay-sub-menu>
      </lay-menu>
    </lay-header>
    <lay-layout>
      <lay-side>
        <lay-menu
          v-model:selected-key="selectedKey"
          theme="light"
          v-model:openKeys="openKeys4"
          :tree="true"
        >
          <lay-menu-item id="1">
            <template #title> 菜单 </template>
          </lay-menu-item>
          <lay-menu-item id="2">
            <template #title> 菜单 </template>
          </lay-menu-item>
          <lay-menu-item id="3">
            <template #title> 菜单 </template>
          </lay-menu-item>
          <lay-sub-menu id="7">
            <template #title> 目录 </template>
            <lay-menu-item id="8"> 菜单 </lay-menu-item>
            <lay-menu-item id="9"> 菜单 </lay-menu-item>
            <lay-sub-menu title="菜单" id="10">
              <template #title> 目录 </template>
              <lay-menu-item id="11"> 菜单 </lay-menu-item>
              <lay-menu-item id="12"> 菜单 </lay-menu-item>
              <lay-menu-item id="13"> 菜单 </lay-menu-item>
            </lay-sub-menu>
          </lay-sub-menu>
        </lay-menu>
      </lay-side>
      <lay-body>content</lay-body>
    </lay-layout>
  </lay-layout>
</template>


<script lang="ts" setup>
</script>
