// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector("#modal");
const message = document.querySelector("#modal-message");

let likes = document.querySelectorAll(".like-glyph");

for (let emptyHeart of likes) {
  emptyHeart.addEventListener("click", addLike)
}

function addLike(event) {
  if (event.target.textContent === EMPTY_HEART) {
    mimicServerCall()
    .then(function (response) {
      event.target.textContent = FULL_HEART;
      event.target.classList.toggle("activated-heart");
    })
    .catch(function (error) {
      modal.classList.toggle("hidden");
      message.textContent = error;
      setTimeout(function () {
        modal.classList.toggle("hidden")
      }, 3000);
    })
  }
  if (event.target.textContent === FULL_HEART) {
    event.target.textContent = EMPTY_HEART;
    event.target.classList.toggle("activated-heart")
  }
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
