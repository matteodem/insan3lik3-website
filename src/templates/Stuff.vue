<template>
  <layout>
    <div class="red pv3">
      Based on type (<span class="b" v-text="$page.stuff.type"></span>) adjust the output
      of shtuff!
    </div>
    <div v-html="$page.stuff.content"></div>

    <g-image :src="$page.stuff.image" :alt="`${$page.stuff.title} Cover`" />
  </layout>
</template>
<page-query>
  query Post ($path: String!) {
    stuff (path: $path) {
      title
      type
      image
      content
    }
  }
</page-query>
