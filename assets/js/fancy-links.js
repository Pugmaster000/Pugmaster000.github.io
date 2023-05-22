const fade = document.querySelector(".fade");

document.querySelectorAll("a.fancy-link").forEach(item => {
    item.addEventListener("click", e => {
        e.preventDefault();
        fade.style.left = e.clientX + "px";
        fade.style.top = e.clientY + "px";

        fade.style.animationName = "grow";
        fade.style.animationDuration = "1s";
        fade.style.animationTimingFunction = "ease";
        fade.style.borderRadius = "50%";
        fade.style.width = "100vmax";
        fade.style.height = "100vmax";
        setTimeout(() => window.location.href = item.href, 1000);
    });
});