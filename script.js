const output = document.getElementById("output");
const startButton = document.getElementById("startButton");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function schreibe(text, pause = 1500) {
    output.innerHTML += text + "<br>";
    
    // Scrollt das gesamte Browserfenster automatisch ganz nach unten
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // Sanfter Scroll-Effekt
    });

    await sleep(pause);
}

async function starteProgramm() {
    startButton.disabled = true;
    startButton.style.display = "none";
    output.innerHTML = "";
    
    await schreibe("Initialisiere Finanznetzwerk...", 2000);
    await schreibe("Verbinde mit Servern...", 2500);
    await schreibe("Verbindung hergestellt. ✅", 2000);
    await schreibe("", 1000);
    await schreibe("Suche deutsche Bankkonten...", 2500);
    await schreibe("84.275.392 Konten gefunden.", 2500);
    await schreibe("", 1000);
    await schreibe("Starte Abbuchung von 0,01 €...", 2500);
    await schreibe("", 1000);
    await schreibe("WARNUNG!", 1500);
    await schreibe("Sparkasse findet die Idee fragwürdig.", 2500);
    await schreibe("Volksbanken ebenfalls.", 2500);
    await schreibe("BKA wurde informiert.", 3000);
    await schreibe("", 1500);
    await schreibe("Vorgang wird abgebrochen...", 2500);
    await schreibe("Begründung:", 1500);
    await schreibe("Benutzer ist Anwendungsentwickler.", 1500);
    await schreibe("Benutzer ist kein Superschurke.", 3000);
    await schreibe("", 1500);
    await schreibe("Alternative Finanzierungsquellen werden gesucht...", 3000);
    await schreibe("Lottogewinn ........ FEHLGESCHLAGEN", 2000);
    await schreibe("Goldfund im Garten . FEHLGESCHLAGEN", 2000);
    await schreibe("Zeitmaschine ....... FEHLGESCHLAGEN", 3000);
    await schreibe("", 1500);
    await schreibe("Suche Unterstützer...", 3000);
    await schreibe("Daniel gefunden ✅", 2500);
    await schreibe("Olaf gefunden ✅", 2500);
    await schreibe("", 1000);
    
    await schreibe("Analysiere Freundschaftsdatenbank...", 3000);
    await schreibe("Freundschaft gefunden.", 2000);
    await schreibe("Dauer: über 20 Jahre", 2000);
    await schreibe("Vertrauenslevel: 100 %", 3000);
    await schreibe("", 2000);
    await schreibe("Prüfe Finanzierungsfreigabe...", 3000);
    await schreibe("Freigabe erteilt ✅", 3000);
    await schreibe("", 1500);
    await schreibe("Bitte warten ...", 4000);
    await schreibe("", 1500);

    output.innerHTML += `
        <div class="final-message">
            Freundschaftsdarlehen verfügbar<br><br>
            Betrag: 800 €<br><br>
            Bereitgestellt von<br>
            Olaf & Daniel<br><br>
            Weil Freunde für einander da sind.


            Bitte kontaktiere sie direkt,<br><br> 
            um die Details zu besprechen :).
        </div>
    `;

    // Nochmaliges Scrollen, sobald die finale Box eingefügt wurde
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}