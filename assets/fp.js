// const identity = (item) => item;

// const compose = (f, g) => (a) => f(g(a));

// const plusFive = (item) => item + 5;
// const convertToString = (item) => `${item}`;
// const map = (f) => (array) => array.map(f);

// const array = [ 1, 2, 3, 4 ];

// const identityArray = map(identity)(array); 
// console.log(map(plusFive)(array));

// const result = compose(map(convertToString), map(plusFive))(array);

// console.log(result);

// 

// var compose = (f, g) => {
//     return (item) => f(g(item));
// };

// var result = [1,2,3,4,5].map(compose((item) => item +1, (item) => item +1));

// console.log(result);

var arrayFunctor = (f) => (item) => item.map(f);
var plusOne = (item) => item + 1;
var plusTwo = (item) => item + 2;
var compose = (f, g) => (item) => f(g(item))
var result = compose(arrayFunctor(plusOne), arrayFunctor(plusTwo))([1]);
