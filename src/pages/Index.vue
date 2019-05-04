<template>
  <layout>
    <header-component></header-component>
    <div class="mt4">
      <latest-stuff-component></latest-stuff-component>
    </div>
    <div class="mt4">
      <support-component></support-component>
    </div>
    <div>
      <stay-updated-component></stay-updated-component>
    </div>
  </layout>
</template>

<script>
  import HeaderComponent from '../components/HeaderComponent.vue'
  import StayUpdatedComponent from '../components/StayUpdatedComponent.vue'
  import LatestStuffComponent from '../components/LatestStuffComponent.vue'
  import SupportComponent from '../components/SupportComponent.vue'

  export default {
    components: {
      HeaderComponent,
      StayUpdatedComponent,
      LatestStuffComponent,
      SupportComponent,
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
