// let ourGallery = document.querySelectorAll('.img-group img');

// ourGallery.forEach(img => {
//     img.addEventListener('click', (e) =>{
//         let overlay = document.createElement("div");
        
//        overlay.className = 'popup-overlay';

//         document.body.appendChild(overlay);

//         let popupBox = document.createElement("div");

//         popupBox.className = 'popup-box';

//         let popupImage = document.createElement("img");

//         popupImage.src  = img.src;

//         popupBox.appendChild(popupImage);

//         document.body.appendChild(popupBox);



//         let closeButton = document.createElement("span");
//         let closeButtonText = document.createTextNode("X");
//         closeButton.appendChild(closeButtonText);
//         closeButton.className = 'close-button';
//         popupBox.appendChild(closeButton);



//         });


// });
// $(document).ready(function(){
//     $('.close-button').on('click' , function (e) {

//         console.log(e.target.parentNode);
//         e.target.parentNode.remove();
//         document.querySelector(".popup-overlay").remove();
    
// });
// })


// Get the modal
let ourImg = document.querySelectorAll('.img-group  img');
// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementsByClassName(".myImg");



let modal = document.getElementById("myModal");
let modalImg = document.getElementById("img-modal");
let captionText = document.getElementById("caption");
ourImg.forEach(img=>{

    img.onclick = function(){

  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}});



let span = document.getElementById("close") ;

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}




const allParts = document.querySelectorAll(".parts .a-part ");
// console.log(allParts);

allParts.forEach(part => {

    part.addEventListener('click' , (e) => {

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior:'smooth'

        });

    });

});


let menu = document.getElementById('menu');
let overlay = document.getElementById('overlay')
let box = document.getElementById('menu-box');
let closeMenu = document.getElementById('close-menu');

// menu.onclick = function() {
//   overlay.style.display = "block";
//   box.show();

// }
 menu.onclick = function() {
  overlay.style.display = "block";
    // evt.stopPropagation();
    box.style.display="block";
    // if ($(this).is(menu))
    // menu.toggle(box);
    // else if (!$(this).closest(menu).length)
    // box.hide();
}
closeMenu.onclick = function(){
    overlay.style.display = "none";
    box.style.display="none";
}




