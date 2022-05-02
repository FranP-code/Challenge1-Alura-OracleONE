const copyButton = document.querySelector('aside.history button.copy-last-text-message')

copyButton.addEventListener("click", () => {

    const elements = historyTexts.querySelectorAll(".result")

    if (elements.length === 0) {
        return
    }

    navigator.clipboard.writeText(elements[elements.length - 1].textContent)

    copyButton.classList.add("element-copied")
    
    const buttonTextContent = copyButton.textContent
    copyButton.textContent = "👌"

    setTimeout(() => {
        copyButton.textContent = buttonTextContent 
        copyButton.classList.remove("element-copied")
    }, 1000)
})