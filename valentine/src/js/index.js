var currentImageIndex = 1;

function changeImageSad(element) {
  var currentImage = document.getElementById("gambar" + currentImageIndex);
  currentImage.style.display = "none"; 

  currentImageIndex = (currentImageIndex = 1) + 3; 

  var nextImage = document.getElementById("gambar" + currentImageIndex);
  nextImage.style.display = "block"; 

  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  var buttonWidth = element.offsetWidth;
  var buttonHeight = element.offsetHeight;

 
  var randomX = Math.random() * (windowWidth - buttonWidth);
  var randomY = Math.random() * (windowHeight - buttonHeight);

  element.style.position = "absolute"
  element.style.left = randomX + "10px";
  element.style.top = randomY + "10px";

}

function changeImageHappy() {
  var currentImage = document.getElementById("gambar" + currentImageIndex);
  currentImage.style.display = "none"; 

  currentImageIndex = (currentImageIndex = 1) + 1; 

  var nextImage = document.getElementById("gambar" + currentImageIndex);
  nextImage.style.display = "block"; 

  var buttonHide = document.getElementById("button1")
  buttonHide.style.display = "none"

  var buttonHideTwo = document.getElementById("button2")
  buttonHideTwo.style.display = "none"

  var textValue = document.getElementById("value")
    textValue.textContent = "Yeyyyyyyy😍"
}

function refresHandle() {
  location.reload()
}

document.getElementById("refresh").addEventListener('click', refresHandle)