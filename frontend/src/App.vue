<template>
  <div id="app">
    <appHeader></appHeader>
    <router-view/>
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
body { 
   font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
}
</style>
