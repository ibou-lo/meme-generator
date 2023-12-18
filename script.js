const form = document.querySelector("form");
const output = document.querySelector("output");
let memeHtml;
var index = 0;

//when submitting, create object
//object properties: top text, bottom text, URL
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const memeObject = {
    imageFile: document.getElementById("image-url"),
    topText: document.getElementById("top-text").value,
    bottomText: document.getElementById("bottom-text").value,
  };
  addMemeToList(memeObject);
  

  document.getElementById("newMemeForm").reset();
})


function addMemeToList(object){

    memeHtml =
  `
  <div class="image" id="meme${index}"><img src="${URL.createObjectURL(object.imageFile.files[0])}" alt="image">
  <span onclick="deleteImage(${index})">&times;</span>
  <span id="line-one">${object.topText}</span>
  <span id="line-two">${object.bottomText}</span>
  </div>
  `
  
  output.innerHTML += memeHtml;
  index++;
}


function deleteImage(index) {
  document.querySelector("#meme"+index).remove();
}