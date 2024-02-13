

let number=[1,3,2,5,7,8,9];

console.log("Ascending:",number.sort(myfunction));


function myfunction(a,b)
{
    return a-b;
}

// to sort in the descending order

function desc(a,b)
{
    return b-a;

}
console.log("descending:",number.sort(desc));