var slide=document.querySelector('.slider');
var btn1=document.getElementById('btn1');
var btn2=document.getElementById('btn2');
var btn3=document.getElementById('btn3');
var btn4=document.getElementById('btn4');
var div2=document.querySelector('.div2');
var div1=document.querySelector('.div1');


btn1.addEventListener('click',function(){
    // slide.style.transform="translateX(0px)";
})

btn2.addEventListener('click',function(){
    // slide.style.transform="translateX(-100%)";
    // div1.style.display="none";
    div2.style.display="block";

})


btn3.addEventListener('click',function(){
    slide.style.transform="translateX(-200%)";
})


btn4.addEventListener('click',function(){
    slide.style.transform="translateX(-300%)";
})
