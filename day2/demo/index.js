//       012345678 
var str="ali ahmed";//implicit permtive => arr of chars 

// var input=prompt("enter user");
// var usrName=new String(input); // object 
// console.log(input)
// console.log(usrName);
// usrName.showdata=function()
// {
//     console.log("hlloworld");
// }
// str.descprtion="this string hava my name";
// console.log(str)
// usrName.descprtion="this string hava my name";
// console.log(usrName);
// usrName.showdata()
// var s=new String("ali"); //  explicit
// console.dir(s);
// s=10;
// console.log(s)
// var arr=[1,2]
// console.log(str.charAt(9))
// console.log(arr[10]);// in other programming error out of boundry 

// console.log(input.charAt(input.length-1));
// var index=input.lastIndexOf("z"); // 
// var str="itiaswan";
// // console.log(str.substring(0,3));
// var arrWord=input.split(" "); // retrun array acording to split char
// console.log(arrWord[arrWord.length-1]);
// console.log(input.replaceAll("a","&")); // 
// console.dir(String);
// console.log(input.substring(index+1,input.length)); // [ 0, 3 [ 
var date=new Date(); // object collection of premative datatypes
date.toEgyptFormat=function()
{
    console.log(date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear())
}
// console.log(date.getMonth());
// console.log(date.toLocaleDateString())
// console.log(date.getFullYear())
// date.toEgyptFormat();
// var old=new Date(2000,2,16);
// console.dir(Date);
var arr=[10,203,333,45566,88900,2233]; // implicit
// var arr2=new Array(10,20,30); // explicit
// arr["user"]="ahmed"
// console.log(arr["user"]);
// var x;
// arr["x"]=500;
// arr[2]="wddw"
// console.log(arr["x"]);
// arr.push(10);
// var x=arr.splice(0,3)// cut 
// var a=arr.slice(0,2)// copy
// console.log(x);

function div(num1,num2)
{

    if(num2!=0)
    {
        console.log(num1/num2);
    }
    else
    console.log("can not div zero")
}


function sumArr(arr)
{
    var sum=0;
    for(var i=0;i<arr.length;i++)
    {
        sum=arr[i]+sum;
    }
    return sum;
}


var arr=[1,2,3,4,5,6,7,8,9];
// var arr2=[5,6,7,9];

// var sum=arr[0]+arr[1]+arr[2]+arr[3];

var total=sumArr(arr);
console.log(total)



div(10,0); // calling 


















