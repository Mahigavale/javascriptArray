/*
the split method is used to seperate the string into the array
of characters or the array of words dependingon the requirement.
the method is useful for creating the array out of the string 
and perform the required operations on the given string.
*/

let arr=["mahesh ashok gavale","appa gavale","dada gavale","nana gavale"];
let arr2="mahesh ashok gavale";

let arr3=arr2.split("");
console.log(arr3);
let arr4=arr2.split("");
//if we do not provide anything for the split operator then
//the string will be splited on the character basis.
//currently we are unable to split the array using
//the splitter.
//let arr5=arr.split(" ")
console.log(arr4);
//console.log(arr5);