// 4. Write a JavaScript program to find the most frequent item of an array.  
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; 
// Sample Output : a ( 5 times ) 

function mostFrequent(arr){
var msfr = 1;
var m = 0;
var item;
for (var i=0; i<arr.length; i++)
{
        for (var j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                 m++;
                if (msfr<m)
                {
                  msfr=m; 
                  item = arr[i];
                }
        }
        m=0;
}

console.log(item+" ( " +msfr +" times ) ") ;
}
mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])