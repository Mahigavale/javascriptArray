
let arr=[];

for(i=0;i<=100;i++)
{
    arr[i]=i;
}

function oddeven(number)
{
    if(number==0)
  
    {
        console.log("0 is neither even nor odd!");
    }
   else if(number%2==0)
  {
    console.log("even",number);

  }
}
arr.forEach(oddeven);