
console.log("here we are going to look deeper in the objects");

//task=> to create the objects and then create methods for
//the same.methods are nothing but the properties written as values.


const akshay={
    village:"Latur",
    height:123,
    weight:67.78,
    status:false,
    mobile:1234567890,
    email:'akshaygodse@gmail.com',
    pincode:413604,
    getalldetails:function()
    {
     return 'email:=> '+this.email+' mobile:=>'+this.mobile;
    }
}
console.log(akshay.getalldetails());

// how we can access the properties of the objects.
//there are two ways for this access.
console.log(akshay['village']);
console.log(akshay.village);


const appa={
    name:'shri',
    email:'shri@gmail.com',
    contact:1234567890123,
    village:'khed',
    height:123 
}

function myfunction(p1,p2)
{
    return p1+p2;
}

console.log(myfunction(10,7));
