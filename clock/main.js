const hour=new Date().getHours();//8
const minute=new Date().getMinutes();//54
const second=new Date().getSeconds();//20
var heading=document.getElementById('heading')
var buttonfour=document.getElementById('button-24')
var spanone=document.getElementById('pm-am');
var spantwo=document.getElementById('pm-a')
buttonfour.addEventListener('click',()=>{


    document.getElementById('myTime').style.display='none';
    heading.style.display='block';
  
    setInterval(function(){
        new Date().getHours()<10? document.getElementById('hour').innerText="0"+new Date().getHours():document.getElementById('hour').innerText=new Date().getHours();  
      new Date().getMinutes()<10? document.getElementById('minutes').innerText="0"+new Date().getMinutes():document.getElementById('minutes').innerText=new Date().getMinutes();
      new Date().getSeconds()<10 ?   document.getElementById('seconds').innerText="0"+new Date().getSeconds():  document.getElementById('seconds').innerText=new Date().getSeconds();;
    },1000);
    
    if(new Date().getHours()>=0 &&  new Date().getHours()<12 ){
        // let p= document.createElement('span');
        spanone.innerText="AM"
   
    }
    else{
      
        spanone.innerText="PM"
 
    }
})



var secondheading=document.getElementById('secondheading')
var buttontwelve=document.getElementById('button-12');
buttontwelve.addEventListener('click',()=>{

    document.getElementById('myTime').style.display='block';
    heading.style.display='none'
  var hours= new Date().getHours();
  var minutes= new Date().getMinutes()
  var seconds=new Date().getSeconds()
 
  let session = 'AM';
spantwo.innerText='AM'
if (hours === 0) {
    hours = 12;
    
}

if (hours > 12) {
    hours = hours - 12;
    console.log(hours)
    session = 'PM';
    spantwo.innerText='PM'
}

 
setInterval(()=>{
    hours<10? document.getElementById('secondhour').innerText="0"+hours:document.getElementById('secondhour').innerText=hours;  
    minutes<10? document.getElementById('secondminutes').innerText="0"+new Date().getMinutes():document.getElementById('secondminutes').innerText=new Date().getMinutes();
    seconds<10 ? document.getElementById('secondseconds').innerText="0"+new Date().getSeconds():  document.getElementById('secondseconds').innerText=new Date().getSeconds();;
},1000)


})