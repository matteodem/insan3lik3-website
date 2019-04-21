<template>
  <page-layout>
    <div class="pa3 pa0-l">
      <div class="pv4-ns cf" v-if="$page.stuff.type === 'music'">
        <div class="w-100 w-50-ns pl4-ns fr">
          <div class="custom-stuff-content">
            <div v-html="$page.stuff.content"></div>
          </div>

          <div class="mv3 f3">
            Listen to on:
            <span class="pl1" v-for="link in musicLinks">
            <a class="no-underline blue" :href="link.link"><span v-text="link.name"></span></a>
          </span>
          </div>
        </div>

        <div class="w-100 w-50-ns fl">
            <g-image :src="$page.stuff.image" :alt="`${$page.stuff.title} Cover`" />
        </div>
      </div>
    </div>
  </page-layout>
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

  const linkMap =  [
    { contains: '.spotify.', name: 'Spotify' },
  ]

  export default {
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
