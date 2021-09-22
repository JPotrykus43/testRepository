/*
let zmienna1 = prompt("Podaj dlugosc boku kwadratu");


let zmienna2 = prompt("Podaj cene benzyny: ");
let zmienna3 = prompt("Podaj dlugosc trasy: ");
let zmienna4 = prompt("Ile pali na 100 km: ");

let zmienna5 =  prompt("Podaj liczbę");
let rand = Math.floor(Math.random()*50+1);
document.write("Pole kwadratu o boku " + zmienna1 + " wynosi " + Math.pow(zmienna1,2)+"<br>");
document.write("Koszt przejazdu wynosi " + (zmienna2*zmienna3*zmienna4/100)+ " za koszt benzyny " +zmienna2 +" zl " +" dlugosc trasy " + zmienna3 + " km przy spalaniu " +zmienna4 +" na 100 km"  +"<br>");
document.write("wylosowana liczba " + rand+ " Iloczyn tych liczb " +rand *zmienna5);
*/
/*
let zmienna6 = prompt("Podaj liczbę: ");
if(zmienna6 > 0)
{
    document.write("Liczba jest dodatnia");
}
else if(zmienna6 ==0)
{
    document.write("Liczba jest rowna zero");
}
else
{
    document.write("Liczba jest ujemna");
}*/
/*
let zmienna7 = Number(prompt("Podaj pierwsza liczbe: "));
let zmienna8 = Number(prompt("Podaj druga liczbe: "));
let zmienna9 = Number(prompt("Podaj pierwsza liczbe: "));

if(zmienna7 > zmienna8 && zmienna7 >zmienna9)
{
    document.write("Liczba pierwsza jest najwieksza " + zmienna7);
}
else if(zmienna8 > zmienna7 && zmienna8 > zmienna9 )
{
    document.write("Liczba druga jest najwieksza " + zmienna8);
}
else if(zmienna9 > zmienna7 && zmienna9 > zmienna8)
{
    document.write("Liczba trzecia jest najwieksza " + zmienna9);
}*/
/*
let zmienna10 = 5;
for(let i=0;i<=100;i++)
{
    zmienna10 +=10;
    document.write(zmienna10+"<br>");
}*/
/*
let pole =0, wynik=0;
for(let i=10;i>=0;i--)
{
    pole=i*i;
    document.write(pole +"<br>");
    wynik += pole;
}
document.write(wynik);*/
/*
 let N = Number(prompt("Podaj ciąg elementów n: "));
 let X = Number(prompt("Podaj wartość pierwszego elementu: "));
 let Y = Number(prompt("Podaj wartość róźnicy między elementami: "));
 let i=0;
 for(let i = X;i<=(N*Y);i+=Y)
 {
     document.write(i+"<br>");
 }*/
/*
const dodawanie1 = document.getElementById("dodawanie");
const odejmowanie1= document.getElementById("odejmowanie");
const liczba1= document.getElementById("liczba1");
const liczba2= document.getElementById("liczba2");

const wynik= document.getElementById("wynik");

wynik.onclick = function()
{
    
    document.write(liczba1);
}
*/
let a = Number(prompt("Podaj 1 wartosc"));
let b = Number(prompt("Podaj 2 wartosc"));
let x = prompt("Co mam zrobić (+,-,*,/)")
let wynik;
if(x == "+"){
 for(let i=0; i<=100;i++ )
 {
     let pytanie =confirm("Dodajesz dalej");
     if(pytanie ==true){
      wynik = a+=b;
      alert(wynik);
    }
      else
      {
          alert("KONIEC twoj wynik dodawania wynosi: " + wynik);
          pytanie.close();
          
      }
      
 }
}
if(x == "-"){
    for(let i=0; i<=100;i++ )
    {
        let pytanie =confirm("Odejmujesz dalej");
        if(pytanie ==true){
         wynik = a-=b;
         alert(wynik);
       }
         else
         {
             alert("KONIEC twoj wynik odejmowania wynosi: " + wynik);
             pytanie.close();
             
         }
         
    }
   }
   if(x == "*"){
    for(let i=0; i<=100;i++ )
    {
        let pytanie =confirm("Mnozysz dalej");
        if(pytanie ==true){
         wynik = a*=b;
         alert(wynik);
       }
         else
         {
             alert("KONIEC twoj wynik mnozenia wynosi: " + wynik);
             pytanie.close();
             
         }
         
    }
   }
   if(x == "/"){
    for(let i=0; i<=100;i++ )
    {
        let pytanie =confirm("Dzielisz dalej");
        if(pytanie ==true){
         wynik = a/=b;
         alert(wynik);
       }
         else
         {
             alert("KONIEC twoj wynik dzielenie wynosi: " + wynik);
             pytanie.close();
             
         }
         
    }
   }
