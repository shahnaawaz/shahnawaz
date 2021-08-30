function myfun()
{
    var red=document.getElementById("red")
    var yellow=document.getElementById("yellow")
    var green=document.getElementById("green")

    green.style.opacity=1
    red.style.opacity=.3
    yellow.style.opacity=.3
   setTimeout(function(){
    green.style.opacity=1
    red.style.opacity=.3
    yellow.style.opacity=.3
    },14000)
    setTimeout(function(){
        green.style.opacity=.3
        red.style.opacity=.3
        yellow.style.opacity=1
    },3000)

    setTimeout(function(){
        green.style.opacity=.3
        red.style.opacity=1
        yellow.style.opacity=.3
    },7000)

   
}

var time=setInterval(function(){
    myfun()
},5000)