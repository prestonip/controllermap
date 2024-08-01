window.addEventListener("gamepadconnected", (e) => {
    const gp = navigator.getGamepads()[e.gamepad.index];
    console.log(
        "Gamepad connected! at index %d: %s. %d buttons, %d axes.",
        e.gamepad.index,
        e.gamepad.id,
        e.gamepad.buttons.length,
        e.gamepad.axes.length,
    );
    gameLoop();
});

window.addEventListener("gamepaddisconnected", (e) => {
    console.log(
        "Gamepad disconnected from index %d: %s",
        e.gamepad.index,
        e.gamepad.id,
    );
    cancelAnimationFrame(start);
});

const gamepadInfo = document.getElementById("character");
let start;
let x = 0;
let y = 0;

function gameLoop() {
    // const gamepade = navigator.getGamepads();
    // if (!gamepads) {
    //     return;
    // }

    // const gp = gamepads[0];
    // if (gp.buttons[0].pressed) {

    // }
    const gamepads = navigator.getGamepads();
    const gp = gamepads[0]
    gp.buttons.forEach((button, index) => {
        if (button.pressed) {
            console.log(index, " was pressed.");
        }
    });
    // gp.axes.forEach((axes, index) => {
    //     while (axes[index] !== 0){
    //         console.log("Axis ", index, " moved.");
    //     }
    // });
    start = requestAnimationFrame(gameLoop);
}