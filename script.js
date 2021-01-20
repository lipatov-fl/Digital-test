let arr = [];
let arr2 = [];
let arr3 = [];

function fillArray(min, max) {
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    console.log(arr);
}

function replaceFromArray() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr2.push(0);
        } else if (arr[i] > 0) {
            arr2.push(arr[i]);
        }
    }
    console.log(arr2);
}

function addToArray() {
    for (let i = 0; i < arr2.length; i++) {
        if (i % 2 == 0 && arr2[i] == 0) {
            arr3.push(arr2[i]);
            arr3.push(-1);
        } else {
            arr3.push(arr2[i]);
        }
    }
    console.log(arr3);
}

fillArray(-10, 10);
replaceFromArray();
addToArray();