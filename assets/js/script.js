/*
Descrizione

Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus

Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)

*/
const randomMail = 'https://flynn.boolean.careers/exercises/api/random/mail'
const emailList = document.getElementById('email-list')

function getMails() {
    //pulisco la lista precedente
    emailList.innerHTML = ''

    //creo un array di 10 oggetti email casuali
    const emails = []
    for (let i = 0; i < 10; i++) {
        emails.push(axios.get(randomMail))

    }

    // Uso Promise.all per attendere tutte le chiamate
    Promise.all(emails)
        .then((responses) => {
            // Ogni response contiene una mail
            responses.forEach((response) => {
                const email = response.data.response;
                const li = document.createElement('li');
                li.textContent = email;
                emailList.appendChild(li);
            });
        })
        .catch((error) => {
            console.error('Errore nel recupero delle email:', error);
        });
}

// Prima generazione automatica di 10 mail all’avvio
getMails();

// Genera nuove mail al click del bottone
button.addEventListener('click', getMails);