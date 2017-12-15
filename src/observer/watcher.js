import { pushTarget, Dep } from './dep.js'

export default class Watcher {
  constructor(vm, exp, cb) {
    this.vm = vm
    vm._watcher.push(vm)
    this.exp = exp
    this.cb = cb
    this.deps = []
    this.depIds = new Set()

    this.getter = function(vm) {
      return vm[exp]
    }
    this.setter = function(vm, val) {
      vm[exp] = val
    }
    this.value = this.get()
  }

  get() {
    pushTarget(this)
    const vm = this.vm
    let val = this.getter.call(vm, vm)
    Dep.target = null
    return val
  }
  set(val) {
    this.setter.call(this.vm, this.vm, val)
  }
  addDep(dep) {
    let id = dep.id
    if (!this.depIds.has(id)) {
      dep.addSub(this)
      this.depIds.add(id)
      this.deps.push(this)
    }
  }
  update() {
    this.run()
  }
  run() {
    let val = this.get()
    if (this.value !== val) {
      let oldVal = this.value
      this.value = val
      this.cb.call(this.vm, val, oldVal)
    }
  }
}
