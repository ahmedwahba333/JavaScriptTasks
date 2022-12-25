function getCart()
{
    var totoal=0;
    var cart=JSON.parse(localStorage.getItem('cart'));

    for(var i=0;i<cart.length;i++)
    {
        document.getElementById('add').innerHTML+=`  <section id="cart">    
        <article class="product">
          <header>
            <a class="remove">
              <img src=${cart[i].thumbnail} alt="">
  
              <h3 onclick='remov(${i})'>Remove product</h3>
            </a>
          </header>
  
          <div class="content">
  
            <h1>Lorem ipsum dolor</h1>
  
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, numquam quis perspiciatis ea ad omnis provident laborum dolore in atque.
  
            <div title="You have selected this product to be shipped in the color red." style="top: 0" class="color red"></div>
            <div title="You have selected this product to be shipped sized Small."  style="top: 43px" class="type small">Small</div>
          </div>
  
          <footer class="content">
            
            <span class="qt">Rating</span>
            <span class="qt-minus">${Math.round(cart[i].rating)}</span>
           
  
            <h2 class="full-price">
              79.99€
            </h2>
  
            
          </footer>
        </article>`
    }
//     var newdiv=document.createElement('div');
//     var id=document.createElement("span");
//     var title=document.createElement("h3");
//     var price=document.createElement("h3");
//     var img=document.createElement('img');
//     img.src=cart[i].thumbnail;
//     title.innerText=cart[i].title;
//     price.innerText=cart[i].price+" $";
//     id.innerText=cart[i].id;
//     newdiv.appendChild(id);
//     newdiv.appendChild(img);
//     newdiv.appendChild(title);
//     newdiv.appendChild(price);
//     newdiv.setAttribute("class","card");
//     document.body.appendChild(newdiv);
//     totoal+=cart[i].price;
// }
// var ans=document.createElement("h1");
// ans.innerText= "totoal price is "+totoal;
// document.body.appendChild(ans);
}

function remov(x)
{
    var getdata=JSON.parse( localStorage.getItem('cart'))
    getdata.splice(x,1);
    localStorage.setItem('cart',JSON.stringify(getdata));
    //location.reload();
   getCart()
}
