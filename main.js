
// Artwork array
let gallery = [];

// Handle form submit
//    document.getElementById('addArtForm').addEventListener('submit', function (e) {
//        // Prevent page reload
//        e.preventDefault();

//        // Prompt the user for what they are looking for
//        const searchValue = prompt('What are you looking for?');

//        // Check if the user entered a search term
//        if (searchValue !== null) {
//            // Get input value
//            let newArtwork = document.getElementById('artwork').value;

//            // Add to array
//            gallery.push(newArtwork);

//            // Render gallery
//            displayGallery();

//            // Display the artwork name and search term
//            alert(`You entered "${newArtwork}" and you are looking for: ${searchValue}`);
//        }
//    });

//    // Display thumbnails
//    function displayGallery() {
//        // Clear current gallery
//        document.getElementById('gallery').innerHTML = '';

//        // Loop through array
//        for (let i = 0; i < gallery.length; i++) {
//            // Create element
//            let thumb = document.createElement('img');
//            thumb.src = 'thumbnails/' + gallery[i] + '.jpg';

//            // Add to gallery
//            document.getElementById('gallery').appendChild(thumb);
//        }
//    }

// Function to handle image upload
// Function to handle image upload
function handleImageUpload() {
    // Your existing image upload logic here
}

// Function to prompt the user
function promptUser(imageName) {
    window.alert("Congratulations! " + imageName + " was added to the gallery");
}



// run this code once the HTML and CSS are loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select the element with the class name
    let titles = document.getElementsByClassName("title");
    // Loop through all the p tags and change their styling
    for (let i = 0; i < titles.length; i++) {
        titles[i].style.color = "#1a2328";
    }

    const imageInput = document.getElementById('imageInput');
    const imageContainer = document.getElementById('imageContainer');
    const errorMessage = document.getElementById('errorMessage');
    const maxSizeInKB = 900; // 1MB in KB (adjust as needed)

    imageInput.addEventListener('change', () => {
        const files = imageInput.files;
        console.log(files[0])
        const maxWidth = 900; // Maximum width for the displayed images

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = new Image();
                    img.src = e.target.result;

                    img.onload = () => {
                        const scaleFactor = maxWidth / img.width;
                        const thumbnailWidth = img.width * scaleFactor;
                        const thumbnailHeight = img.height * scaleFactor;

                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        canvas.width = thumbnailWidth;
                        canvas.height = thumbnailHeight;
                        ctx.drawImage(img, 0, 0, thumbnailWidth, thumbnailHeight);

                        const thumbnailImage = new Image();
                        thumbnailImage.src = canvas.toDataURL('image/jpeg', 0.7); // Convert to JPEG format (adjust quality as needed);
                        thumbnailImage.style.maxWidth = '100%';
                        thumbnailImage.style.height = 'auto';
                        imageContainer.appendChild(thumbnailImage);

                        // Get the image name and display the prompt
                        const imageName = file.name;
                        promptUser(imageName);
                    };
                };
                reader.readAsDataURL(file);
            }
        }
        // Clear the input value to allow selecting more files
        imageInput.value = '';
    });

    
});
