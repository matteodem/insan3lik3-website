<template>
  <span>
    <span class="black"><icon :name="icon"></icon></span><span v-text="` ${item.title}`"></span>
  </span>
</template>
<script>
  import { getTitleIcon } from '../../../lib/getTitle'

  export default {
    props: {
      item: {
        type: Object,
      },
    },
    computed: {
      icon () {
        return getTitleIcon(this.item.type)
      },
    },
  }
</script>
