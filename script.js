let btn = document.querySelectorAll('.btn');

btn.forEach(item => {
	item.addEventListener('click', () => {
		console.log(item.dataset.click);
		item.dataset.click++;
			
		if (item.dataset.click == 5) {
			console.log('done');
			
			btn.forEach(item => {
				item.setAttribute('disabled', 'true');
			});
		}
		
	});

	
})
