const element = document.querySelector(".theme-switch")
const body = document.querySelector("body")

element.addEventListener("click", () => {
    const theme = alternateElement()
    alternateTheme(theme)
})

function alternateElement() {

    if (element.classList.contains("white")) {

        element.src = "./img/switch-dark.jpg"
        element.classList.remove("white")
        element.classList.add("dark")

        return "dark-theme"
    
    } else {
        element.src = "./img/switch-sunny.png"
        element.classList.remove("dark")
        element.classList.add("white")

        return "white-theme"
    }
}

function alternateTheme(theme) {
    if (body.attributes.class) {
        body.removeAttribute("class")
    }
    body.classList.add(theme)
}