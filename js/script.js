const studente = {
    nome:'lorenzo',
    cognome:'rossi',
    eta: 21,
};

for(let key in studente) {
}

const studenti = [
    {
        nome:'lorenzo',
        cognome:'rossi',
        eta: 21,
    },
    {
        nome:'francesco',
        cognome:'verdi',
        eta: 20,
    },
    {
        nome:'sara',
        cognome:'bianchi',
        eta: 19,
    }
]
for(let i = 0; i < studenti.length; i++) {
    const studente = studenti[i];
    console.log(studente['nome'],studente['cognome'])
}

const user = {
    nome: prompt('Digita il tuo nome'),
    cognome: prompt('Digita il tuo cognome'),
    eta: prompt('Digita la tua eta'),
}
console.log(user['nome'],user['cognome'],user['eta']);
