
function submitForm(event) {
  event.preventDefault();
  
  var poemText = document.getElementById('poem_text').value;
  var poemAuthor = document.getElementById('poem_author').value;

  generateQrCode(poemText, poemAuthor)

}


function generateQrCode(poemText, poemAuthor){
  var baseUrl = window.location.hostname
  divId = document.getElementById("qrcode")
  divId.innerHTML = "" // resets div content before new generation
  var urlWithParams = `${baseUrl}/index.html?poem=${poemText}&author=${poemAuthor}`

  new QRCode(divId, { text: urlWithParams,  width: 128, height: 128});
  console.log(urlWithParams)
}

function displayPoem(){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const poem = urlParams.get('poem')
  const author = urlParams.get('author')
  console.log(author)

  document.getElementById("poem_text").innerText = poem;
  document.getElementById("poem_author").innerText = `- ${author}`;
}

window.onload = function(){

  if (document.getElementById("poem") != null){
    displayPoem()
  }

};
