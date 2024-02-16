/* 
slice is basically a copying method in which the elements of array
are copied to a new array.
this array is obtained as follows.
 array1.slice(1,4)=>
 will return the elements from 1 to 3 indices starting 
 from 0 index.
 remember that the end index is not included into new array.

 write a program to store the vowels of the given array into
 new array.
*/

let chars=['b','c','d','f','g','h','t','a','e','i','o','u'];

//let v=chars.length;
var ind;
for(v=0;v<chars.length;v++)
{
 if(chars[v]=='a')
 {
     ind=v;
 }
}

let result=chars.slice(ind,chars.length);
console.log(result);
//remember here that the original array remains undaunted.
//we get a different array with the given condition.
//we do not update the array in the slice operation.
//we cannot add new elements and remove elements from the or-
//ginal array.
// for that purpose we use the splice method.....!!!node