/*INCORPORACION DE API*/


function iniciarMap() {
  var coordenadas = {lat:-34.54693705919758, lng:-58.446754917304986};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: coordenadas,
    zoom: 10
  });
}

var marker = new google.maps.Marker({
        position: coordenadas,
        map: map,
    title: 'El Mas Grande'
      });


   /*   const axios = require('axios');

const encodedParams = new URLSearchParams();
encodedParams.set('image_url', 'https://objectcut.com/assets/img/raven.jpg');

const options = {
  method: 'POST',
  url: 'https://background-removal.p.rapidapi.com/remove',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '5774df23e1msh7e396597644e6e0p110050jsn6c52a596e72a',
    'X-RapidAPI-Host': 'background-removal.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
      */
