<template>
  <i class="icon" :class="`ion-${name}`"></i>
</template>
<script>
  export default {
    props: {
      name: {
        type: String,
      },
    },
  }
</script>
