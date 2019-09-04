<template>
  <section class="app-footer">
    <div class="content has-text-centered">
      <p>
        <strong>My Grocery</strong> by
        <a href="https://github.com/idanelbaz">Idan Elbaz</a>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "appFooter",
  data() {
    return {};
  },

  created() {},
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped lang="scss">
a{ 
  color: lightseagreen;
}

.app-footer { 
  margin-top: 2rem;
  margin-bottom: 1rem;
}
</style>