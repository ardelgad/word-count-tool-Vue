## Como asignar un valor a innerHTML
<div v-html="test" :id="nuevoId"> </div>

## :id asignar dinámicamente un valor al atributo 'id'

## Llamar a una función 
<div> {{ saludar('Pepe') }} </div>-->

## Cambiar el input con lo que escribes
:value="text" @input="onInput" => v-model="text"

## If/else Vue

<div id="app">
  <button @click="toggle">toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
</div>
====================================

<script type="module">
import { createApp } from 'vue'

createApp({
  data() {
    return {
      awesome: true
    }
  },
  methods: {
    toggle() {
      this.awesome = !this.awesome
    }
  }
}).mount('#app')
</script>

