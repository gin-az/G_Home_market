import './css/main.css'
function ajax(method, url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, "http://localhost:3007/" + url);
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) console.log(typeof JSON.parse(this.responseText));
      callback(JSON.parse(this.responseText));
    }
  };
  xhr.send(null);
}

ajax("GET", "item", function (items) {
  const item = document.querySelector(".catalog");
  for (let key of items.content) {
    item.innerHTML += `
        
        <div class="item linkblock"  id="${key.id}">
           <div class="hreff" cursor="pointer"> <div class="item-like"><button class="${
             key.like ? "like-button-active" : "item-like-button"
           }"></button>
            </div>
            
             <img class="product" src="http://localhost:3007/picture/min/:pictureid"> 
             <span class="item-product">${key.name}</span>
             <span class="item-price">$ ${key.price.value}</span>
            </div>
        </div>`;
        }

  const buttonItems = document.querySelectorAll(".hreff");

  for (let buttonItem of buttonItems) {
    buttonItem.addEventListener("click", function (event) {
      "click",
        ajax("GET", "item/:itemId", function (itemCart) {
          console.log("+++");
          const content = itemCart.content;
          const item = document.querySelector(".catalog");
          item.innerHTML = "";
          item.innerHTML += `
                  <div class="block_product_photo">
                      <img class="product_photo" src="http://localhost:3006/picture/full/:pictureid">
                  </div>
                  <div class="description">
                      <h1>${content.name}</h1>
                      <p>${content.info}</p>
                      <h2>${content.description}</h2>
                      <p>${content.details}</p>
                      <div class="block_price">
                      <div class="price">${
                        content.price.currency == "USD" ? "$" : "Р"
                      }${content.price.value}</div> 
                      <div class="count">
                          <button class="minus"> - </button>
                          <input type="number" min="1" max="100" step="1" value="1" class="num" /></td>
                          <button class="plus"> + </button>
                                       </div>  
                           <div class="add_to_cart"><img src="./img/add_to_cart.svg"> </div>
                           <div class="like"><button class="like-button"></button>
                      </div>
                  </div>`;
          window.liked();
        });
    });
  }
});
