 name="ashok";

const person1={
name:"mahesh",
age:23,
city:"Pune",
area:"hadapsar",
pincode:123456,
status:true,

getalldetails:
function(){
    return "name :"+this.name+" age :"+this.age+" area :"+this.area+" city :"+this.city+" status :"+this.status ;
}
}

console.log(person1.name);
console.log(person1.getalldetails());
let bb=person1.getalldetails();
console.log(bb);

function myfunction()
{
    let name="mahesh";
    console.log(name);
    console.log(this.name);
}

myfunction();