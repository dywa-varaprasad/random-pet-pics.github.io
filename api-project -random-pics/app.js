// grabbing elements from html as nodes to interact with js
const cat_btn = document.querySelector(".cat-button");
const dog_btn = document.getElementById("dog-button");
const cat_result = document.getElementById("cat_result");
const dog_result = document.getElementById("dog_result");
const largeScreen= document.querySelector('.notSmallScreen');
// adding eventListeners to the event handlers
cat_btn.addEventListener("click", getRandomCat);
dog_btn.addEventListener("click", getRandomDog);
largeScreen.addEventListener('click',getRandomCat);
// ctrating callback functions for the event handlers



// first callback for cat random pics
function getRandomCat() {
  fetch("https://aws.random.cat/meow")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      cat_result.innerHTML = `<img src=${data.file} alt="cat" />`;
    });

  document.querySelector("h3").style.display = "block";

}

// second call back function for dog pics
function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //checking if the response is an image or video
      if (data.url.includes(".mp4")) {
        // if the response is a video then the function will again run;
        getRandomDog();
      }
      // else the dom manipulation will happens
      else {
        dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
      }
    });
	document.querySelector("h3").style.display = "block";
}

// mousw event listner for the reverse actions when button was moved

document.querySelector("body").addEventListener("mousemove", mouseEvent);

function mouseEvent() {
  document.querySelector("h3").style.display = "block";
  document.querySelector("h3").style.display = "block";
// newer terenary operator conditionals
  document.querySelector("h3").style.display = "block"
    ? (document.querySelector("h3").style.display = "none")
    : (document.querySelector("h3").style.display = "block");
}
