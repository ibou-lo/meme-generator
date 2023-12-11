document.addEventListener("DOMContentLoaded", function() {

const Form = document.querySelector("#Form");
const imageInput = Form.imageurl;
const topTextInput = Form.memetoptext;
const bottomTextInput = Form.memebottomtext;
const results = document.querySelector('#results');

Form.addEventListener('submit',function(evt) {

    evt.preventDefault();
 
    

    const newMeme = addMeme();
    const newX = addX();
    const newImage = addImage(imageInput.value);
    const newTopText = addTopText(topTextInput.Value);
    const newBottomText = addBottomText(bottomTextInput.value);
    
    results.appendChild(newMeme);
    newMeme.appendChild(newX);
    newMeme.appendChild(newImage);
    newMeme.appendChild(newTopText);
    newMeme.appendChild(newBottomText);

    console.log(newImage);
})



results.addEventListener('click', function(e) {
    console.log(e.target);
    e.target.parentElement.remove();
})


function addMeme() {
    const meme = document.createElement('div');
    meme.classList.add('meme');
    return meme;
}

function addX() {
    const x = document.createElement('div');
    x.innerText = '×';
    x.classList.add('x');
    console.log(x.innerText);
    return x;
}

function addImage() {
    const image = document.createElement('img');
    
    image.classList.add('image');
    image.src = imageInput.value; 
    console.log(" the src is " + image.src);
    
    return image;
}

function addTopText() {
    const topText = document.createElement('p');

    topText.classList.add('topText');
    topText.innerText = topTextInput.value;
    return topText;
}

function addBottomText() {
    const bottomText = document.createElement('p');

    bottomText.classList.add('bottomText');
    bottomText.innerText = bottomTextInput.value;
    console.log(bottomText.value);
    return bottomText;
    
}

console.log(imageInput);
});

//class that decides the height and width of each Meme
//for each click, adds an image inside the div of class of Meme create a div using dom manipulation that contains each
//add a delete button that removes the entire div