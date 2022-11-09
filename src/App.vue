<template>
  <lay-config-provider :themeVariable="themeVariable">
    <router-view />
  </lay-config-provider>
</template>


<script lang="ts" setup>
const themeVariable: { [key: string]: string } = {
  "--global-primary-color": "#6B6947",
  "--global-checked-color": "red",
};
</script>


<style lang="scss">
</style>
