

{
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); // 10
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined


let x = 5;
const y = 15;

y=50; // This will cause an error because 'y' is a constant
x=50; // This is valid because 'x' is declared with 'let'


{
    x=89; // This modifies the outer 'x'
    y=150; // This will cause an error because 'y' is a constant
    
    let x = 50; // This will not cause an error, but it will not affect the outer 'x'
    let y = 150; // This creates a new block-scoped 'y'
    console.log(x); // 50
    console.log(y); // 150
}

console.log(x); // 5
console.log(y); // 15