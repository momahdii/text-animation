let spanValue = document.getElementById("span")

setTimeout(function () {
    animation()
    setInterval(function () {
        animation()
    }, 12000)
}, 4000)

function animation() {
    setTimeout(function () {
        spanValue.innerHTML = "programmer";
        spanValue.style.animation = "2s anime2"
    }, 000)
    setTimeout(function () {
        spanValue.style.animation = "2s anime3"
    }, 4000)
    setTimeout(function () {
        spanValue.innerHTML = "developer";
        spanValue.style.animation = "2s anime4"
    }, 6000)
    setTimeout(function () {
        spanValue.style.animation = "2s anime1"
    }, 10000)
}