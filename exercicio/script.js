const objetoJson = {
  "nome": "Liniker",
  "foto": "../assets/liniker.webp",
  "generos": ["MPB", "Soul", "R&B", "Blues"],
  "discografia": ["Remonta", "Goela Abaixo", "Indigo Borboleta Azul"], 
  "instagram": "https://www.instagram.com/linikeroficial/"
}

// Suponha que nosso projeto consiste em um site de informações sobre cantoras brasileiras e na página em questão a usuária selecionou a cantora Liniker, e a API nos retornou um JSON com todas as informações que precisamos (armazenado na variável objetoJson acima), então devemos popular nosso HTML com essas informações utilizando JavaScript 

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