# light-queue
[![Build Status](https://badge.buildkite.com/39d5c21d09d3f7b3f0db463783a64a676b4894e57b31f166a4.svg)](https://buildkite.com/mmujic/light-queue) [![npm version](https://badge.fury.io/js/light-queue.svg)](https://badge.fury.io/js/light-queue)

Simple yet Powerful Queue Implementation

```javascript
const Queue = require('light-queue');

let queue = Queue();

queue.push(1);

let item = queue.pop();

console.log(item);
```
