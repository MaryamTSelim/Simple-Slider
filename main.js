window.addEventListener("load", () => {
    let slider_images = document.querySelectorAll(".slider-image");
    let current_image = 0;
    let next_image = 1;
    let previous_image = slider_images.length - 1;
    let button_left = document.getElementById("btnLeft");
    let button_right = document.getElementById("btnRight");
    let indicators = document.querySelector(".slider-indicators");

    slider_images.forEach(() => {
        indicators.innerHTML += "<div class='indicator'></div>";
    })

    indicators = document.querySelectorAll(".indicator");


    button_right.addEventListener("click", () => {
        if (current_image == slider_images.length - 1) {
            next_image = 0;
        }
        slider_images[current_image].style.animationName = "slider-collapse-forward-animation";
        slider_images[next_image].style.animationName = "slider-expand-forward-animation";
        current_image = next_image;
        next_image++;
        previous_image = current_image == 0 ? slider_images.length - 1 : current_image - 1;

    })
    button_left.addEventListener("click", () => {
        if (current_image == 0) {
            previous_image = slider_images.length - 1;
        }
        slider_images[current_image].style.animationName = "slider-collapse-backward-animation"
        slider_images[previous_image].style.animationName = "slider-expand-backward-animation"

        current_image = previous_image;
        previous_image--;
        next_image = current_image == slider_images - 1 ? 0 : current_image + 1;
    })
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            for (let i = 0; i <= Math.abs(current_image - index); i++) {
                console.log(previous_image, current_image, next_image)
                console.log(index)
                current_image < index ? button_right.click() : button_left.click()
            }

        })
    })


})