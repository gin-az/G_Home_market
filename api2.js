async function getResponse() {
    let response = await fetch ('http://localhost:3006/item/:itemid')
    let contentM = await response.json()
    let data = JSON.parse(contentM.data.splice(5)[0].item.routes[1].responses[0].body); 
    let content = data.content;   
     let item = document.querySelector('.block_product') 
    console.log(typeof data);
    console.log(data);

    
        item.innerHTML += `
        <div class="block_product_photo">
            <img class="product_photo" src="http://localhost:3006/picture/full/:pictureid">
        </div>
        <div class="description">
        <h1>${data.content.name}</h1>
        <p>${data.content.info}</p>
        <h2>${data.content.description}</h2>
        <p>${data.content.details}</p>
        <div class="block_price">
            <div class="price">${data.content.price.currency == 'USD' ? "$" : "Р"}${data.content.price.value}</div> 
        
      <div class="count">
                    <button class="minus"> - </button>
                    <input type="number" min="1" max="100" step="1" value="1"class="num"/></td>
                    <button class="plus"> + </button>
                 </div>  
                 
                 <div><img src="http://localhost:3006/picture/:addtocard"> </div>
                 <div class="like"><button class="like-button"></button>
            </div>
            </div>`
      

}

getResponse()