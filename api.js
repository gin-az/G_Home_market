async function getResponse() {
    let response = await fetch ('http://localhost:3006/item/:itemid')
    let contentM = await response.json()
    let data = JSON.parse(contentM.data.splice(5)[0].item.routes[0].responses[0].body); 
    let content = data.content;   
    let item = document.querySelector('.catalog') 
    // console.log(typeof data);
    // console.log(data);
    

    for (let key of data.content) {
        // console.log(key);
        item.innerHTML += `

        <div class="item linkblock"  id="${key.id}" onclick="location.href='index2.html/id=${key.id}';" cursor="pointer">
        
        <div class="item-like"><button class="${key.like?"like-button-active":"like-button"}"></button>
            </div>
                <img class="product" src="http://localhost:3006/picture/min/:pictureid"> 
                    <span class="item-product">${key.name}</span>
                    <span class="item-price">$ ${key.price.value}</span>
        </div>`
      }

    // console.log(data.content[0].id); 
}

getResponse()