<template>
  <div>
    <div v-for="(item, index) in items" :class="{ 'pb3': index !== items.length - 1 }">
      <g-link :to="item.node.path">
        <div class="dib v-mid pr3">
          <!-- FIXME Cannot use g-image cuz bug https://github.com/gridsome/gridsome/issues/292 -->
          <img :alt="item.node.title" :src="item.node.image" style="max-width: 40px" />
        </div>
        <div class="dib v-mid" style="max-width: calc(100% - 70px)">
          <div class="black f5">
            <stuff-title :item="item.node"></stuff-title>
          </div>
        </div>
      </g-link>
    </div>
  </div>
</template>
<script>
  import { head, tail } from 'lodash/fp'

  export default {
    props: {
      items: {
        type: Array,
      },
    },
  }
</script>
