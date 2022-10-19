// Three ways to get array with random numbers

// Method 1

let array1 = Array.from({length: 40}, () => Math.floor(Math.random() * 40)).sort()

array1

// Method 2

let array2 = [];
while(array2.length < 40){
    let random = Math.floor(Math.random() * 100) + 1;
    if(array2.indexOf(random) === -1) array2.push(random);
}
console.log(array2);

// Method 3

const numbers = Array(100).fill().map((_, index) => index + 1);
numbers.sort(() => Math.random() - 0.5);
console.log(numbers.slice(0, 10));
