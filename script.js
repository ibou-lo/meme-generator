const form = document.querySelector("form");
const output = document.querySelector("output");
let memeObjects = [];
let memesList = [];

//when submitting, create object
//object properties: top text, bottom text, URL
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const memeObject = {
    imageFile: document.getElementById("image-url"),
    topText: document.getElementById("top-text").value,
    bottomText: document.getElementById("bottom-text").value,
  };
  memeObjects.push(memeObject);
  addMemeToList(memeObject);
  
  displayMemeList();
  document.getElementById("newMemeForm").reset();
})

//take object and push it into a list
function addMemeToList(object){
  memeObjects.forEach((object, index) => {
    memesList +=
  `
  <div class="image"><img src="${URL.createObjectURL(object.imageFile.files[0])}" alt="image">
  <span onclick="deleteImage(${index})">&times;</span>
  <span id="line-one">${object.topText}</span>
  <span id="line-two">${object.bottomText}</span>
  </div>
  `});
}
//modify function to append
  function displayMemeList(){
    document.getElementById("output")
    output.innerHTML += memesList;
    // output.insertAdjacentHTML("afterend", memesList);
    };

function deleteImage(index) {
  memesList.splice(index, 1);
  displayMemeList();
}

// function displayImages() {
//     memeObjects.forEach((object, index) => {
//       memesList += 
//     })
//     output.innerHTML = images;
    
//     function storeMeme(images){
//       let image='';
//       sessionStorage.setItem('image',JSON.stringify(images));
//     }
    



// function changeText(){
//     document.getElementById("line-one").innerText=(topText.value);
//     document.getElementById("line-two").innerText=(bottomText.value);};


