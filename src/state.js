import { observer } from './observer.js'

export function initState(vm) {
  const opts = vm.$options
  if (opts.data) {
    initData(vm)
  }
}
export function proxy(vm, key) {
  Object.defineProperty(vm, key, {
    enumerable: true,
    configurable: true,
    get: function proxyGetter() {
      return vm._data[key]
    },
    set: function proxySetter(val) {
      vm._data[key] = val
    }
  })
}
function initData(vm) {
  let data = vm.$options.data
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {}

  if (Object.prototype.toString.call(data) !== '[object Object]') {
    throw new Error('data functions should return an object')
  }
  const keys = Object.keys(data)
  let i = keys.length
  while (i--) {
    let key = keys[i]
    proxy(vm, key)
  }
}

const getData = (data, vm) => {
  try {
    return data.call(vm, vm)
  } catch (e) {
    console(e)
    return {}
  }
}
