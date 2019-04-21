<template>
  <div class="pa3 pa0-l">
    <div class="cf">
      <div class="fl w-100 w-50-ns">
        <g-link :to="latestItem.node.path" class="no-underline dark-land-violet">
          <div class="center" style="max-width: 50vw">
            <!-- FIXME Cannot use g-image cuz bug https://github.com/gridsome/gridsome/issues/292 -->
            <img :alt="latestItem.node.title" :src="latestItem.node.image" class="shadow-2" style="max-width: 100%" />
          </div>
          <div class="tc pa3 lh-solid">
            <div class="f3 f2-ns b">
              <stuff-title :item="latestItem.node"></stuff-title>
            </div>
          </div>
        </g-link>
      </div>
      <div class="fl w-100 w-50-ns pl4-ns">
        <latest-stuff-list :items="restItems"></latest-stuff-list>

        <g-link to="/all-stuff" v-if="hasMore" class="db no-underline tc pv2 mt3 bg-black-20 white center ml0-ns mr0-ns pointer" style="max-width: 250px">
          Show more
        </g-link>
      </div>
    </div>

  </div>
</template>
<static-query>
  query Stuff {
    items: allStuff (perPage: 5) {
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
</static-query>
<script>
  import { head, tail } from 'lodash/fp'
  import LatestStuffList from './LatestStuff/LatestStuffListComponent.vue'

  export default {
    components: { LatestStuffList },
    computed: {
      latestItem () {
        return head(this.$static.items.edges)
      },
      restItems () {
        return tail(this.$static.items.edges)
      },
      hasMore () {
        return this.$static.items.totalCount > 5
      },
    },
  }
</script>
