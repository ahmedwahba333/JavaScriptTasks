// function ad()
// {
//     console.log("ad");
// }
// function ad2()
// {
//     console.log("ad2sd");
// }

// function sum(n,m)
// {

//     console.log(n+m);
//     return "mohamed";
// }

// var user=sum(10,20);

// var id= setInterval(ad,2000);
// var id2=setInterval(ad2,3000);

// function clearTimeing()
// {
//     console.log("cleaing");
//     clearInterval(id);
//     clearInterval(id2);
// }   
// setTimeout(clearTimeing,5000);
// var newindow=window.open('',"linkedin","_blank");
// newindow.document.write("<h1>hallo world</h1>");
// function go()
// {
//     newindow.focus()
// }
// // setTimeout(function(){
// //     newindow.focus()
    
// // }, 5000);
// var obj={name:"ahmed"};

// obj.toString=function()
// {
//     return obj.name
// }
// console.dir(Object.prototype);


// console.log(location)

// function go()
// {
//     location.assign('https://www.google.com/');

// }

// function getmyPlace(x)
// {
//     console.log(x)
//     var url = "http://maps.google.com/maps?q="+ x.coords.latitude + ",+" +x.coords.longitude ;
//     location.assign(url)
// }
// navigator.geolocation.getCurrentPosition(getmyPlace)
function show()
{
    console.log('iti');
}

function display()
{
    console.log('iti');
}
function display2()
{
    console.log('iti2');
}
document.getElementById("but").addEventListener("click",display)
// document.getElementById("but").addEventListener("click",display2)
document.getElementById("but").onclick=display;
document.getElementById("but").onclick=display2;

setTimeout(function()
{
    document.getElementById("but").removeEventListener("click",display);
},5000)

function scorling()
{
    if(scrollY>1000)
    {
        scrollTo(0,0)
    }
}
































