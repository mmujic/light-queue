# light-queue
[![Build Status](https://badge.buildkite.com/39d5c21d09d3f7b3f0db463783a64a676b4894e57b31f166a4.svg)](https://buildkite.com/mmujic/light-queue) [![npm version](https://badge.fury.io/js/light-queue.svg)](https://badge.fury.io/js/light-queue) [![install size](https://packagephobia.now.sh/badge?p=light-queue)](https://packagephobia.now.sh/result?p=light-queue)

Simple yet Powerful FIFO (First in, First out) Queue for Javascript
* Zero dependencies
* Simple and Powerful API
* Lightweight

___

```javascript
const Queue = require('light-queue');

let queue = Queue();

queue.push(1);
let item = queue.pop();
console.log(item);              // 1

queue.push("Hello"); queue.push("world");
let items = queue.pop(2);
console.log(items.join(' '));   // Hello World

queue.push(100); queue.push(200); queue.push(300);
let all = queue.drain();
console.log(all.join(';'));     // 100;200;300

if (queue.isEmpty()) {
    queue.push(666);
}
console.log(queue.size());      // 1
```
