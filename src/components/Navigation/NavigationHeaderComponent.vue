<template>
  <div>
    <div class="tc mt4">
      <g-link to="/">
        <div class="dib">
          <header-logo></header-logo>
        </div>
      </g-link>
    </div>
  </div>
</template>
<script>
  import HeaderLogo from '../Header/HeaderLogoComponent.vue'

  export default {
    components: { HeaderLogo },
  }
</script>
