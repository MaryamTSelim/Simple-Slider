window.addEventListener("load", () => {
    let slider_images = document.querySelectorAll(".slider-image");
    let current_image = 0;
    let next_image = 1;
    let previous_image = slider_images.length - 1;
    let button_left = document.getElementById("btnLeft");
    let button_right = document.getElementById("btnRight");
    slider_images.forEach((img) => {
        console.log(img)
    })

    button_right.addEventListener("click", () => {
        console.log("hi")
        if (current_image == slider_images.length - 1) {
            next_image = 0;
        }
        slider_images[current_image].style.animationName = "slider-collapse-forward-animation";
        slider_images[next_image].style.animationName = "slider-expand-forward-animation";
        current_image = next_image;
        next_image++;
        previous_image = current_image == 0 ? slider_images.length - 1 : current_image - 1;

        console.log(previous_image, current_image, next_image)

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

        console.log(previous_image, current_image, next_image)
    })


})