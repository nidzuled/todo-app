Zadatak Angular2+: Lista zadataka



Koristeći poslednju stabilnu verziju Angular2+ frameworka (https://angular.io/) i Angular Materijal (https://material.angular.io/) and Angular CLI (https://cli.angular.io/). Treba kreirati jednostavnu “Lista zadataka” aplikaciju u reaktivnom maniru. 

Aplikacija treba da ima toolbar, koji sa leve strane ima labelu sa imenom aplikacije, a na desnoj strani treba da se nalaze dva čipsa koji pokazuju “total rezultata neispunjenih zadataka” i “total rezultata ispunjenih zadataka”.

Ispod toolbar-a treba da se nalazi lista sa zadacima. Svaki todo item treba da sadrži opis/text i treba, da ima checkbox koji treba da odredjuje status zadataka, odnosno da li je isti završen ili nije. Svaka akcija na checkboxu treba da reflekturje trenutno ukupno stanje neispunjenih i ispunjenih zadataka u toolbar-u.

Ispod liste sa zadacima treba da se nalazi input polje sa labelom ”new todo item” sa “+” dugmetom kako bi dodali novi zadatak u listu. Treba da se uradi require validacija nad poljem za unos novog zadatka i da se prikaze odgovarajuća error poruka ukoliko dođe do greške prilikom unosa.

Prilikom kreiranja zadatka treba uzeti u obzir: 

    1. Da se aplikacija uradi u reaktivnom maniru koristeći rx/js Observables. 

    2. Za svaki logički deo treba napraviti zasebnu komponentu tako da se svaka može upotrebljavati i u drugim aplikacijama.

    3. Ne koristi se srever side API, umesto toga sve rezultate treba čuvati, pozivati i obogaćivati na nivou angular servisa i taj servis koristiti kao API simulator.

    4. Trebalo bi da se simulira: da na svakih 20 sekundi kreira priozvoljan (random) zadatak, koji će se pojavljivati u listi, ali prethodno da se uradi zabrana unosa zadatka sa istim imenom u listi. Takođe prikazati odgovarajuću error poruku.

    5. Po završetku aplikacije istu treba okačiti na git repozitorijum i u povratnom emailu dostaviti link ka istom. U emailu treba navesti koliko ste vremena potrošili u kreiranju aplikacije.