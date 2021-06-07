window.onload = () => {
	let input = document.querySelector('#input');

	input.oninput = function() {
		let value = this.value.trim();
		// let list = document.querySelectorAll('.item-product'); 
		let item1 =  document.querySelectorAll('.item'); 

	value
			? item1.forEach(elem => {
					elem.innerText.search(value) == -1
						? elem.classList.add('hide')
						: elem.classList.remove('hide');
			  })
			: item1.forEach(elem => {
					elem.classList.remove('hide');
			  });
	};
};
