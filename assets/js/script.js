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
     axios.get(randomMail)
        .then((response) => {
            //catturo la mail dall'oggetto response
            const email = response.data.response
            //ad ogni iterazione genero un list item
            const li = document.createElement('li')
            //ad ogni itearazione genero un list item valorizzato
            li.textContent = email
            //appendo il list item valorizzato nel tag ul
            emailList.appendChild(li)
        })
        .catch(() => {

        })
}

for (let i = 0; i < 10; i++) {
   getMails()
}

const button = document.getElementById('button')
button.addEventListener('click', ()=>{

})