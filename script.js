/*INCORPORACION DE API*/


function initMap() {
  let coordenadas = {lat:-34.54693705919758, lng:-58.446754917304986};
  let map = new google.maps.Map(document.getElementById('map'), {
    center: coordenadas,
    zoom: 10
  });
}

let marker = new google.maps.Marker({
        position: coordenadas,
        map: map,
      });
      

      

