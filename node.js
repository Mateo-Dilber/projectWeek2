// Simulatie van plattegronden en ruimtes
const plattegrond = { /* plattegrondgegevens hier */ };
const ruimtes = { /* ruimtegegevens hier */ };
const nooduitgangen = { /* nooduitganggegevens hier */ };

// Functie om plattegrond weer te geven
function toonPlattegrond() {
    // Implementeer logica om plattegrond weer te geven
}

// Functie om ruimte te zoeken
function zoekRuimte() {
    const zoekterm = document.getElementById('search-input').value;
    const gevondenRuimte = ruimtes[zoekterm];

    if (gevondenRuimte) {
        toonRuimteInformatie(gevondenRuimte);
    } else {
        toonMelding("geen lokaalinfo beschikbaar.");
    }
}

// Functie om nooduitgangen weer te geven
function toonNooduitgangen() {
    // Implementeer logica om nooduitgangen weer te geven
}

// Functie om ruimte-informatie weer te geven
function toonRuimteInformatie(ruimte) {
    const ruimteInfoElement = document.getElementById('ruimte-info');
    ruimteInfoElement.textContent = `Ruimte ${ruimte.naam}: ${ruimte.beschrijving}`;
}

// Functie om meldingen weer te geven
function toonMelding(tekst) {
    const ruimteInfoElement = document.getElementById('ruimte-info');
    ruimteInfoElement.textContent = tekst;
}

// Belangrijk: Voeg verdere logica toe voor het laden van plattegronden, interacties, etc.
