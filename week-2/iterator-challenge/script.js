const myObject = {
    array: [11, 13, 14, 66, 67, 69, 234, 456, 2, 1],
    [Symbol.iterator]: function* () {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] % 2 == 0) {
                yield this.array[i];
            }
        }
    },
};

for (let x of myObject) {
    console.log(x);
}