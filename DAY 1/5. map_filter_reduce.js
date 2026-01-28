let arr1 = [1,2,3,4,5];
console.log(arr1);

// without filter print only odd elements
for(i = 0 ; i<arr1.length; i++){
    if(arr1[i] % 2 != 0)
    console.log(arr1[i]);
}

// with filter print only odd elements
arr2 = arr1.filter(i => (i%2 != 0) )
console.log(arr2); //[ 1, 3, 5 ]

// map function to multiply 5 with all elements
arr3 = arr1.map(i => (i*5));
console.log(arr3); //[ 5, 10, 15, 20, 25 ]

// map function to multiply 5 with only odd elements
arr4 = arr1.map(i => ((i%2 != 0)? i*5: i));
console.log(arr4); //[ 5, 2, 15, 4, 25 ]

// filter to get only odd elements and then multiply 5 with them, so output will print only odd elements multiplied with 5
arr5 = arr1.filter(i => (i%2 != 0)).map(i=>(i*5))
console.log(arr5); //[ 5, 15, 25 ]

// reduce function to get sum of all elements
sum = arr1.reduce((acc, curr) => acc + curr, 0); // accumulator initialized to 0
console.log(sum); // 15

// filter to get only odd elements and then multiply 5 with them and then get sum of all elements
sum_of_odd_multiplied_by_5 = arr1.filter(i => (i%2 != 0)).map(i=>(i*5)).reduce((acc, curr) => acc + curr, 0);
console.log(sum_of_odd_multiplied_by_5); // 45