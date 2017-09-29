<template>
  <div id="app">
      <button @click="addDOM">+1</button>
      <div class="contanier">
          <div v-for='i in content' :key='i'>{{i+x}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    addDOM: function() {
        console.time('test');
        this.x +=1;
    }
  },
  updated() {
    console.timeEnd('test');
  },
  data() {
    return {
            text: '',
            content: 5000,
            x:0
        }
  },

}
</script>

<style>

</style>
