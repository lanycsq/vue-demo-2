<template>
  <div id="app">
    <div class="im">
      <input v-model="message" placeholder="edit me" />
      <p>Message is: {{ message }}</p>
      <p>
        <button @click="message = 'frank'">set message to frank</button>
      </p>
    </div>
    <div class="checkedNames">
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
      <br />
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <div id="example-4">
      <input type="radio" name="want" id="one" value="One" v-model="picked" />
      <label for="one">One</label>
      <br />
      <input type="radio" name="want" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
      <br />
      <span>Picked: {{ picked }}</span>
    </div>
    <div id="example-5">
      <select multiple v-model="selected">
        <option value="">请选择</option>
        <option v-for="item in array" :value="item.value" :key="item.value">
          {{ item.text }}
        </option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "hi",
      checkedNames: [],
      picked: "",
      selected: "",
      array: [
        { text: "抽烟", value: 1 },
        { text: "喝酒", value: 2 },
        { text: "烫头", value: 3 },
        { text: "挤痘痘", value: 4 },
      ],
    };
  },
};
</script>


