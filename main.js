



// Use a data structure like an array to store values - Gallery array to store uploaded images
let gallery = ['./images/sea.jpg', './images/piano.JPG', './images/me.JPG', './images/bubblesea.jpg'];


let h1Elements = document.getElementsByClassName("title");

for (let i = 0; i < h1Elements.length; i++) {
   // Make changes to the HTML or CSS using JavaScript
  h1Elements[i].style.color = 	"#bf00ff";
}

// Use functions to make code reusable - Function to handle image upload and update the gallery
function handleImageUpload(img) {
  gallery.push(img.src);
  updateGallery();
   //Alert user of upload
    promptUser();
}

// Use console.log and alert appropriately to display messages-Display alert to user
function promptUser() {

  console.log('Prompting user about upload...');

  window.alert("Congratulations! Your image was added to the gallery");

}

// Use functions to make code reusable - Function to update the gallery with images from the array
function updateGallery() {
  const container = document.getElementById('gallery');
  container.innerHTML = '';

  // Use a loop or a while loop to reduce repetition
  for (let imgSrc of gallery) {
    // Make changes to the HTML or CSS using JavaScript
    let img = document.createElement('img');
    img.src = imgSrc;
    container.appendChild(img);
  }
}

// Get input from the user on a web page - Get file input element
const input = document.getElementById('imageInput');

// Use an event to trigger a change to a web page - When file input changes (image selected)
input.addEventListener('change', function () {
  let files = this.files;

  //Use a loop or a while loop to reduce repetition
  for (let file of files) {

    // Use boolean values and if..else statements to branch logic of your program - checks if file is image
    let isFileImageBoolean = file.type.startsWith('image/')
    console.log(isFileImageBoolean)
    if (isFileImageBoolean) { // Check if the file is an image
      let img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      handleImageUpload(img);
    } else {
      //Use console.log and alert appropriately to display messages
      console.log('Invalid file type');
      alert('Please uplode an image file only');
    }
  }
});

// Use an event to trigger a change to a web page - Initialize the gallery when the page loads
window.addEventListener('load', updateGallery);