console.log("js-paliedispari");
// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione 
// per capire se la parola inserita è palindroma.
// Questa funzione deve ricevere come input la parola 
// inserita dall’utente e ritornare true se la parola è palindroma
//  e false se la parola non è palindroma

const parola = prompt("Inserisci una parola")
console.log(parola);
const risultato = isPalindrome(parola) // boolean (true | false)

// const parolaInvertita = parola.toLowerCase().split('').reverse().join('')
// console.log(parolaInvertita)

if (risultato === true) {
    console.log('La parola ' + parola + ' è palindroma')
} else {
    console.log(`La parola ${parola} non è palindroma`)
}

function isPalindrome(text) {
    console.log(text)

    text = text.toLowerCase()

    let invertedText = invertiParola(text)

    // let invertedText = ''

    // // pino
    // // generare la stringa invertita
    // for (let i = text.length - 1; i >= 0; i--) {
    // 	// const char = text[i]
    // 	const char = text.charAt(i)
    // 	console.log(char)
    // 	// invertedText = invertedText + char
    // 	invertedText += char
    // }

    // console.log(text, invertedText)

    // o
    // on
    // oni
    // onip

    // SE la parola === parolaInvertita
    if (text === invertedText) {
        // -- return true
        return true
    } else {
        // ALTRIMENTI
        // -- return false
        return false
    }
}

function invertiParola(string) {
    // return string con la parola invertita
    let invertedText = ''

    // pino
    // generare la stringa invertita
    for (let i = string.length - 1; i >= 0; i--) {
        // const char = text[i]
        const char = string.charAt(i)
        console.log(char)
        // invertedText = invertedText + char
        invertedText += char
    }

    return invertedText
}