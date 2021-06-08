// async function getResponse() {
//     let response = await fetch ('http://localhost:3006/item/:itemid')
//     let contentM = await response.json()
//     let data = JSON.parse(contentM.data.splice(5)[0].item.routes[0].responses[0].body); 
//     let content = data.content;   
//     let item = document.querySelector('.catalog') 

function ajax(method, url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, "http://localhost:3007/" + url);
    xhr.onreadystatechange = function(){
        if (this.readyState == 4) {
            if (this.status == 200)
            console.log(typeof JSON.parse(this.responseText));
                 callback(JSON.parse(this.responseText));
        }
    };
    xhr.send(null);
  }
  
  ajax("GET", "item", function(items) {
    console.log(typeof items);
    const item = document.querySelector('.catalog') 
    for (let key of items.content) {
        item.innerHTML += `
        
        <div class="item linkblock"  id="${key.id}">
        <div class="item-like"><button class="${key.like?"like-button-active":"item-like-button"}"></button>

            </div>
            <div onclick="location.href='index2.html';" cursor="pointer">
             <img class="product" src="http://localhost:3007/picture/min/:pictureid"> 
             <span class="item-product">${key.name}</span>
             <span class="item-price">$ ${key.price.value}</span>
            </div>

        </div>`
        console.log();
      }
   
  })