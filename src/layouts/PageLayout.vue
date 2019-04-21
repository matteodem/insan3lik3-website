<template>
  <layout>
    <header-component></header-component>
    <slot></slot>
    <stay-updated></stay-updated>
  </layout>
</template>
<script>
  import HeaderComponent from '../components/Navigation/NavigationHeaderComponent.vue'
  import StayUpdated from '../components/StayUpdatedComponent.vue'

  export default {
    components: { HeaderComponent, StayUpdated },
  }
</script>
