/*
Simple yet Powerful FIFO Queue
 */
module.exports = function (items) {
    let data = nonEmptyArray(items) ? items.reverse() : [];

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

function nonEmptyArray(array) {
    return Array.isArray(array) && 0 < array.length;
}
