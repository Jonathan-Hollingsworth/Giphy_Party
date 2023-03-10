const gifForm = document.querySelector('form')
const gifInput = document.querySelector('input')
const deleteButton = document.querySelector('#delete')
const gifZone = document.querySelector('section')

$('button').css('border-radius', '10%')
$('#delete').css('background-color', '#ff6a6a')

gifForm.addEventListener('submit', function(evt){
    evt.preventDefault()
    addGif()
    gifInput.value = ""
})

deleteButton.addEventListener('click', function(){
    const allGifs = Array.from(document.querySelectorAll('div'))
    for (const gif of allGifs) {
        gif.remove()
    }
})

async function addGif() {
   const gifs = await axios.get('http://api.giphy.com/v1/gifs/search', { params: {api_key : '8lWAboG3D5I93cJLaXAW9d4stVl3eVRo', q: gifInput.value}})
   const num = Math.floor(Math.random() * 50)
   const randomGif = gifs.data.data[num]
   const url = randomGif.images.original.url
   const newGif = document.createElement('div')
   newGif.innerHTML = `<img src='${url}'></img>`
   gifZone.append(newGif)
}