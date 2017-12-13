import Dep from './dep.js'

const defineReactive = (data, key, val) => {
  observer(val)
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
      observer(newVal)
      dep.notify()
    }
  })
}
export const observer = data => {
  if (Object.prototype.toString.call(data) !== '[object Object]') {
    new Observer(data)
  }
  return
}
export class Observer {
  constructor(data) {
    this.walk(data)
  }
  walk(data) {
    let keys = Object.keys(data)
    for (let i = 0; i < keys.length; ++i) {
      defineReactive(data, keys[i], data[keys[i]])
    }
  }
}
