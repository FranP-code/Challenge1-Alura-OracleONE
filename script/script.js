const history = []

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
const historyElement = document.querySelector('aside.history')
const historyTexts = document.querySelector(".history .texts")

//encryptButton event
const encryptButton = document.querySelector('main button.encrypt')

encryptButton.addEventListener("click", () => {

    if (!checkText(textInput.value)) {
        alert("Por favor, revise que el texto no contenga mayúsculas, símbolos, acentos o números.")
        return
    }

    const encryptedText = encryptText(textInput.value)
    addElementToHistory(encryptedText)
})

//decryptButton event
const decryptButton = document.querySelector('main button.decrypt')

decryptButton.addEventListener("click", () => {
    if (!checkText(textInput.value)) {
        alert("Por favor, revise que el texto no contenga mayúsculas, símbolos, acentos o números.")
        return
    }

    const decryptedText = decryptText(textInput.value)
    addElementToHistory(decryptedText)
})

//history functions

function addElementToHistory(text){
    const element = document.createElement("p")
    element.classList.add("result")
    element.textContent = text

    history.unshift(element)
    applyHistory()
}

function applyHistory() {
    const documentFragment = document.createDocumentFragment()
    
    history.forEach(element => {
        documentFragment.appendChild(element)
    });
    
    historyTexts.replaceChildren(documentFragment)
    historyElement.classList.add("with-results")
}