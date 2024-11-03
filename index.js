// ///////  1  //////////

// let buttonCount = 0;

// document.getElementById("createButton").addEventListener("click", function() {
//     buttonCount++;
//     if (buttonCount <= 10) {
//         const newButton = document.createElement("button");
//         newButton.innerText = `Button ${buttonCount}`;
//         newButton.className = "btn";
//         document.getElementById("buttonContainer").appendChild(newButton);
//     } else {
//         alert("Maksimal buttonlar soniga yetdingiz!");
//     }
// });



// /////////  2  //////////////

// document.addEventListener("keydown", function(event) {
//     const colorDiv = document.getElementById("colorDiv");
    
//     switch (event.key) {
//         case "q":
//             colorDiv.style.backgroundColor = "red"; // Q - qizil
//             break;
//         case "s":
//             colorDiv.style.backgroundColor = "yellow"; // S - sariq
//             break;
//         case "d":
//             colorDiv.style.backgroundColor = "darkgreen"; // D - qora
//             break;
//         case "b":
//             colorDiv.style.backgroundColor = "blue"; // B - ko'k
//             break;
//         default:
//             break; 
//     }
// });



// /////////  3  ///////////////


// const colors = ["red", "yellow", "blue", "green", "orange", "purple", "pink"];
// const generateButton = document.getElementById("generateButton");
// const resultDiv = document.getElementById("result");

// generateButton.addEventListener("click", function() {
//     // Tasodifiy raqamni generatsiya qilish
//     const randomNumber = Math.floor(Math.random() * 100) + 1;
//     resultDiv.innerText = randomNumber;

//     // Tasodifiy rangni tanlash
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     document.body.style.backgroundColor = randomColor;
// });



// ///////  4  ////////////////

// const colors = ["red", "yellow", "blue", "green", "orange", "purple", "pink"];
// const toggleButton = document.getElementById("toggleButton");
// let intervalId;
// let isChanging = false;

// toggleButton.addEventListener("click", function() {
//     if (!isChanging) {
//         isChanging = true;
//         toggleButton.innerText = "Rang o'zgartirishni to'xtatish";

//         intervalId = setInterval(function() {
//             const randomColor = colors[Math.floor(Math.random() * colors.length)];
//             document.body.style.backgroundColor = randomColor;
//         }, 2000);
//     } else {
//         isChanging = false;
//         toggleButton.innerText = "Rang o'zgartirishni boshlash";
//         clearInterval(intervalId);
//     }
// });



// ////// 5  ////////////

// const images = [
//     "images.jpeg", // 1-rasm
//     "img.jpg", // 2-rasm
//     "", 

// ];
// let currentIndex = 0;

// const imageElement = document.getElementById("image");
// function changeImage() {
//     currentIndex++;
//     if (currentIndex >= images.length) {
//         currentIndex = 0; 
//     }
//     imageElement.src = images[currentIndex];
// }
// setInterval(changeImage, 2000);