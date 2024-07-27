document.addEventListener("DOMContentLoaded", function() { 
    const basket = document.getElementById("basket");
    const apple = document.getElementById("apple");
    let basketPosition = 160;
    let applePosition = 0;
    let appleLeft = Math.floor(Math.random() * 370); // Math ? Floor ? 
    let score = 0;

    function moveBasket(event) {
        if (event.key === "ArrowLeft" && basketPosition > 0) { // Key ? 
            basketPosition -= 40; // Velocidad de la canasta hacia la izquierda
        } else if (event.key === "ArrowRight" && basketPosition < 320) {
            basketPosition += 40; // Velocidad de la canasta hacia la derecha
        }
        basket.style.left = basketPosition + "px"; // styke.left 
    }

    function dropApple() {
        apple.style.top = applePosition + "px";
        apple.style.left = appleLeft + "px";
        applePosition += 1; // Cambio de velocidad  

        if (applePosition > 570) {
            if (appleLeft > basketPosition && appleLeft < basketPosition + 80) {
                score++; // contador 
                alert("Atrapaste la Manzana! Score: " + score); // alert saca mensajes para el usuario final 
            } else {
                alert("Intentalo de nuevo! Score: " + score);
            }
            resetApple();
        }

        requestAnimationFrame(dropApple);
    }

    function resetApple() {
        applePosition = 0;
        appleLeft = Math.floor(Math.random() * 370);
    }

    document.addEventListener("keydown", moveBasket);
    dropApple();
});
