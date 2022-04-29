//Encrypt text function
function encryptText(text) {
    let newText = []
    
    for (let i = 0; i < text.length; i++) {    

        switch(text[i]) {
            case "e":
                newText.push("enter")
                break

            case "i":
                newText.push("imes")
                break
                
            case "a":
                newText.push("ai")
                break
            
            case "o":
                newText.push("ober")
                break
            
            case "u":
                newText.push("ufat")
                break
            
            default:
                newText.push(text[i])
                break
        }
    }

    return newText.join('')
}

//Decrypt text
function decryptText(text) {
    let newText = text
    const regExps = [/enter/g, /imes/g, /ai/g, /ober/g, /ufat/g]
    const letters = ["e", "i", "a", "o", "u"]

    for (let i = 0; i < letters.length; i++) {
        newText = newText.replace(regExps[i], letters[i])
    }
    
    return newText
}
    
//Check invalid characters function
function checkText(text) {
    const lowerCaseExp = new RegExp(/[a-z]/) //https://stackoverflow.com/a/2830891/18740899
    const numberExp = new RegExp(/[0-9]+/) //https://stackoverflow.com/a/25522208/18740899
    const symbolExp = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) //https://stackoverflow.com/a/32311188/18740899
    
    if (lowerCaseExp.test(text) && !numberExp.test(text) && !symbolExp.test(text)) {
        return true
    } else {
        return false
    }
}

//Initialize DOM Elements
const textInput = document.querySelector('main textarea.text-input')
const history = document.querySelector('aside.history')
const historyTexts = document.querySelector('aside.history .texts')

//encryptButton event
const encryptButton = document.querySelector('main button.encrypt')

encryptButton.addEventListener("click", () => {

    if (!checkText(textInput.value)) {
        alert("Por favor, revise que el texto no contenga mayúsculas, símbolos, acentos o números.")
        return
    }

    const encryptedText = encryptText(textInput.value)
    
    history.classList.add("with-results")
    historyTexts.innerHTML = `
        <p class="result">${encryptedText}</p>
    `
})

//decryptButton event
const decryptButton = document.querySelector('main button.decrypt')

decryptButton.addEventListener("click", () => {
    if (!checkText(textInput.value)) {
        alert("Por favor, revise que el texto no contenga mayúsculas, símbolos, acentos o números.")
        return
    }

    const decryptedText = decryptText(textInput.value)
    
    history.classList.add("with-results")
    historyTexts.innerHTML = `
        <p class="result">${decryptedText}</p>
    `
})

//copyButton event
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