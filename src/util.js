const hasOwnProperty = Object.prototype.hasOwnProperty

export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key)
}

export function def(obj, key, val) {
  Object.defineProperty(obj, key, {
    enumerable: false,
    configurable: true,
    value: val,
    writable: true
  })
}
