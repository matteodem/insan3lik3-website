<template>
  <div class="white bg-black pa3 pa4-l">
    <div class="f3 f2-ns v-mid lh-copy">
      <div class="dib relative" style="top: 2px">
        <icon name="md-globe"></icon>
      </div>
      <div class="dib pl3 b"
           @click="popupOpen = !popupOpen">Want to stay updated?</div>
    </div>

    <div :class="{ 'custom-display-links': popupOpen }" class="mt3">
      <div v-for="link in links" class="dib-ns pr3-ns">
        <a :href="link.href" class="link white visited-cloud-blue hover-cloud-blue f4">
          <span class="dib tc" style="min-width: 28px; padding-right: 18px"><icon :name="link.icon"></icon></span>
          <span class="dib" v-text="link.label"></span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        popupOpen: false,
        links: [
          { icon: 'md-mail', label: 'E-Mail', href: 'https://gumroad.com/insan3lik3' },
          { icon: 'md-musical-note', label: 'Soundcloud', href: 'https://soundcloud.com/Insan3Lik3' },
          { icon: 'logo-youtube', label: 'YouTube', href: 'https://youtube.com/Insan3Lik3' },
          { icon: 'logo-instagram', label: 'Instagram', href: 'https://instagram.com/insan3lik3.music' },
        ],
      }
    },
  }
</script>
<style>

</style>
