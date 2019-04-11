<template>
  <div>
    <div v-for="item in $static.items.edges">
      <g-link :to="item.node.path">
        <div class="dib v-mid pr3">
          <!-- FIXME Cannot use g-image cuz bug https://github.com/gridsome/gridsome/issues/292 -->
          <img :alt="item.node.title" :src="item.node.image" style="max-width: 40px" />
        </div>
        <div class="dib v-mid">
          <div v-text="item.node.title"></div>
        </div>
      </g-link>
    </div>
  </div>
</template>
<static-query>
  query Stuff {
    items: allStuff (perPage: 5) {
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
