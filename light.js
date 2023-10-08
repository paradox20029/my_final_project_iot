document.addEventListener("DOMContentLoaded", function () {
    const brightnessInputs = document.querySelectorAll(".brightness-input");
    const colorOptions = document.querySelectorAll(".color-label");

    brightnessInputs.forEach((brightnessInput, index) => {
        brightnessInput.addEventListener("input", () => {
            updateLight(index);
        });
    });

    colorOptions.forEach(colorOption => {
        colorOption.addEventListener("click", () => {
            const color = colorOption.style.backgroundColor;
            // Get the index of the clicked color and update the corresponding light
            const index = Array.from(colorOptions).indexOf(colorOption);
            updateColor(index, color);
        });
    });

    function updateLight(index) {
        const brightnessInput = brightnessInputs[index];
        const lightCircle = document.getElementById(`light-circle-${index + 1}`);
        const brightnessValue = brightnessInput.value;
        lightCircle.style.boxShadow = `0px 0px 20px 0px rgba(0, 0, 0, ${brightnessValue / 100})`;
    }

    function updateColor(index, color) {
        const lightCircle = document.getElementById(`light-circle-${index + 1}`);
        lightCircle.style.backgroundColor = color;
    }
});
