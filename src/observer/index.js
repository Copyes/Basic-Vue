import { Dep } from './dep.js'
import { hasOwn, def } from '../util.js'

const defineReactive = (data, key, val) => {
  observe(val)
  let dep = new Dep()
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      dep.depend()
      return val
    },
    set(newVal) {
      if (newVal === val) {
        return
      }
      observe(newVal)
      dep.notify()
    }
  })
}

export const observe = value => {
  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return
  }
  let ob
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__
  } else {
    ob = new Observer(value)
  }
  return ob
}
// 只处理了普通对象，没有处理数组，后期会加上
export class Observer {
  constructor(value) {
    this.value = value
    this.dep = new Dep()
    def(value, '__ob__', this)
    this.walk(value)
  }
  walk(data) {
    let keys = Object.keys(data)
    for (let i = 0; i < keys.length; ++i) {
      defineReactive(data, keys[i], data[keys[i]])
    }
  }
}
