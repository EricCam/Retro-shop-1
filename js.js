let opiniones = document.querySelector("#opiniones")
fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then((response) => response.json())
  .then((data)=> {
	console.log(data)

	data.forEach((element) => {
		const content = document.createElement("div")
		content.innerHTML = `
		<p class="name-1">${element.name}</p>
		<p class="name-2">"${element.body}"</p>
		`
		opiniones.append(content)
	})
	})
	
