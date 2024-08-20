# Razumevanje algoritmov in Big O notacije

## Uvod

V svetu računalništva in programiranja so algoritmi temelj reševanja problemov. Ne glede na to, ali razvrščate seznam,
iščete vrednost v podatkovni zbirki ali optimizirate proces, je algoritem orodje, ki opravi delo. Vendar pa moramo za
razumevanje učinkovitosti teh algoritmov imeti način, kako jih izmeriti in primerjati. Tukaj pride na vrsto Big O
notacija.

## Kaj je algoritem?

Algoritem je postopni postopek ali niz pravil, namenjenih reševanju specifičnega problema ali izvedbi naloge. V
kontekstu programiranja algoritem prejme vhodne podatke, jih obdela skozi vrsto korakov in nato ustvari izhod.

### Primer:

Algoritem za seštevanje dveh števil:

1. Vzemi prvo število
2. Vzemi drugo število
3. Seštej obe številki
4. Vrni rezultat

## Kaj je Big O notacija?

Big O notacija je matematični koncept, ki se uporablja za opis učinkovitosti algoritma v smislu časa in prostora.
Natančneje, meri, kako se čas izvajanja ali prostorske zahteve algoritma spreminjajo glede na velikost vhodnih podatkov.
Gre za način izražanja najslabšega možnega scenarija, kako dolgo bo algoritem trajal ali koliko pomnilnika bo porabil.

### Zakaj je Big O pomemben?

Big O notacija vam pomaga izbrati najučinkovitejši algoritem, ko imate na voljo več možnosti za reševanje istega
problema.

## Pogoste Big O notacije

Tukaj so nekatere najpogostejše Big O notacije:

- **O(1) - Konstanti čas:** Čas izvajanja algoritma se ne spremeni ne glede na velikost vhodnih podatkov.
    - *Primer:* Dostop do elementa v tabeli po indeksu.

- **O(log n) - Logaritemski čas:** Čas izvajanja algoritma se povečuje logaritemsko glede na povečanje velikosti vhodnih
  podatkov.
    - *Primer:* Binarično iskanje v urejeni tabeli.

- **O(n) - Linearni čas:** Čas izvajanja algoritma se povečuje linearno z velikostjo vhodnih podatkov.
    - *Primer:* Iteracija skozi vse elemente v seznamu.

- **O(n log n) - Log-linearni čas:** Kombinacija linearnega in logaritemskega časa.
    - *Primer:* Merge Sort, Quick Sort (povprečen primer).

- **O(n^2) - Kvadratični čas:** Čas izvajanja algoritma se povečuje kvadratično z velikostjo vhodnih podatkov.
    - *Primer:* Bubble Sort, Insertion Sort.

- **O(2^n) - Eksponentni čas:** Čas izvajanja algoritma se podvoji z vsakim dodatnim vhodnim elementom.
    - *Primer:* Rekurzivni algoritmi za izračun Fibonaccijevega zaporedja.

- **O(n!) - Faktorielni čas:** Čas izvajanja algoritma se povečuje faktorielno z velikostjo vhodnih podatkov.
    - *Primer:* Algoritmi grobe sile, ki generirajo vse možne permutacije niza.

## Vizualizacija Big O

Predstavljajte si graf, kjer os x predstavlja velikost vhoda (n), os y pa čas ali prostor, ki ga algoritem potrebuje.
Vsaka Big O notacija ustreza različni krivulji na tem grafu:

- O(1) bi bila ravna črta
- O(log n) bi bila krivulja, ki se počasi dviga
- O(n) bi bila diagonalna črta, ki gre navzgor
- O(n^2) bi bila strmejša krivulja
- O(2^n) bi se močno dvignila

![Alt text](https://github.com/danilojezernik/javascript-faq/blob/master/media/algorithm.jpeg)

## Praktični vidiki

Medtem ko je Big O notacija bistveno orodje za analizo algoritmov, je pomembno upoštevati tudi druge dejavnike pri
izbiri algoritma:

- **Konstantni faktorji:** Big O zanemarja konstantne faktorje in nižje redne člene.
- **Najboljši primer proti najslabšemu:** Big O običajno opisuje najslabši možni scenarij.
- **Resnične omejitve:** Poraba pomnilnika, enostavnost implementacije in specifične zahteve problema bi morali prav
  tako vplivati na vašo izbiro.

## Zaključek

Razumevanje algoritmov in Big O notacije je ključno za pisanje učinkovite kode in optimizacijo zmogljivosti. Z
obvladanjem teh konceptov boste bolje pripravljeni na reševanje kompleksnih problemov in pisanje programske opreme, ki
se učinkovito prilagaja vašim podatkom.

Za intervju lahko pričakujete vprašanja o različnih algoritmih in podatkovnih strukturah. Tukaj je nekaj pogostih:

## Algoritmi za urejanje

1. Mehurčasto urejanje - Preprost algoritem za urejanje s kompleksnostjo O(
   n^2). [Podrobneje ->](https://github.com/danilojezernik/js-interview-30/tree/master/si/Algorithms/sorting-algorithms/bubble-sort)
2. Vstavljalno urejanje - Gradi končni urejen seznam po en element naenkrat, kompleksnost O(n^2).
3. Izbiralno urejanje - Deli vhodni seznam na dva dela: urejeni in neurejeni del, kompleksnost O(n^2).
4. Zlivno urejanje - Algoritem deli in vlada, kompleksnost O(n log n).
5. Hitro urejanje - Še en algoritem deli in vlada, povprečna kompleksnost O(n log n).

## Algoritmi za iskanje

1. Linearno iskanje - Iskanje elementa zaporedno, kompleksnost O(n).
2. Binarno iskanje - Iskanje v urejenem seznamu z večkratnim deljenjem iskalnega intervala na polovico, kompleksnost O(
   log n).

## Podatkovne strukture in povezani algoritmi

1. Polja - Osnovne operacije kot so vstavljanje, brisanje in dostopanje do elementov.
2. Povezani seznami - Operacije kot so prehajanje, vstavljanje in brisanje.
    - Enosmerno povezani seznam
    - Dvosmerno povezani seznam
3. Skladi in vrste - Osnovne operacije (potisni, odstrani, vvrsti, izvrsti).
4. Zgoščevalne tabele - Osnovne operacije (vstavljanje, brisanje, iskanje).
5. Drevesa - Osnovne operacije (vstavljanje, brisanje, prehajanje).
    - Binarna drevesa
    - Binarna iskalna drevesa (BST)
6. Grafi - Osnovni algoritmi kot sta globinsko iskanje (DFS) in širinsko iskanje (BFS).

## Osnovno dinamično programiranje in rekurzija

1. Fibonaccijevo zaporedje - Uporaba rekurzije in dinamičnega programiranja.
2. Izračun fakultete - Uporaba rekurzije.

## Algoritmi za manipulacijo z nizi

1. Preverjanje palindroma - Določite, ali niz bere enako naprej in nazaj.
2. Preverjanje anagrama - Določite, ali sta dva niza anagrama drug drugega.

## Osnovni algoritmični problemi

1. Problem dveh vsot - Iskanje dveh števil v polju, ki skupaj tvorita določen cilj.
2. Obrni niz - Obrnite podani niz.
3. Najdi maksimum/minimum v polju - Preprosto linearno iskanje za največjo/najmanjšo vrednost.
4. Osnovne operacije z matrikami - Transponiranje matrike, rotacija matrike.

## Osnovni matematični algoritmi

1. Preverjanje praštevil - Določite, ali je število praštevilo.
2. Največji skupni delitelj (GCD) - Uporaba Evklidovega algoritma.

## Nasveti za pripravo

1. Razumejte časovno in prostorsko kompleksnost - Bodite sposobni razložiti Big-O notacijo za vaše algoritme.
2. Vadite kodiranje - Uporabite platforme kot so LeetCode, HackerRank ali CodeSignal.
3. Simulirajte intervjuje - Vadite s prijatelji ali uporabite spletne platforme za simulacijo intervjujev.
4. Razložite vaš miselni proces - Intervjuji pogosto gledajo na to, kako pristopite k reševanju problemov, ne le na
   končno rešitev.
