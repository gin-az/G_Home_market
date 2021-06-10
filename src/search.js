function debounce(callback, delay) {
  let timeout;
  return function() {
      clearTimeout( timeout );
      console.log("debounce working");
      timeout = setTimeout( callback, delay );
  }
} 
 
 let input = document.querySelector("#input");

  input.oninput = debounce(search, 2000);
   function search() {
     console.log("search completed");
    let value = input.value.trim();
    let item1 = document.querySelectorAll(".item");
    value
      ? item1.forEach((elem) => {
             elem.innerText.search(value) == -1
            ? elem.classList.add("hide")
            : elem.classList.remove("hide")
        })
      : item1.forEach((elem) => {
          elem.classList.remove("hide");
        })
  };