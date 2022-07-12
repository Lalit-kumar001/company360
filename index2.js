var slide=document.querySelector('.slider');
var btn1=document.getElementById('btn1');
var btn2=document.getElementById('btn2');
var btn3=document.getElementById('btn3');
var btn4=document.getElementById('btn4');
var div2=document.querySelector('.div2');
var div1=document.querySelector('.div1');
var pos2=document.querySelector('.pos2');
var pos1=document.querySelector('.pos1');
var pos3=document.querySelector('.pos3');
var pos4=document.querySelector('.pos4');


btn1.addEventListener('click',function(){
    pos1.classList.remove('right');
    pos1.classList.add('current');

    // remove class 
    pos2.classList.remove('current');
    pos3.classList.remove('current');
    pos4.classList.remove('current');

    // add class 
    pos2.classList.add('right');
    pos3.classList.add('right');
    pos4.classList.add('right');


    btn1.classList.add('white');
    btn2.classList.remove('white');
    btn3.classList.remove('white');
    btn4.classList.remove('white');

})

btn2.addEventListener('click',function(){
    
   

    pos2.classList.remove('right');
    pos2.classList.add('current');

    // remove class 
    pos1.classList.remove('current');
    pos3.classList.remove('current');
    pos4.classList.remove('current');

    // add class 
    pos1.classList.add('right');
    pos3.classList.add('right');
    pos4.classList.add('right');


    //btn color
    btn2.classList.add('white');
    btn1.classList.remove('white');
    btn3.classList.remove('white');
    btn4.classList.remove('white');

})


btn3.addEventListener('click',function(){
    

    pos3.classList.remove('right');
    pos3.classList.add('current');

    // remove class 
    pos2.classList.remove('current');
    pos1.classList.remove('current');
    pos4.classList.remove('current');

    // add class 
    pos2.classList.add('right');
    pos1.classList.add('right');
    pos4.classList.add('right');


    //btn color
    btn3.classList.add('white');
    btn1.classList.remove('white');
    btn2.classList.remove('white');
    btn4.classList.remove('white');


})


btn4.addEventListener('click',function(){
   
    pos4.classList.remove('right');
    pos4.classList.add('current');

    // remove class 
    pos2.classList.remove('current');
    pos3.classList.remove('current');
    pos1.classList.remove('current');

    // add class 
    pos2.classList.add('right');
    pos3.classList.add('right');
    pos1.classList.add('right');


    
    //btn color
    btn4.classList.add('white');
    btn1.classList.remove('white');
    btn3.classList.remove('white');
    btn2.classList.remove('white');
})


// touch swipe 
console.log("hi");
var touchsurface = document.getElementById('touchsurface'),
startX,
startY,
distX,
distY, 
threshold=150,//required min distance traveled to be considered swipe
allowedTime = 300, // maximum time allowed to travel that distance
elapsedTime,
startTime

function handleswipe(isrightswipe){
if (isrightswipe=='left'){
  if(pos1.classList.contains('current')){
    pos1.classList.remove('current');
    pos1.classList.add('right');
    pos2.classList.remove('right');
    pos2.classList.add('current');
  }
  else if(pos2.classList.contains('current')){
    pos2.classList.remove('current');
    pos2.classList.add('right');
    pos3.classList.remove('right');
    pos3.classList.add('current');
  }

 else  if(pos3.classList.contains('current')){
    pos3.classList.remove('current');
    pos3.classList.add('right');
    pos4.classList.remove('right');
    pos4.classList.add('current');
  }
}
else if(isrightswipe=='right'){
    if(pos4.classList.contains('current')){
        pos4.classList.remove('current');
        pos4.classList.add('right');
        pos3.classList.remove('right');
        pos3.classList.add('current');
    }
   else if(pos3.classList.contains('current')){
        pos3.classList.remove('current');
        pos3.classList.add('right');
        pos2.classList.remove('right');
        pos2.classList.add('current');
    }

    else if(pos2.classList.contains('current')){
        pos2.classList.remove('current');
        pos2.classList.add('right');
        pos1.classList.remove('right');
        pos1.classList.add('current');
    }

}
}

document.addEventListener('touchstart', function(e){
// touchsurface.innerHTML = ''
var touchobj = e.changedTouches[0]
distX = 0
startX = touchobj.pageX
startY = touchobj.pageY
startTime = new Date().getTime() // record time when finger first makes contact with surface
// e.preventDefault()
}, false)

document.addEventListener('touchmove', function(e){
// e.preventDefault() // prevent scrolling when inside DIV
}, false)

document.addEventListener('touchend', function(e){
var touchobj = e.changedTouches[0]
distX = touchobj.pageX - startX // get total dist traveled by finger while in contact with surface
elapsedTime = new Date().getTime() - startTime // get time elapsed
// check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
if (elapsedTime <= allowedTime){ // first condition for awipe met
    if (Math.abs(distX) >= threshold){ // 2nd condition for horizontal swipe met
       var swiper = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
    }
}
handleswipe(swiper)
// e.preventDefault()
}, false)

