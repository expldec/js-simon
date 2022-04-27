// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


const startBtn = document.getElementById("start-button");
startBtn.addEventListener("click", function() {
    // Aspetto 2 secondi e faccio diventare rosso il bottone cliccato
    setTimeout(() => {
        console.log(this);
        this.classList.add("hidden"); 

    }, 2000);
    console.log('test');
});


// prende 2 integers: count e max
// restituisce 'count' numeri casuali non ripetuti tra 1 e 'max'
function generateNumbers(count, max) {
    let result = [];
    let i = 0;
    while (i < count) {
        thisRandomNumber = Math.floor(Math.random() * max) + 1;
        if (!result.includes(thisRandomNumber)) {
            result.push(thisRandomNumber);
            i++;
        }
    }
    return result;
}

// prende un array di numeri,
// chiede all'utente via prompt di inserire un numero tante volte quanti sono gli elementi nell'array,
// logga quanti e quali, tra i numeri che l'utente ha inserito, sono presenti anche nell'array originale
function quizNumbers(array) {
    let userAnswers = [];
    let correctAnswers = []
    //chiede un numero alla volta, tante volte quanti sono gli elementi nell'array originale, e li salva in un altro array
    for (let i = 0; i < array.length; i++) {
        userAnswers.push(parseInt(prompt('inserisci numero')));
    }
    // controlla, per ogni numero nell'array, se è presente nell'array delle risposte
    for (let i = 0; i < array.length; i++) {
        if (userAnswers.includes(array[i])) {
            correctAnswers.push(array[i])
        }
    }
    //annuncia nel log i numeri esatti e la loro quantità
    console.log(`hai indovinato ${correctAnswers.length} numeri: ${correctAnswers.join(', ')}`);
}