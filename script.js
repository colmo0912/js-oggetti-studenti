
//creo un oggetto come le proprietà nome, cognome ed età

var studente = {

    nome:" ",
    cognome:" ",
    eta:" "
    
}

// stampo le proprietà dell'oggetto con il ciclo

for (var key in studente){

    console.log(key)
}

//creo un array di oggetti di studenti

var gruppoStudenti = [

    studente1 = {
        nome:"Andrea",
        cognome:"Moi"
    },
    studente2 = {
        nome:"Mario",
        cognome:"Bianchi"
    },

    studente3 = {
        nome:"Carlo",
        cognome:"Rossi"
    }


];
console.log(gruppoStudenti)

//stampo con un ciclo tutti i nomi e i cognomi degli studenti

for (var i = 0; i<gruppoStudenti.length; i++){

    console.log(gruppoStudenti[i].nome + " " + gruppoStudenti[i].cognome)
}

//creo i 3 prompt e le variabili in cui salvo i dati inseriti dall'utente

var nuovoStudenteNome = prompt("Digita il nome del nuovo studente")
var nuovoStudenteCognome = prompt("Digita il cognome del nuovo studente")
var nuovoStudenteEta = prompt("Digita l'età del nuovo studente")
console.log("Il nuovo sudente si chiama " + nuovoStudenteNome + " " + nuovoStudenteCognome + " e ha " + nuovoStudenteEta + " anni")