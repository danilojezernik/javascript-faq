## Bubble Sort Algorithm Explained

Mehurčkasto urejanje (ang. Bubble Sort) je preprosti algoritem za urejanje, ki se uporablja za urejanje seznama elementov (kot so številke) v naraščajočem vrstnem redu. Algoritem večkrat prehaja skozi seznam, primerja sosednje elemente in jih zamenja, če so v napačnem vrstnem redu. Ta postopek se ponavlja, dokler seznam ni popolnoma urejen. Ime mehurčasto urejanje izhaja iz načina, kako manjši elementi "mehurčkajo" na vrh seznama (ali večji elementi potonejo na dno) z vsakim prehodom skozi seznam.

Kako deluje algoritem mehurčastega urejanja:

1. **Inicializacija procesa**: Začnemo z neurejenim seznamom elementov. 
2. **Zunanja zanka**: Iteriramo čez seznam n krat, kjer je n dolžina seznama. 
3. **Notranja zanka**: Za vsak element v seznamu ga primerjamo z naslednjim elementom. 
4. **Primerjava in zamenjava**: Če je trenutni element večji od naslednjega, ju zamenjamo. 
5. **Ponovitev**: Nadaljujemo postopek za naslednje elemente, dokler ne pridemo do konca seznama. Z vsako iteracijo zunanje zanke je največji neurejen element postavljen na pravilno mesto. 
6. **Konec procesa**: Ko je seznam popolnoma urejen, se postopek ustavi.

### Implementacija mehurčkastega urejanja v JavaScript
```javascript
// Algoritem mehurčastega urejanja
function mehurckastoUrejanje(arr) {
    // Pridobimo dolžino seznama
    let n = arr.length;

    // Zunanja zanka: iteriramo čez celoten seznam
    for (let i = 0; i < n; i++) {
        // Notranja zanka: iteriramo do zadnjega neurejenega elementa
        for (let j = 0; j < n - i - 1; j++) {
            // Primerjamo trenutni element z naslednjim
            if (arr[j] > arr[j + 1]) {
                // Zamenjamo elemente, če so v napačnem vrstnem redu
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    // Vrne urejeni seznam
    return arr;
}

// Primer uporabe funkcije mehurcastega urejanja
let seznam = [64, 34, 25, 12, 22, 11, 90];
let urejenSeznam = mehurcastoUrejanje(seznam);
console.log("Urejen seznam:", urejenSeznam);
```

### Podrobna razlaga
- **Inicializacija**: Funkcija `mehurckastoUrejanje` sprejme seznam `arr` kot vhod in določi njegovo dolžino `n`.
- **Zunanja zanka (i)**: Teče n krat, s čimer zagotavlja, da je vsak element preverjen in postavljen na svoje mesto.
- **Notranja zanka (j)**: Teče od začetka seznama do zadnjega neurejenega elementa (ki se z vsako iteracijo zunanje zanke zmanjšuje). 
  - **Primerjava**: Za vsak par sosednjih elementov preverimo, ali je trenutni element (`arr[j]`) večji od naslednjega (`arr[j + 1]`).
  - **Zamenjava**: Če je trenutni element večji, zamenjamo oba elementa z uporabo destrukturiranja polja.
- **Vrni**: Po vseh iteracijah je seznam urejen in funkcija vrne urejeni seznam.

### Uporaba

Mehurčasto urejanje se pogosto uporablja v izobraževalnih okoljih za učenje koncepta algoritmov za urejanje zaradi njegove enostavnosti. Vendar pa ni najučinkovitejši algoritem za velike nabore podatkov. Tukaj je nekaj primerov resničnih situacij, kjer se lahko uporablja mehurčasto urejanje:

1. **Izobraževalni nameni**: Poučevanje osnov algoritmov za urejanje in algoritmičnega razmišljanja.
2. **Majhni nabori podatkov**: Urejanje majhnih seznamov ali polj, kjer je enostavnost implementacije pomembnejša od učinkovitosti.
3. **Predhodni korak v bolj zapletenih algoritmih**: Kot predhodni korak v bolj zapletenih algoritmih za urejanje ali manipulacijo podatkov, kjer je treba majhne segmente podatkov urediti.

### Zaključek
Mehurčasto urejanje je preprost in intuitiven algoritem, idealen za razumevanje osnovnih načel urejanja. Čeprav morda ni primeren za velike nabore podatkov zaradi svoje neučinkovitosti, zagotavlja trdno osnovo za učenje naprednejših tehnik urejanja.