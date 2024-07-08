function mehurckastoUrejanje(arr) {
    // Pridobimo dolžino seznama
    let n = arr.length;

    // Zunanja zanka: iteriramo čez celoten seznam
    for (let i = 0; i < n; i++) {
        // Notranja zanka: iteriramo do zadnjega neurejenega elementa
        // n - i - 1 zagotavlja, da ne primerjamo elementov, ki so že na pravilnem mestu
        for (let j = 0; j < n - i - 1; j++) {
            // Primerjamo trenutni element z naslednjim
            if (arr[j] > arr[j + 1]) {
                // Če je trenutni element večji od naslednjega, ju zamenjamo

                // Uporabimo začasno spremenljivko temp za shranjevanje vrednosti trenutnega elementa
                const temp = arr[j];
                console.log('Shranjena vrednost trenutnega elementa:', temp)

                // Postavimo vrednost naslednjega elementa na mesto trenutnega elementa
                arr[j] = arr[j + 1];
                console.log('Vrednost trenutnega elementa:', arr[j])

                // Postavimo vrednost iz temp (prvotna vrednost trenutnega elementa) na mesto naslednjega elementa
                arr[j + 1] = temp;
                console.log('Vrednost naslednjega elementa:', arr[j + 1])

                // Po zamenjavi elementov, vmesni rezultat:
                console.log(`Zamenjava: ${arr[j + 1]} in ${arr[j]}`);
                console.log(`Vmesni seznam: [${arr.join(", ")}]`);

                /**
                 * Uporabimo lahko tudi destrukturiranje za zamenjavo elementov, kar naredi kodo bolj čisto in berljivo in učinkovito omogoča zamenjavo brez potrebe po začasni spremenljivki
                 * [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                 * */
            }
        }
        // Po vsaki iteraciji zunanje zanke je največji element nameščen na pravilno mesto
        // S tem se zmanjša število elementov, ki jih je treba primerjati v naslednji iteraciji
    }
    // Vrne urejeni seznam
    return arr;
}

// Primer uporabe funkcije mehurcastega urejanja
let seznam = [64, 34, 25, 12, 22, 11, 90]; // Ustvarimo neurejen seznam
let urejenSeznam = mehurckastoUrejanje(seznam); // Uporabimo funkcijo za urejanje seznama
console.log("Urejen seznam:", urejenSeznam); // Izpišemo urejeni seznam