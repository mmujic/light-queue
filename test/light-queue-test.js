const Assert = require('assert');
const Queue = require('../lib/light-queue');

let queue;

describe("Light Queue Test", function () {
    beforeEach(function (done) {
        queue = Queue();
        done();
    });

    it("Check size", function (done) {
        queue.push(1); queue.push(2); queue.push(3); queue.push(4); queue.push(5);
        Assert.strictEqual(queue.size(), 5);

        queue.pop();
        Assert.strictEqual(queue.size(), 4);

        queue.pop(2);
        Assert.strictEqual(queue.size(), 2);

        queue.drain();
        Assert.strictEqual(queue.size(), 0);

        done();
    });

    it("Check isEmpty", function (done) {
        queue.push(1);
        Assert.strictEqual(queue.isEmpty(), false);

        queue.drain();
        Assert.strictEqual(queue.isEmpty(), true);

        done();
    });

    it("Check push / pop", function (done) {
        queue.push(1); queue.push(2);

        let item = queue.pop();

        Assert.strictEqual(item, 1);

        queue.push(3); queue.push(4);

        let items = queue.pop(2);

        Assert.strictEqual(items[0], 2);
        Assert.strictEqual(items[1], 3);

        items = queue.pop(5);
        Assert.strictEqual(items[0], 4);

        queue.drain();
        queue.pop({ do: { you: { expect: { this: { to: "happen?" } } } } });
        queue.pop("or this?");
        queue.pop(Number.MAX_SAFE_INTEGER);
        queue.pop(Infinity);

        queue.push(1); queue.push("NLO"); queue.push({ dark: "side" });
        items = queue.drain();
        Assert.strictEqual(items.length, 3);

        done();
    });

    it("Check drain", function (done) {
        queue.push(1); queue.push(2); queue.push(3);

        let items = queue.drain();

        Assert.strictEqual(items[0], 1);
        Assert.strictEqual(items[1], 2);
        Assert.strictEqual(items[2], 3);
        Assert.strictEqual(queue.isEmpty(), true);

        done();
    });

    it("Nothing fails when empty queue", function (done) {
        let drained = queue.drain();
        let popped = queue.pop(100);

        Assert.strictEqual(drained.length, 0);
        Assert.strictEqual(popped.length, 0);

        let single = queue.pop();
        Assert.strictEqual(single, undefined);

        done();
    });

    it("Check init", function (done) {
        queue = Queue([1, 2, 3]);
        let items = queue.drain();

        Assert.strictEqual(items[0], 1);
        Assert.strictEqual(items[1], 2);
        Assert.strictEqual(items[2], 3);

        done();
    });
});
