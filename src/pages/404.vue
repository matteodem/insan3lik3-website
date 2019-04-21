<template>
  <layout>
    <h1 class="pl2">
      <span class="f-headline pt3">???</span>
      <br />
      <g-link :to="{ name: 'home' }"><span class="gray" style="padding-left: 18px">Go back...</span></g-link>
    </h1>
  </layout>
</template>

<script>
  export default {
    metaInfo: {
      title: '404',
    },
  }
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
