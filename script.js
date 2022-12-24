let btn = document.querySelectorAll('.btn');

btn.forEach(item => {
	item.addEventListener('click', () => {
		console.log(item.dataset.click);
		item.dataset.click++;
			
		if (item.dataset.click == 4) {
			console.log('done');
			
			btn.forEach(item => {
				item.setAttribute('disabled', 'true');
			});
		}

		let user = {
			name: 'Mike',
			age: 41
		}

		let addAttrUser = item.dataset.user = JSON.stringify(user);

		console.log(addAttrUser);

		console.log(JSON.parse(addAttrUser));
		
	});

	
})
