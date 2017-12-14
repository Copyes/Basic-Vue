import Watch from './watcher'
import { observer } from './observer.js'

var data = {
  a: 1,
  b: {
    c: 2
  }
}
// 这里就把所有的属性劫持，监听了
observer(data)

new Watch(data, 'a', () => {
  console.log(9)
})

new Watch(data, 'a', () => {
  console.log(90)
})

new Watch(data, 'b.c', () => {
  console.log(80)
})

setTimeout(() => {
  data.a = 2
}, 1000)
