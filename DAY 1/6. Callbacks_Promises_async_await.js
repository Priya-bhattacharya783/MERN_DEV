// A function within a function is called a callback function. Callbacks are often used to handle asynchronous operations. 
// Promises and async/await are modern ways to work with asynchronous code in JavaScript.


// 1. Example of Callback
function fetchDataCallback(callback) {
    setTimeout(() => {
        const data = 'Data fetched using Callback';
        callback(data);
    }, 1000);
}

fetchDataCallback((data) => {
    console.log(data); // Data fetched using Callback
});



// 2. Example of Promise
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = 'Data fetched using Promise';
            resolve(data);
        }, 1000);
    });
}

fetchDataPromise()
    .then(data => {
        console.log(data); // Data fetched using Promise
    })
    .catch(error => {
        console.error(error);
    });


// 3. Example of async/await
function hello(){
    console.log("hello");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("priya");
        },1000);
    });
}

// hello();

async function greeting(){
    data = await hello();
    
    console.log(data);
}

greeting();




