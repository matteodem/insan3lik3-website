import 'tachyons'
import 'ionicons/dist/css/ionicons.css'
import 'ionicons/dist/fonts/ionicons.woff'
import 'ionicons/dist/fonts/ionicons.svg'
import '~/styles/main.scss'
import DefaultLayout from './layouts/Default.vue'
import Icon from './components/global/Icon.vue'
import StuffTitle from './components/global/Stuff/StuffTitle.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Icon', Icon)
  Vue.component('StuffTitle', StuffTitle)
}
