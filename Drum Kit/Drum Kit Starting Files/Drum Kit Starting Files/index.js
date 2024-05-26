var len=document.querySelectorAll(".drum").length
for (var i=0;i<len;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",soundMaker);

  function soundMaker(){
     var buttonPressed = this.innerHTML;
     makeHellNoice(buttonPressed);
     buttonAnimation(buttonPressed);

     function buttonAnimation(action){
     var actionButton =  document.querySelector("."+ action);
     actionButton.classList.add("pressed");

     setTimeout(function () {
       actionButton.classList.remove("pressed");
     }, 100);

     }


     document.addEventListener("keypress",soundFromKeys);
         function soundFromKeys(event){

           makeHellNoice(event.key);
           buttonAnimation(event.key);

         }


  function makeHellNoice(key){
    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;

      case "k":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

        case "j":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
        break;

      default:

}


}
}
}
