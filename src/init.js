import { initState } from './state.js'

export default function initMixin(Vue) {
  Vue.prototype._init = function(options) {
    const vm = this
    vm._isVue = true
    vm.$options = options
    initState(vm)
  }
}
