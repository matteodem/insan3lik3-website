<template>
  <layout>
    <header-component></header-component>
    <div class="mt4">
      <stay-updated-component></stay-updated-component>
    </div>
  </layout>
</template>

<script>
  import HeaderComponent from '../components/HeaderComponent.vue'
  import StayUpdatedComponent from '../components/StayUpdatedComponent.vue'

  export default {
    components: {
      HeaderComponent,
      StayUpdatedComponent,
    },
    metaInfo: {
      title: 'Home',
    },
  }
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
