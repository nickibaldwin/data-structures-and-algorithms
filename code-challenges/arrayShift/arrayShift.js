const insertShiftArray = (array, value) => {
    let arrayNew = [];
    let middle = array.length / 2;
    if (array.length % 2 !== 0) {
        middle += 0.5;
    }
    for (let i = 0; i < array.length; i++) {
        if (i < middle) {
            arrayNew.push(array[i]);
        } else if (i === middle) {
            arrayNew.push(value);
        } else if (i > middle) {
            arrayNew.push(array[i - 1]);
        }
    }
    return arrayNew;
};

module.exports = insertShiftArray;