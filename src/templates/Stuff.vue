<template>
  <layout>
    <div class="red pv3">
      Based on type (<span class="b" v-text="$page.stuff.type"></span>) adjust the output
      of shtuff!
    </div>
    <div v-html="$page.stuff.content"></div>
  </layout>
</template>
<page-query>
  query Post ($path: String!) {
    stuff (path: $path) {
      type
      content
    }
  }
</page-query>
