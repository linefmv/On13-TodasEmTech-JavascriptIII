const objetoJson = [
  {
    "nome": "Marina Sena",
    "foto": "https://portalpopline.com.br/wp-content/uploads/2021/09/Quem-e-Marina-Sena-uma-das-revelacoes-do-Pop-de-2021-2-758x570.jpg",
    "generos": ["Pop"],
    "discografia": ["De Primeira"],
    "instagram": "https://www.instagram.com/amarinasena2/"
  },
  {
    "nome": "Marisa Monte",
    "foto": "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2021/07/marisa-monte-portas-clipe.jpg",
    "generos": ["MPB", "Samba", "R&B"],
    "discografia": ["Mais", "Barulhinho Bom"],
    "instagram": "https://www.instagram.com/marisamonte/?hl=en"
  },
  {
    "nome": "Duda Beat",
    "foto": "https://29horas.com.br/wp-content/uploads/2021/02/2021-01-13-DUDA_BEAT3440-scaled-e1612189751879.jpg",
    "generos": ["MPB", "Pop"],
    "discografia": ["Sinto muito", "Te Amo Lá Fora"],
    "instagram": "https://www.instagram.com/dudabeat/?hl=en"
  }
]


const foto = document.getElementById('photoOfSinger1')
const nameOfSinger = document.getElementById('nameOfSinger1')
const genderOfSinger = document.getElementById('genderOfSinger1')
const discographyOfSinger = document.getElementById('discography1')
const instagramOfSinger = document.getElementById('instagram1')

function dataOfSinger1() {
  foto.setAttribute('src', objetoJson[0].foto);
  nameOfSinger.innerText = objetoJson[0].nome;
  genderOfSinger.innerText = objetoJson[0].generos.join(" - ")
  discographyOfSinger.innerText = objetoJson[0].discografia.join(" - ")
  instagramOfSinger.setAttribute('href', objetoJson[0].instagram)
}
dataOfSinger1()

const foto2 = document.getElementById('photoOfSinger2')
const nameOfSinger2 = document.getElementById('nameOfSinger2')
const genderOfSinger2 = document.getElementById('genderOfSinger2')
const discographyOfSinger2 = document.getElementById('discography2')
const instagramOfSinger2 = document.getElementById('instagram2')

function dataOfSinger2() {
  foto2.setAttribute('src', objetoJson[1].foto);
  nameOfSinger2.innerText = objetoJson[1].nome;
  genderOfSinger2.innerText = objetoJson[1].generos.join(" - ")
  discographyOfSinger2.innerText = objetoJson[1].discografia.join(" - ")
  instagramOfSinger2.setAttribute('href', objetoJson[1].instagram)
}
dataOfSinger2()

const foto3 = document.getElementById('photoOfSinger3')
const nameOfSinger3 = document.getElementById('nameOfSinger3')
const genderOfSinger3 = document.getElementById('genderOfSinger3')
const discographyOfSinger3 = document.getElementById('discography3')
const instagramOfSinger3 = document.getElementById('instagram3')

function dataOfSinger3() {
  foto3.setAttribute('src', objetoJson[2].foto);
  nameOfSinger3.innerText = objetoJson[2].nome;
  genderOfSinger3.innerText = objetoJson[2].generos.join(" - ")
  discographyOfSinger3.innerText = objetoJson[2].discografia.join(" - ")
  instagramOfSinger3.setAttribute('href', objetoJson[2].instagram)
}
dataOfSinger3()