/**
 * Augment the typings of Vue.js
 */
import { BvModal } from './components/modal'
import { BvToast } from './components/toast'

declare module 'vue' {
  interface ComponentCustomProperties {
    readonly $bvModal: BvModal
    readonly $bvToast: BvToast
  }
}
