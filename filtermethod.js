let arr=[1,2,3,4,[5,6,[7,8,9,10],11],12];

console.table(arr.flat(Infinity));
 let arr3=arr.flat(Infinity);
console.table(arr3.map(function(n)
{
    if(n>5)
    {
        return n;
    }

}));

console.table(arr3.filter(function (n)
{
    if(n>5)
    {
        return n;
    }
}))

let arr4=arr3.filter(function(n)
{
    if(n>5)
    {
        return n;
    }
})
console.table(arr4);