// map s used for cresting the new array with the new function 
// logic apploied on the given array.
// output of this method action will be an array.
// so store the array accordingly. and use it as need.

let number=[1,2,3,4,5,6,7,8,9,0]


//remember the thing map opeartion retrurns an array.
function demo(number)
{
     if(number==0)
    {
        return "0=>neither"
    }
   else if(number%2==0)
    {
        return number;
    }
    else {
        return "odd";
    }
}

const arr2=number.map(demo);
console.table(arr2);


let arr3=[{
    name:"mahesh",
    id:345,
    city:'pune'
},{
   name:'abhijeet',
   id:123,
   city:'lohara'
}]
let namme="mahesh";
function myfunction(arr3)
{
    if(arr3.name==namme)
    {
        console.log(arr3)
        
    }
     
    else
    {
        console.log("the user is not registered");
    }
}
//console.log(arr3.filter(myfunction));
console.log(arr3.forEach(myfunction));