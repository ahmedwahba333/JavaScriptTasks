class Person {
  static #count = 0;
  #id;
  constructor(a, b) {
    console.log(this.constructor);
    if (this.constructor == Person) {
      throw "error this is abstract class";
    }
    Person.#count++;
    this.name = a; // member property
    this.age = b;
  }

  setID(x) {
    this.#id = x;
  }
  getID() {
    return this.#id;
  }
  getdata() {
    console.log("make imple to this function");
  }
  static getCount() {
    return Person.#count;
  }
  display() {
    console.log(this.name);
  }
}

class Stuednt extends Person {
  constructor(a, b) {
    super(a, b); // Person.call(this,a,b);
  }
  //override
  display() {
    console.log("student");
  }
}

class Emp extends Person {
  constructor(a, b) {
    super(a, b); // Person.call(this,a,b);
  }
  //poverride
  display() {
    console.log("Emp");
  }
}

//var p1=new Person("ahmed",22);
// var p2=new Person("negm",44);
// p1.display()
// p2.display()
// var s1=new Stuednt('sayed',33)

function sum(a, b, ...rest) {
  console.log(a, b, rest);

  // var sum=0;
  // for(var i=0;i<arr.length;i++)
  // {
  //     sum+=arr[i]
  // }
  // console.log(sum);
}

//   function sum(a,b)
//  {
//     return a+b;
//  }
//  function sum(a,b,c)
//  {
//     return a+b+c;
//  }
// sum(10,20,30,40,50,60);
// var arr=[10,30,40];
// var arr2=[4,5,67,22];
// var arr3=[...arr,22,...arr2]
// console.log(...arr)
// var copy=arr;
// copy.pop()
// console.log(arr);
// console.log(copy)

var arr = [10, 2, 3, 57, 8, 7, 23, 50];
// var odd=arr.filter(function(item)
// {
//     return item%2!=0;
// })
// var grow=arr.filter(function(item)
// {
//     return item<20; // cond fliter
// })

// var index=arr.findIndex(function(item)
// {
//     return item==23
// })
// var newarr=arr.map(function(item)
// {
//     return item*2;
// })

// var multi=1;
// for(var i=0;i<arr.length;i++)
// {
//     multi*=arr[i];
// }
// console.log(multi)
// var sumarr=arr.reduce(function(x,item)
// {
//     console.log("sum:=>",x)
//     return x+item
// },0);

// console.log(sumarr)

// var se=new Set([10,20,30,10]);

// console.log(se.entries())
// se.add(5555);//
// // se.delete(20);
// // se.clear()

// se.forEach(function(item)
// {
//     console.log(item)
// })

for (var i in arr) {
  console.log(i, arr[i]);
}

var s1 = new Stuednt();

show(obj);
{
}
