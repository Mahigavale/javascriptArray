let arr=[10,10,10,1];

//let total=0;
console.log("sum is:",arr.reduce(function(total,n)
{
      return total+=n;
     //return total/n;
}))



let ar=[5,10,15,20,25];

let vt=ar.reduce(function(sum,n)
{
  //  console.log(sum);
    return sum+=n;
})

console.log("the sum of the array is:",vt);

