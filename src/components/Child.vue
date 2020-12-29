<template>
  <div class="container">
    {{ money }}
    <button @click="$emit('update:money', money - 10)">
      <span>花钱</span>
    </button>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["money"],
  data() {
    return {};
  },
  methods: {
    pay() {
      this.$emit("pay", this.moeny);
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  //   border: 1px solid green;
}
</style>
