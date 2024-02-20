/*
we can say that the join is opposite to the split.
in split we split the strign in to an array by using seperator.
here in join we join the array to strigng using the seperator.
*/

let arr3=['mahesh', 'ashok','gavale'];
let Str=arr3.join();
    console.log(Str);
// output=>mahesh,ashok,gavale 
// when we do not provide any seperator then the by
//default seperator is , and the string gets seperated by ,
let str2=arr3.join('');
console.log(str2);
//output=>maheshashokgavale here the string gets attached without
//any space.

let str3=arr3.join(' ')
console.log(str3);
//here the string will be seperated by the space.
    