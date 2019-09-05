<template>
  <section v-if="item" class="item-card-preview">
    <div class="card">
      <div :title="item.name" class="card-image">
        <figure class="image is-4by3">
          <img @click="goToDetails" class="itemImg" :src="item.img" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p @click="goToDetails" class="title is-4 itemName">{{item.name}}</p>
            <p v-if="!item.onSale.isSale" class="subtitle is-6">${{item.value}} ({{item.size}})</p>
            <p
              v-if="item.onSale.isSale"
              class="subtitle is-6 pastPrice"
            >${{item.value}} ({{item.size}})</p>
            <p
              title="On Sale"
              v-if="item.onSale.isSale"
              class="subtitle is-6 newPrice"
            >${{item.onSale.price}} ({{item.size}}) 🔥</p>
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
  methods: {
    goToDetails() {
     this.$emit('goToDetails', this.item._id)
    }
  },
  components: {}
};
</script>


<style scoped lang="scss">
.itemImg {
  padding: 2.5rem;
  object-fit: contain;
  cursor: pointer;
}

.itemName {
  cursor: pointer;
}

.addToCart {
  cursor: pointer;
  max-width: fit-content;
}

.card {
  height: 23rem;
}

.pastPrice {
  text-decoration-line: line-through;
}

.newPrice {
  font-weight: bold;
  font-size: 20px;
}

@media screen and (max-width: 600px) {
  .card {
    height: 25rem;
  }
}
</style>