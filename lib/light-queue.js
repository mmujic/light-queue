/*
Simple yet Powerful FIFO Queue
 */
module.exports = function (items) {
    init(items);

    return {
        push: function add(item) {
            data.unshift(item);
        },
        pop: function (count) {
            if (undefined === count) {
                return data.pop();
            }
            if (0 === data.length) {
                return [];
            }
            return data.splice(-count).reverse();
        },
        size: function () {
            return data.length;
        },
        isEmpty: function () {
            return 0 === data.length;
        },
        drain: function () {
            return 0 === data.length ? [] : data.splice(-data.length).reverse();
        }
    };
};

let data;

function init(items) {
    if (nonEmptyArray(items)) {
        data = items.reverse();
    } else {
        data = [];
    }
}

function nonEmptyArray(array) {
    return Array.isArray(array) && 0 < array.length;
}