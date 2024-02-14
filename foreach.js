let arr=[1,2,3,4,5,6,7,8,9]


function myfunction(number)
{
  console.log(number*2);
}

arr.forEach(myfunction);

console.log("by using the call back function..............");
arr.forEach((number)=>{console.log(number*2)})