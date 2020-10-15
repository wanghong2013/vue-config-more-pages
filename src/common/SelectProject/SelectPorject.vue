<template>
  <section class="select-project">
    <a-input readOnly v-model="projectId" placeholder="请选择"/>
  </section>
</template>

<script>
export default {
  name: "SelectPorject",
  data() {
    return {
      projectId: "",
    };
  },
};
</script>

<style>
</style>