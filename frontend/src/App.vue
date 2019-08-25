<template>
  <div id="app">
    <appHeader></appHeader>
    <router-view />
    <appFooter></appFooter>
  </div>
</template>

<script>
import appHeader from "./components/appHeader.cmp.vue";
import appFooter from "./components/appFooter.cmp.vue";

export default {
  components: {
    appHeader,
    appFooter
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
  computed: {}
};
</script>


<style lang="scss" scoped>
</style>
