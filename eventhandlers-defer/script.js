let btn = document.getElementById('mybutton');
btn.addEventListener("click", function () {
    alert('button clicked');
})

const adButtonClass = function () {
    btn.classList.add("round-border");
}
btn.addEventListener("click", adButtonClass);

const toggleColor = function () {
    let btn = document.getElementById("mybutton2");
    btn.addEventListener("click", function () {
        let bodyColor = document.querySelector("body");
        bodyColor.classList.toggle("red-background");
    })
}
toggleColor();