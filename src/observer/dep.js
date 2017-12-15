let uid = 0

export class Dep {
  constructor() {
    this.subs = []
    this.id = uid++
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  // 收集watcher
  depend() {
    if (Dep.target) {
      Dep.target.addSub(this)
    }
  }
  // 通知watcher
  notify() {
    const subs = this.subs.slice()
    for (let i = 0; i < subs.length; ++i) {
      subs[i].fn()
    }
  }
}
// 全局的
Dep.target = null

export const pushTarget = watch => {
  Dep.target = watch
}
