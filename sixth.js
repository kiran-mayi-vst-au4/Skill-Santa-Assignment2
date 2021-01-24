// 6. Write a JavaScript program to remove duplicate items from an array (ignore case  sensitivity)




///////////////////////////////////////---------- FOR STRING ARRAY ---------- /////////////////////////////
function removeDuplicates(arr){
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i].toLowerCase();
    }
let asort=arr.sort()
let a=[];
for(let i=0;i<asort.length;i++){
if(asort[i]!=asort[i+1]){
    a.push(asort[i])
}
}
console.log(a)
}

removeDuplicates(["Mike","Matt","Rachel","Adam","Jenny","rachel","Carl"])


//////////////////////////------------------ FOR NUMBER ARRAY -----------------------//////////////////////////////

function numberDup(arr){
let numArr=arr.sort((a,b)=>{
    return a-b;
})
// console.log(numArr)
let a=[];
for(let i=0;i<numArr.length;i++){
if(numArr[i]!=numArr[i+1]){
    a.push(numArr[i])
}
}
console.log(a)
}
numberDup([ 2, 1, 2, 3, 4, 4, 4, 5, 5])