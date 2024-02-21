let arr=[1,2,3,4,5,6,7,8,9]

console.log("result of the some :",arr.some(function(n)
{
     return n>4;
}));
console.log("result of the every :",arr.every((n)=>
{
    return n>1;
}));