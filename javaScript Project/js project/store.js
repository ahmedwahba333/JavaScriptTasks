var products;
var productApi = new XMLHttpRequest();
productApi.open("GET", "https://dummyjson.com/products");
productApi.send();
productApi.onreadystatechange = function () {
  if (productApi.readyState == 4 && productApi.status == 200) {
    products = JSON.parse(productApi.responseText).products;
    for (var i = 0; i < products.length; i++) {
      document.getElementById("mydiv").innerHTML += `<div class="card">
        <img src=${products[i].thumbnail} alt="Denim Jeans" style="width:100%;height:300px">
        <h3>${products[i].title}</h3>
        <p class="price">${products[i].price} $</p>
        <p>${products[i].description}</p>
        <p><button onClick="add(${products[i].id})">Add to Cart</button></p>
      </div>`;
    }
  }
};
var myArr = [];
function add(id) {
  myArr.push(id);
  console.log(myArr);
  localStorage.setItem("userCards", JSON.stringify(myArr));
  var myItems = JSON.parse(localStorage.getItem("userCards"));
  localStorage.setItem("itemsLength", JSON.stringify(myItems.length));
  myArr = myItems;
  myCart.innerHTML = localStorage.getItem("itemsLength");
}
if (JSON.parse(localStorage.getItem("userCards")) != null) {
  myArr = JSON.parse(localStorage.getItem("userCards"));
}
myCart.innerHTML = localStorage.getItem("itemsLength");

function search() {
  let filter = document.getElementById("search").value.toLowerCase();
  let item = document.querySelectorAll(".card");
  let l = document.getElementsByTagName("h3");
  for (var i = 0; i <= l.length; i++) {
    var ProductName = item[i].getElementsByTagName("h3")[0];
    let value = ProductName.innerHTML;
    if (value.toLowerCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}
