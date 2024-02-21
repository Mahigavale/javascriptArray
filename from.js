let str="mahesh";
console.log(Array.from(str));

//from method is used to find the array from the given object.
//it returns an itrable array of the elements from 
//the given object.
//we must remember the fact that it returns an iterable 

let cc={
    name:'mahesh',
    number:1234567
}
console.log(Array.from(cc));
//when you use the from on the object then it return s the 
//empty array.