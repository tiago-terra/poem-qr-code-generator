
function submitForm(event) {
  event.preventDefault();
  
  var poemText = document.getElementById('poem_text').value;
  var poemAuthor = document.getElementById('poem_author').value;
  var qrCodeSize = document.getElementById('qrcode-size').value;
  generateQrCode(poemText, poemAuthor, qrCodeSize)
}


function generateQrCode(poemText, poemAuthor, qrCodeSize){
  divId = document.getElementById("qrcode")
  divId.innerHTML = "" // resets div content before new generation
  var baseUrl = generateUrl()
  var urlWithParams = `${baseUrl}/index.html?poem=${poemText}&author=${poemAuthor}`.replaceAll(' ', '%20')

  new QRCode(divId, { text: urlWithParams,  width: qrCodeSize, height: qrCodeSize});
  document.getElementById("qrcode-url").innerHTML = "QR Code URL"
  document.getElementById("qrcode-url").href = urlWithParams
}


function generateUrl(){
  var host = window.location.origin
  var subpaths = window.location.pathname.split('/').slice(0,-1)
  subpaths.forEach((x, i) => host = `${host}/${x}`)
  host = host.replace(/([^:]\/)\/+/g, "$1");

  return host
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
