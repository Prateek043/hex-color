// let first=document.querySelector('.header').textContent;
// console.log(first);
// let x=Math.trunc(Math.random()*10)+1;
// console.log(typeof(x));

function getHex(){
    var letters="0123456789ABCDEF";
    var color='#';
    for(var i=0;i<6;i++)
        color+=letters[Math.floor(Math.random()*16)];
        return color;
}
function changeColor()
{
var hex = getHex();
document.getElementById('demo').innerHTML = hex;
document.getElementsByTagName("BODY")[0].style.backgroundColor = hex;
}