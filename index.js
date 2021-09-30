var data=[];
function fill(add)
{
 data.push(document.getElementById(add.id).value);
 //console.log(data);
}
function load(){
    var total=0;
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        document.getElementById("res").innerHTML+=element+"<br\>"
        
    }
    for (let i = 0; i < data.length; i++) {
        if(data[i]=="Razma" || data[i]=="Dalmakhni")
        total+=60;
        else if(data[i]=="Dal" || data[i]=="Poha")
        total+=40;
        else if(data[i]=="Rice" || data[i]=="Roti")
        total+=30;
        else if(data[i]=="Paneer" || data[i]=="Dosa")
        total+=90;
        else if(data[i]=="Itly" || data[i]=="Pizza")
        total+=45;
        else if(data[i]=="Burger" || data[i]=="Paratha")
        total+=30;
        else if(data[i]=="Colddrink" || data[i]=="Lassi")
        total+=50;
    }
     
    document.getElementById("total").innerHTML="Total Cost: "+total
}
function reset(){
    document.getElementById("res").innerHTML=""
    document.getElementById("total").innerHTML=""
}
document.getElementById("btn").addEventListener("click",load);
document.getElementById("clr").addEventListener("click",reset);
