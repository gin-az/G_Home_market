// Fetch:
// async function getResponse() {
//     let response = await fetch ('http://localhost:3006/item/:itemid')
//     let contentM = await response.json()
//     let data = JSON.parse(contentM.data.splice(5)[0].item.routes[1].responses[0].body);  без импорта JSON в mockoon
//     let content = data.content;   
//      let item = document.querySelector('.block_product') 
//     console.log(typeof data);
//     console.log(data);
// }
// getResponse()

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
  
  ajax("GET", "item/:itemId", function(items) {
    console.log(typeof items);
    console.log(items.content)
    const content = items.content;
    const item = document.querySelector('.block_product') 

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
            <div class="price">${content.price.currency == 'USD' ? "$" : "Р"}${content.price.value}</div> 
        
      <div class="count">
                    <button class="minus"> - </button>
                    <input type="number" min="1" max="100" step="1" value="1" class="num" /></td>
                    <button class="plus"> + </button>
                 </div>  
                 <div class="add_to_cart"><img src="./img/add_to_cart.svg"> </div>
                 <div class="like"><button class="like-button"></button>
            </div>
            </div>`
        console.log();

   
  })


    

      



