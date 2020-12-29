<template>
  <div id="app">
    <Login />
    <hr />
    <div>App.vue 我现在有{{ total }}</div>
    <Child :money="total" v-on:update:money="total = $event" />
    <Child :money.sync="total" />
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import Child from "./components/Child.vue";

export default {
  name: "App",
  components: {
    Login,
    Child,
  },
  data() {
    return {
      total: 1000,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
