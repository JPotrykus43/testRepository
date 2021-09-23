let zmienna = Number(prompt("Jaki jest dzien tygodnia"))
switch(zmienna)
{
    case 1: 
    case 2: 
    case 3: 
    case 4: 
    case 5: document.write("Dzien dobry");break;
    case 6: 
    case 7: document.write("Weekend");break;
    default: "Wpisales zly dzien tygodnia";
}