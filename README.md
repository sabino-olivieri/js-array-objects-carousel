# Carosello Array di Oggetti

## Testo della consegna

Dato un array di oggetti letterali con:

> url dell'immagine
> titolo
> descrizione 

Creare un carosello come nella foto allegata.

Milestone :one: :

Nel markup allegato rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva con i relativi titolo e testo diventerà visibile.

Milestone :two: :

Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

---

BONUS :one: :star: :

Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

BONUS :two: :star: :

Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

BONUS :three: :star: :

Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

## Svolgimento

- [x] creo ciclo per stampare nel DOM gli oggetti dell'array
- [x] creo event listner per i pulsanti
- [x] al click del pulsante avanti (stessa cosa per pulsante indietro)
    - [x] rimuovo classe active da elemento corrente
    - [x] incremento indice (decremento per indietro)
    - [x] se indice è minore della lunghezza dell'array (< 0)
            - applico classe active all'elemento corrente (eseguo altrimenti)
        altrimenti
            - indice diventa 0 (array.length - 1)
            - applico classe active all'elemento corrente