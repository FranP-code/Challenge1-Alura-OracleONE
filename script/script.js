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
const encryptButton = document.querySelector('main button.encrypt')
const textInput = document.querySelector('main textarea.text-input')
const history = document.querySelector('aside.history')

encryptButton.addEventListener("click", () => {

    if (!checkText(textInput.value)) {
        alert("Por favor, revise que el texto no contenga mayúsculas, símbolos, acentos o números.")
        return
    }

    const encryptedText = encryptText(textInput.value)
    
    history.classList.add("with-results")
    history.innerHTML = `
        <p class="result">${encryptedText}</p>
    `
})