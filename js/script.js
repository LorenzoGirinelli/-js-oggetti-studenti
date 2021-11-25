const studente = {
    nome:'lorenzo',
    cognome:'rossi',
    eta: 21,
};

for(let key in studente) {
    // console.log(studente[key])
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
    // console.log(studenti[i]);
    const studente = studenti[i];
    console.log(studente['nome'],studente['cognome'])
}

