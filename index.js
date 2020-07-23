var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++)
 {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
          var buttonInnerHTML = this.innerHTML;

            makeSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);

        });
 }
          document.addEventListener("keydown", function(event){
                      makeSound(event.key);
                      buttonAnimation(event.key);

          });


          function makeSound(key){
            switch(key){
                case "s":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;

                case "w":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;

                case "a":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;

                case "p":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;

                case "n":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;

                case "i":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;

                case "l":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;

                default: console.log(buttonInnerHTML);
            }

          }


function buttonAnimation(currentkey){
  var activeButton = document.querySelector("." + currentkey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  },100);


}
