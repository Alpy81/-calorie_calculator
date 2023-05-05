function Calc() {
    const körperGröße = Number(document.querySelector("#height").value);
    const alter = Number(document.querySelector("#age").value);
    const gewicht = Number(document.querySelector("#weight").value);
    const grundUmsatz = document.querySelector(".output-gu-kcal");
    const grundUmsatz2 = document.querySelector(".output-gu-kj");
    const gesamtUmsatz = document.querySelector(".output-gesu-kcal");
    const gesamtUmsatz2 = document.querySelector(".output-gesu-kj");
    const geschlecht = document.querySelector("input[name='radio']:checked").value;
    const aktivitäten = document.querySelector("#aktivitaet").value;
    
    if (geschlecht == "männlich") {
        grundUmsatz.innerHTML = Math.round(66.47 + 13.7 * gewicht + 5 * körperGröße - 6.8 * alter);
        grundUmsatz2.innerHTML = Math.round(grundUmsatz.innerHTML * 4.184);
        
    }   else if (geschlecht == "weiblich") {
        grundUmsatz.innerHTML = Math.round(665.1 + 9.6  * gewicht + 1.8 * körperGröße -4.7 * alter);
        grundUmsatz2.innerHTML = Math.round(grundUmsatz.innerHTML * 4.184);
    }
        gesamtUmsatz.innerHTML = Math.round(grundUmsatz.innerHTML * aktivitäten);
        gesamtUmsatz2.innerHTML = Math.round(grundUmsatz2.innerHTML * aktivitäten);
}

        

    


    







