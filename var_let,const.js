
console.log("Javascript tutorial 3 var const let")
//befor 1990 var using for declearing variables
var a= 7;
var b= "Shreyas"
var c= null;
var d= undefined;

// var is not Block Scope  
/*{
    var b ='this'
    console.log(b)//its print this 
}
console.log(b);//its print this not understand both is different
*/
//let is Block Scope
{
    let b ='this'
    console.log(b)//its print this 
}
console.log(b);