export class Dep {
  constructor() {
    this.subs = []
  }
  // 收集watcher
  depend() {
    this.subs.push(Dep.target)
  }
  // 通知watcher
  notify() {
    for (let i = 0; i < this.subs.length; ++i) {
      this.subs[i].fn()
    }
  }
}
Dep.target = null

export const pushTarget = watch => {
  Dep.target = watch
}
