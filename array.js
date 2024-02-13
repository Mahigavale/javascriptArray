//we will look for the array and it's methods in this page.

/*array in the js is not only the collection of similar elements but,
it can store any element of any type and dynamically increase its own 
size.
array is a object in the js.
array can be created in the two ways.
1)array literal
2)array  constructor overloadling.

in the literal we do not use the new keyword for initializing the array
in the constructor overloading we use the new keyword for creating 
the new array.

array  can be defined as the predefined class/function in js.
*/

//let arr=new Array('mahesh','dada','ullu','moon');
/*
if we declare let arr=('mahesh','gavale');
here it will take the gavale as only one 
*/

// let arr1=['akshay','doob','ollop']
// for(let i=0;i<arr.length;i++)
// {
//  console.log(arr[i]);
// }

//console.log("****************************************************");
/*
for(let i=0;i<arr1.length;i++)
{
    console.log(arr1[i]);
}
*/

/* array methods.... in js */
// length is the total size of the array.
 //(length-1) is the last index of the array.as index starts from zero.

//  let arr3= new Array(1,2,3,4)

//  //arr3.shift(34)
//  //arr3.unshift(45)
//  console.log("Element removed =>"+arr3.pop());

//  console.log(arr3.push(123));
//  console.log(arr3);


/*var a1=new Array(1,2,3,4);

console.log(a1.shift());  //shift is used to remove the elements.
console.log(a1);

console.log(a1.unshift(23));
console.log(a1);
*/

//more methods on the arrays.
// concat - concates the end array to the end of the
//first array. and gives the end array that we can use as variable

let arr2=[1,2,3,4,5,6,7,18,21,45]
let arr3=[8,9,0]

// console.log(arr2.concat(arr3));
// console.log(arr2);
// console.log(arr3);
console.log(arr2.indexOf(3));
//console.log(arr2.LastindexOf(3));
console.log(arr2.lastIndexOf(3));
 function checkeligible(age)
 {
    if (age >=18)
    
    return "you are eligible to vote !"
    
 }
console.log(arr2.find(checkeligible));