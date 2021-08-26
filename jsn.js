document.getElementById("frm").addEventListener("submit",function(){
    event.preventDefault()
    var data=Serialize(this)
    var dat= testButton(this)
    //console.log(data)
})
function Serialize(frm)
{
    var pets={}
    var obj=new FormData(frm)
    obj.forEach((e,k)=>{
        //console.log(k)
        pets[k]=e
        
    })
    //console.log(pets)
    return pets  


}

function testButton(frm)
{
    var pets={}
    var data= new FormData(frm)
    //console.log(data)
    data.forEach((e,k)=>{
        
    })
    alert(pets)
   
}