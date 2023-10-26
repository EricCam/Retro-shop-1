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
