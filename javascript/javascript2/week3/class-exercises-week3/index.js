function myFunction(event) {}

const myFunction2 = () => {

};

const myFunction3 = function() {

};


// anonymous function
function() {
}

() => {
}

document.body.addEventListener('click', function(event) {
                
});

document.body.addEventListener('click', () => {
                
});

document.body.addEventListener('click', myFunction);

// Synchronicity
const arr = [1, 2, 3, 4, 5];
arr.push(5);

console.log(arr);

console.log(multiply(3, 4));

setTimeout(function () {
    console.log('Hello');
}, 1000);

function multiply (a,b) {
    return a * b;
}

console.log(1);
setTimeout(function () {
    console.log(2);
}, 0);
console.log(3);
