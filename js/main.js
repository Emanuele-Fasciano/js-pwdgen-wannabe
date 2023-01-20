let nome_user = prompt("Qual'è il tuo nome?")
let cognome_user = prompt("Qual'è il tuo cognome?")
let colore_pref_user = prompt("Qual'è il tuo colore preferito?")

const welcome_message = `${nome_user}${cognome_user}${colore_pref_user}23`

document.getElementById("welcome-title").innerHTML = welcome_message