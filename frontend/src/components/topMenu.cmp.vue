<template>
  <section class="top-menu">
    <div class="mainImg">
      <a href="#" class="myButton">Start buying</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "topMenu",
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
.mainImg {
  margin-top: 3rem;
  height: 25rem;
  background-image: url("../../public/img/homePageWall.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background: opacity($color: #000000) 0.5;
}

.myButton {
  background-color: #b2d233;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 1.5rem;
  padding: 1.5rem 3.5rem;
  text-decoration: none;
  text-shadow: 0px 0px 0px #2f6627;
  position: relative;
  top: 40%;
  left: 9%;
}
.myButton:hover {
  background-color: #5cbf2a;
}
.myButton:active {
  top: 40.5%;
}
</style>