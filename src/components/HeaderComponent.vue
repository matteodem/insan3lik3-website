<template>
  <div>
    <div ref="logo">
      <div class="tc mt4 custom-header" :class="{ 'no-wiggle': hasDragged }">
        <div class="dib shadow-hover">
          <g-image alt="Insan3Lik3 Logo" src="~/images/logo.png" width="400" />
        </div>
      </div>

      <div class="f2 tc dn">
        <div v-for="number in 3" class="dib mh5 custom-question-mark">
          <g-image src="~/images/questionmark.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Draggable } from '@shopify/draggable'

  export default {
    data () {
      return {
        hasDragged: !!localStorage.getItem('il3_hasDragged'),
      }
    },
    mounted () {
      const draggable = new Draggable(this.$refs.logo, {
        draggable: '.custom-header img',
        dropzone: '.custom-question-mark',
      })

      draggable.on('droppable:dropped', () => {
        // TODO: do something fun (question mark loot crates)
      })

      draggable.on('drag:start', () => {
        this.hasDragged = true
        localStorage.setItem('il3_hasDragged', true)
        // TODO play a FUN sound
      })
      draggable.on('drag:stop', () => {
        // TODO play a FUN sound
      })
    },

  }
</script>
<style>
  .custom-header:not(.no-wiggle) {
    animation-delay: 5s;
    animation: barely-noticeable-wiggle infinite 4s ease;
  }
</style>
