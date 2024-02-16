//includes method is used to check whether the given 
//element is present in th3e array or not.
//it returns the boolean true and false values.


let names=['mahesh','ashok','kaka','bhau','sahu'];
console.log(names);

//console.log(names.includes('ashoka'));

for(let i=0;i<names.length;i++)
var str='ashok';
{
   if(names.includes(str) == false)
   {
       names.push(str);
       console.log("the name is addded sucessfully!");
       console.log(names);
   }

   else{
    console.log( "the name is already present in the given array!");
   }
}

