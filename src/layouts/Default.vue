<template>
  <div class="ph3 ph0-l center yantramanav" style="max-width: 700px">
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
