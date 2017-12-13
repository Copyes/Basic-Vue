import Watch from './watcher'
import { observer } from './observer'
var data = {
  a: 1,
  b: {
    c: 2
  }
}
new Watch('a', () => {
  console.log(9)
})

new Watch('a', () => {
  console.log(90)
})

new Watch('b.c', () => {
  console.log(80)
})

setTimeout(() => {
  data.a = 2
}, 1000)
