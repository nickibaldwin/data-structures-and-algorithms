const insertShiftArray = (arr, value) => {
    let arrayNew = [];
    let middle = arr.length / 2;
    if (arr.length % 2 !== 0) {
        middle += 0.5;
    }
    for (let i = 0; i < arr.length; i++) {
        if (i < middle) {
            arrayNew.push(arr[i]);
        } else if (i === middle) {
            arrayNew.push(value);
        } else if (i > middle) {
            arrayNew.push(arr[i - 1]);
        }
    }
    return arrayNew;
};

module.exports = insertShiftArray;