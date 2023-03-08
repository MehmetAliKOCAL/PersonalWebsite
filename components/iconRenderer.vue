<script setup>
import { defineAsyncComponent } from "vue";
const prop = defineProps(["iconName"]);
function dynamicComponent() {
  const iconName = prop.iconName;
  return defineAsyncComponent(() => import(`./Icons/${iconName}.vue`));
}
</script>
<template>
  <component :is="dynamicComponent()" />
</template>
