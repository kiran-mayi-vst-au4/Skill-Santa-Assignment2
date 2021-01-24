// 2. Write a simple JavaScript program to join all elements of the following array into  a string.
//    Sample array : myColor = ["Red", "Green", "White", "Black"];  
// Expected Output :  "Red,Green,White,Black" 
//  "Red,Green,White,Black"  
// "Red+Green+White+Black" 

function ArrToString(arr){

console.log("\""+arr.join(",")+"\"")
console.log(arr.join(",")) 
console.log("\""+arr.join("+")+"\"")

}
ArrToString(["Red", "Green", "White", "Black"])