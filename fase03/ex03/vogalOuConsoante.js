function vogalOuConsoante(x) {
    letra = x.toLowerCase();
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u")
        return "Vogal"
    else
        return "Consoante"
}