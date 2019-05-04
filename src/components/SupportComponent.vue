<template>
  <div class="pa3 pv4-l tc bg-black-05">
    <div class="f3 f1-ns ph3 mb3-l b dark-land-violet">
      You can support me by
    </div>
    <div class="mv3 tc dib-ns mh2-ns"
         v-for="(option, index) in supportOptions"
      >
      <a :href="option.link" class="color-inherit link dib">
        <div class="pa3 f4 bg-black-10 " v-html="option.content"></div>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        supportOptions: [
          {
            content: 'sharing with <span class="dark-blue b">friends</span>',
          },
          {
            link: 'https://open.spotify.com/artist/0ACEzksK2oPw72QtDMCUVV?si=9aB4Go4JS1eeAYOqDbMWpg',
            content: 'listening on <span class="green b">Spotify</span>',
          },
          {
            link: 'https://insan3lik3.bandcamp.com/',
            content: 'buying some of my <span class="dark-visited-cloud-blue b">stuff</span>',
          },
          {
            content: 'following me for more <span class="dark-terrain-orange b">stuff</span>',
          },
        ]
      }
    }
  }
</script>
