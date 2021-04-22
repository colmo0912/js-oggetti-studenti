
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
        cognome:"Moi",
        eta: 39
    },
    studente2 = {
        nome:"Mario",
        cognome:"Bianchi",
        eta: 20
    },

    studente3 = {
        nome:"Carlo",
        cognome:"Rossi",
        eta: 25
    }


];
console.log(gruppoStudenti)

//stampo con un ciclo tutti i nomi e i cognomi degli studenti

for (var i = 0; i<gruppoStudenti.length; i++){

    console.log(gruppoStudenti[i].nome + " " + gruppoStudenti[i].cognome)
}

//creo i 3 prompt e le variabili in cui salvo i dati inseriti dall'utente
//i prompt sono all'interno di un nuovo oggetto e gli imput sono i valori che saranno associtati
// a nome, cognome ed età

var stutente4 = {

    nome : prompt("Digita il nome del nuovo studente"),
    cognome : prompt("Digita il cognome del nuovo studente"),
    eta : prompt("Digita l'età del nuovo studente")
    
}



console.log(gruppoStudenti.push(stutente4))