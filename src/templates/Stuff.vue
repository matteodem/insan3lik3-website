<template>
  <layout>
    <header-component></header-component>
    <div class="pa3 pa0-l custom-stuff-content">
      <div v-html="$page.stuff.content"></div>

      <div class="pb5" v-if="$page.stuff.type === 'music'">
        <div class="mv3 f3">
          Listen to on:
          <span class="pl1" v-for="link in musicLinks">
            <a class="no-underline blue" :href="link.link"><span v-text="link.name"></span></a>
          </span>
        </div>

        <g-image :src="$page.stuff.image" :alt="`${$page.stuff.title} Cover`" />
      </div>
    </div>
  </layout>
</template>
<page-query>
  query Post ($path: String!) {
    stuff (path: $path) {
      title
      type
      image
      content
      links
    }
  }
</page-query>
<script>
  import { find } from 'lodash/fp'
  import HeaderComponent from '../components/Navigation/NavigationHeaderComponent.vue'

  const linkMap =  [
    { contains: '.spotify.', name: 'Spotify' },
  ]

  export default {
    components: { HeaderComponent },
    computed: {
      musicLinks () {
        return this.$page.stuff.links.map(link => {
          const findLink = find(({ contains }) => (link.includes(contains)))

          return {
            link,
            name: findLink(linkMap).name,
          }
        })
      },
    }
  }
</script>
