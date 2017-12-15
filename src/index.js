import initMixin from './init.js'

function Vue(options) {
  this._init(options)
  //this.$mount(options)
}
// Vue.prototype.$mount = function(options) {
//   options && options.el && _compile(options.el)
// }

initMixin(Vue)

new Vue({
  data: {
    a: '1'
  }
})
export default Vue
