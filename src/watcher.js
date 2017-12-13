import { parseTarget } from './dep.js'

export default class Watcher {
  constructor(data, exp, fn) {
    this.exp = exp
    this.fn = fn
    pushTarget(this)
    data[exp]
  }
}
