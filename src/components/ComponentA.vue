<template>
  <div>
    Hello {{ message }}! <span class="icon-heart" style="color:tomato"></span>
  </div>
</template>
<script setup lang="ts">
export interface Props {
  message: string
}
defineProps<Props>();
</script>
