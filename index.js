// // const rendomArrey = Array(100)
// //   .fill(null)
// //   .map(() => Math.floor(Math.random() * 200) - 100);

// // console.log(rendomArrey);

// const testArray = [
//   49,
//   -80,
//   -81,
//   6,
//   60,
//   83,
//   -76,
//   1,
//   -91,
//   54,
//   43,
//   9,
//   98,
//   37,
//   97,
//   39,
//   -46,
//   96,
//   -65,
//   79,
//   -13,
//   63,
//   58,
//   30,
//   31,
//   -40,
//   32,
//   -86,
//   66,
//   44,
//   90,
//   69,
//   -69,
//   -60,
//   94,
//   -22,
//   53,
//   34,
//   0,
//   82,
//   -50,
//   78,
//   -6,
//   68,
//   37,
//   12,
//   6,
//   82,
//   -31,
//   94,
//   -71,
//   -50,
//   -47,
//   -99,
//   -35,
//   49,
//   -16,
//   29,
//   41,
//   82,
//   60,
//   -92,
//   -96,
//   79,
//   -9,
//   -7,
//   -52,
//   69,
//   -30,
//   50,
//   86,
//   -85,
//   58,
//   48,
//   -13,
//   -50,
//   -36,
//   83,
//   50,
//   -90,
//   -70,
//   76,
//   -23,
//   42,
//   22,
//   75,
//   -9,
//   16,
//   25,
//   89,
//   -30,
//   -52,
//   80,
//   29,
//   35,
//   17,
//   76,
//   -98,
//   46,
//   58,
// ];

// let bubleCount = 0;
// let selectionSortCount = 0;
// let countQuickSort = 0;
// let linearSearchCount = 0;
// let binariySearchCount = 0;

// function bubbleSort(arr) {
//   for (let n = 0; n < arr.length; n++) {
//     for (let i = 0; i < arr.length - 1 - n; i++) {
//       bubleCount++;
//       if (arr[i] > arr[i + 1]) {
//         let tmp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = tmp;
//       }
//     }
//   }
//   return arr;
// }

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let minimumIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       selectionSortCount++;
//       if (arr[j] < arr[minimumIndex]) {
//         minimumIndex = j;
//       }
//     }

//     if (minimumIndex != i) {
//       let tmp = arr[i];
//       arr[i] = arr[minimumIndex];
//       arr[minimumIndex] = tmp;
//     }
//   }
//   return arr;
// }

// function quickSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let rendomIndex = Math.floor(arr.length / 2);
//   //   const rendomIndex = Math.floor(Math.random() * arr.length);
//   const currentValue = arr[rendomIndex];
//   const minArr = [];
//   const maxArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     countQuickSort++;
//     if (arr[i] === currentValue) {
//       continue;
//     }
//     if (arr[i] > currentValue) {
//       maxArr.push(arr[i]);
//     } else {
//       minArr.push(arr[i]);
//     }
//   }
//   return [...quickSort(minArr), currentValue, ...quickSort(maxArr)];
// }

// function getFibonacciNumbers(size) {
//   let arr = [];
//   for (let i = 0; i < size; i++) {
//     if (arr.length == 0) {
//       arr.push(0);
//     } else if (arr.length == 1) {
//       arr.push(1);
//     } else {
//       arr.push(arr[i - 2] + arr[i - 1]);
//     }
//   }
//   return arr;
// }

// function linearSearch(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     linearSearchCount++;
//     if (arr[i] == num) {
//       return i;
//     }
//   }
//   return false;
// }

// function binarySearch(sortedArray, key) {
//   let start = 0;
//   let end = sortedArray.length - 1;

//   while (start <= end) {
//     binariySearchCount++;
//     let middle = Math.floor((start + end) / 2);

//     if (sortedArray[middle] === key) {
//       // found the key
//       return middle;
//     } else if (sortedArray[middle] < key) {
//       // continue searching to the right
//       start = middle + 1;
//     } else {
//       // search searching to the left
//       end = middle - 1;
//     }
//   }
//   // key wasn't found
//   return -1;
// }

// // console.log("_____________________________");
// // console.time("bubbleSort");
// bubbleSort(testArray);
// // console.timeEnd("bubbleSort");
// // console.log("bubleCount >>>>", bubleCount);
// // console.log("_____________________________");

// // console.time("selectionSort");
// // selectionSort(testArray);
// // console.timeEnd("selectionSort");
// // console.log("selectionSortCount >>>>", selectionSortCount);
// // console.log("_____________________________");

// // console.time("quickSort");
// // quickSort(testArray);
// // console.timeEnd("quickSort");
// // console.log("countQuickSort >>>>", countQuickSort);
// // console.log("_____________________________");

// // console.log(getFibonacciNumbers(20));

// console.log(testArray);

// console.log("_____________________________");
// console.log(`linearSearch: Index >>>>>`, linearSearch(testArray, 50));
// console.log("linearSearchCount", linearSearchCount);
// console.log("_____________________________");

// console.log(`binarySearch: Index >>>>>`, binarySearch(testArray, 50));
// console.log("binariySearchCount", binariySearchCount);

// console.log("_____________________________");

// const arr = ["e", 3, 38, ["o", "k"]];

// let [test, l, u, [d, i]] = arr;
// console.log(test, l, u, d, i);

// function calculet([a, b, c]) {
//   console.log(a, b, c);
// }
// calculet(arr);

// const obj = {
//   name: "Edul",
//   age: 23,
//   adrres: { city: "hfuhfu" },
//   // o: {
//   lastname: "Aloyan",
//   addres: "hfjghjgbvdnv",
// },
// };

// let {
//   name: i = "E",
//   age: j = 1,
//   o: { lastname, addres },
// } = { obj };
// console.log(i, j, o);

// let {
//   name,
//   addres: { city },
// } = obj;

// console.log(name);

// const outputN = {
//   0: { age: 20, name: "tony", mark: "400" },
//   1: { age: 16, name: "lilly", mark: "200" },
//   2: { age: 15, name: "bruce", mark: "300" },
// };

// const inputN = {
//   0: { age: 20, name: "tony", mark: "400" },
//   1: { age: 19, name: "steve", mark: "400" },
//   2: { age: 16, name: "lilly", mark: "200" },
//   3: { age: 15, name: "bruce", mark: "300" },
//   4: { age: 18, name: "tony", mark: "400" },
// };

// function test(obj) {
//   for (let i in obj) {
//     for (let j in obj) {
//       if (obj[i].mark === obj[j].mark && obj[i].age > obj[j].age) {
//         delete obj[j];
//       }
//     }
//   }
//   return obj;
// }

// console.log(test(inputN));

// const exclude = (array) => {
//   for (const i in array) {
//     for (const j in array) {
//       if (array[j].mark === array[i].mark && array[i].age > array[j].age) {
//         delete array[j];
//       }
//     }
//   }
//   return array;
// };

const users = [
  { id: 1, name: "tony", surname: "stark", age: 45, cool: true },
  { id: 2, name: "steve", surname: "strange", age: 40, cool: true },
  { id: 3, name: "bruce", surname: "banner", age: 35, cool: false },
  { id: 4, name: "steve", surname: "rogers", age: 73, cool: false },
  { id: 5, name: "sia", surname: "yung", age: 33, cool: true },
  { id: 6, name: "mystic", surname: "man", age: 30, cool: false },
];

const sortbyAge = (arr) => {
  return arr.sort((a, b) => {
    return a.age - b.age;
  });
};

sortbyAge(users);
console.log(users);
