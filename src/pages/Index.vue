<template>
  <Layout>
    <header-component></header-component>
  </Layout>
</template>

<script>
  import HeaderComponent from '~/components/HeaderComponent.vue'

  export default {
    components: { HeaderComponent },
    metaInfo: {
      title: 'Insan3Lik3'
    }
  }
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
