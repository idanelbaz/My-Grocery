<template>
  <section v-if="item" class="item-card-preview">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img class="itemImg" :src="item.img" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{item.name}}</p>
            <p class="subtitle is-6">${{item.value}} ({{item.size}})</p>
            <p class="subtitle is-6 addToCart">Add to 🛒</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "itemCardPreview",
  data() {
    return {};
  },
  props: ["item"],
  created() {},
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped lang="scss">
.itemImg {
  padding: 2.5rem;
  object-fit: contain;
}

.addToCart {
  cursor: pointer;
  max-width: fit-content;
}

.card { 
  height: 21rem;
}
</style>