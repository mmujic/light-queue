# light-queue
[![Build Status](https://badge.buildkite.com/39d5c21d09d3f7b3f0db463783a64a676b4894e57b31f166a4.svg)](https://buildkite.com/mmujic/light-queue) [![npm version](https://badge.fury.io/js/light-queue.svg)](https://badge.fury.io/js/light-queue) [![install size](https://packagephobia.now.sh/badge?p=light-queue)](https://packagephobia.now.sh/result?p=light-queue) [![Total alerts](https://img.shields.io/lgtm/alerts/g/mmujic/light-queue.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/mmujic/light-queue/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/mmujic/light-queue.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/mmujic/light-queue/context:javascript)

Simple yet Powerful FIFO (First in, First out) Queue for Nodejs / Javascript
* Zero dependencies
* Simple and Powerful API
* Lightweight

Use case:
* Actual queue
* Simple throttling (pop _n_ number of items in interval)
* Simple retry (if action fails return item to Queue)
* ...
___

## Install
```
$ npm install light-queue --save
```

## Usage
```javascript
const Queue = require('light-queue');

let queue = Queue();

queue.push(1);
let item = queue.pop();
console.log(item);              // 1

queue.push("Hello"); queue.push("world");
let items = queue.pop(2);
console.log(items.join(' '));   // Hello world

queue.push(100); queue.push(200); queue.push(300);
let all = queue.drain();
console.log(all.join(';'));     // 100;200;300

if (queue.isEmpty()) {
    queue.push(666);
}
console.log(queue.size());      // 1

queue.drain();
let sentence = 'I am gonna get there first because I came first.';
let words = sentence.split(' ');
queue = Queue(words);

let part = queue.pop(5);
console.log(part.join(' '));    // I am gonna get there


```
