<template>
  <layout>
    <div class="pa4 pv4-l ph0-l">
      <div class="pb4">
        <h1 class="f-headline-ns f1 lh-solid b pb3 mv0">All Insan3Lik3 Stuff</h1>
        <g-link to="/" class="black">Go home</g-link>
      </div>
      <latest-stuff-list-component :items="$page.items.edges"></latest-stuff-list-component>
    </div>
  </layout>
</template>
<page-query>
  query Stuff {
    items: allStuff {
      totalCount
      edges {
        node {
          path
          type
          title
          image
        }
      }
    }
  }
</page-query>
<script>
  import LatestStuffListComponent from '../components/LatestStuff/LatestStuffListComponent.vue'

  export default {
    components: { LatestStuffListComponent }
  }
</script>
