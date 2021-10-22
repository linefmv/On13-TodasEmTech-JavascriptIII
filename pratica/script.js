
const objetoJson = {
  "nome": "Liniker",
  "foto": "../assets/liniker.webp",
  "generos": ["MPB", "Soul", "R&B", "Blues"],
  "discografia": ["Remonta", "Goela Abaixo", "Indigo Borboleta Azul"], 
  "instagram": "https://www.instagram.com/linikeroficial/"
}


const photoOfSinger = document.getElementById('photography')
const nameOfSinger = document.getElementById('title')
const genderOfSinger = document.getElementById('gender')
const discographyOfSinger = document.getElementById('discography')
const instagramOfSinger = document.getElementById('instagram')

function dataOfSinger() {
  photoOfSinger.setAttribute('src', objetoJson.foto);
  nameOfSinger.innerText = objetoJson.nome;
  genderOfSinger.innerText = objetoJson.generos.join(" - ")
  discographyOfSinger.innerText = objetoJson.discografia.join(" - ")
  instagramOfSinger.setAttribute('href', objetoJson.instagram)
}

dataOfSinger()