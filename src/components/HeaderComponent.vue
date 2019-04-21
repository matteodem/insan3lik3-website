<template>
  <div>
    <div ref="logo">
      <div class="custom-header" :class="{ 'no-wiggle': hasDragged }">
        <div class="tc mt4">
          <div class="dib pointer">
            <header-logo></header-logo>
          </div>
        </div>
      </div>

      <div class="f2 tc dn">
        <div v-for="number in 3" class="dib mh5 custom-question-mark">
          <g-image alt="Mysterios question mark" src="~/assets/images/questionmark.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import HeaderLogo from './Header/HeaderLogoComponent.vue'

  export default {
    components: { HeaderLogo },
    data () {
      return {
        hasDragged: false,
      }
    },
    created () {
      if (process.isClient) {
        this.hasDragged = !!localStorage.getItem('il3_hasDragged')
      }
    },
    mounted () {
      if (!process.isClient) return null

      const { Draggable } = require('@shopify/draggable')

      const draggable = new Draggable(this.$refs.logo, {
        draggable: '.custom-header img',
        dropzone: '.custom-question-mark',
      })

      draggable.on('droppable:dropped', () => {
        // TODO: do something fun (question mark loot crates)
      })

      draggable.on('drag:start', () => {
        this.$router.push('/')
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
    /* TODO activate when the loot crate stuff is implemented
    animation: barely-noticeable-wiggle infinite 4s ease;
    */
  }
</style>
