// Three ways to get array with random numbers

// Method 1

let array1 = Array.from({length: 40}, () => Math.floor(Math.random() * 40) + 1).sort()

array1

// Method 2

let array2 = [];
while(array2.length < 40){
    let random = Math.floor(Math.random() * 100) + 1;
    if(array2.indexOf(random) === -1) array2.push(random);
}
console.log(array2.sort());

// Method 3

let array3 = Array(100).fill().map((_, index) => index + 1);
array3.sort(() => Math.random() - 0.5);
console.log(array3.slice(0, 10).sort());
