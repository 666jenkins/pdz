// var niz = [4, 7, 3, 7, 11, 19, 20, 21];

// function countThird(arr) {
//     var sum = 0;
//     var counter = 0;

//     for (i of arr) {
//         counter = (counter + 1) % 3;

//         if (counter == 0) {
//             sum += i;
//         }
//     }

//     return sum;
// }

// console.log(countThird(niz));



// var array = [15, 46, 16, 34, 47, 6, 1, 14, 9];

// function mySum(arr) {
//     var sum = 0;
//     var temp = 0;

//     for (i = 0; i < arr.length; i++) {
//         console.log(`#${i + 1}`);
//         console.log(`broj niza: ${arr[i]}`);
//         console.log(`zbir prethodnih avg: ${temp / i}`);

//         if (arr[i] < temp / i) {
//             sum += arr[i]
//             console.log(`> sum: ${sum}`);
//         }

//         temp += arr[i];
//     }

//     return sum;
// }

// console.log(mySum(array));




// var array = [15, 46, 16, 34, 47, 6, 1, 14, 9];

// function flipEven(arr) {
//     var reverse = [];
//     var output = [];
//     var counter = 0;

//     for (i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] % 2 == 0) {
//             reverse.push(arr[i])
//         }
//     }

//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             output[i] = reverse[counter];
//             counter++;
//         } else {
//             output[i] = arr[i];
//         }
//     }

//     return output;
// }


// console.log(flipEven(array));



// var array = [16, 46, 16, 34, 48, 6, 1, 14, 9, 8];

// function flipEven(arr) {
//     var temp, i = 0, j = arr.length - 1;

//     for (; i !== j && i !== j + 1; i++ , j--) {
//         if (arr[i] % 2 == 0) {
//             temp = arr[i];
//             if (arr[j] % 2 == 0) {
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             } else {
//                 i--;
//             }
//         } else if (arr[j] % 2 == 0) {
//             temp = arr[j];
//             if (arr[i] % 2 == 0) {
//                 arr[j] = arr[i];
//                 arr[i] = temp;
//             } else {
//                 j++;
//             }
//         }
//     }
//     return arr;
// }
// console.log(flipEven(array));

// z007

// var array = [97, 75, 6, 35, 8, 47, 80, 59, 84, 91];
// var output = [];

// function sortArray(arr, num) {
//     var temp, counter = 0,
//         i = 0;
//     for (; counter <= arr.length; i++) {
//         if (i == arr.length - 1) {
//             i = 0;
//         }
//         if (arr[i] > arr[i + 1]) {
//             temp = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = temp;
//             counter = 0;
//         } else {
//             counter++;
//             continue;
//         }
//     }
//     for (j = 0; j < arr.length; j++) {
//         if (num >= arr[j] && num <= arr[j + 1]) {
//             output.push(arr[j]);
//             output.push(num);
//         } else {
//             output.push(arr[j]);
//         }
//     }
//     return output;
// }

// console.log(sortArray(array, 31));


// z008.js

// var array = [5, 25, 32, 35, 41, 51, 83, 90, 92, 100];

// function findNum(arr, num) {
//     var result;

//     for (i = 0; i < arr.length; i++) {
//         if (num == arr[i]) {
//             result = i;
//             break;
//         } else {
//             result = -1;
//         }
//     }

//     return result
// }

// console.log(findNum(array, 99));


// z009.js

// function popNum(arr, x, start, end) {

//     var mid = parseInt((start + end) / 2);

//     if (arr[mid] <= x && x <= arr[mid + 1]) {
//         return (mid + 1);
//     }

//     if (x < arr[mid]) {
//         return popNum(arr, x, start, mid - 1);
//     } else {
//         return popNum(arr, x, mid + 1, end);
//     }
// }

// function generateSortedArray() {
//     var array = [];

//     for (i = 0; i < 1000; i++) {

//         var n = 5000 + parseInt(5000 * Math.random());

//         if (i == 0) {
//             array.push(n);
//         } else if (n >= array[i - 1]) {
//             array.push(n);
//         } else if (n <= array[0]) {
//             array = [n].concat(array);
//         } else {
//             var position = popNum(array, n, 0, array.length - 1);
//             array.splice(position, 0, n);
//         }
//     }

//     return array;
// }

// console.log(generateSortedArray());

// z012.1.js

class Cvor {
    constructor(value, link = null) {
        this.value = value
        this.next = link
    }
}

var lista = function () {
    var cvor, temp = null;

    for (i = 0; i <= 100; i++) {
        let num = parseInt(1000 * Math.random());

        cvor = new Cvor(num, temp);
        temp = cvor;
    }

    return cvor;
}

var output = lista();
console.log(output);

var temp1, temp2, sum = 0;

for (j = 0; j <= 100; j++) {
    if (j === 0) sum += output.value
    console.log(sum);

    temp1 = output.next;
    sum += temp1.value
}


console.log(sum);