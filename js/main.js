const screen = document.querySelector(".screen")

const buttonTurnOn = document.querySelector(".btn-turn-on")

buttonTurnOn.addEventListener("click", () =>{
    screen.classList.toggle("on");
});
