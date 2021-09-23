let b1 = Number(prompt("Podaj dlugosc boku"));
let b2 = Number(prompt("Podaj dlugosc drugiego boku"));
let b3 = Number(prompt("Podaj dlugosc trzeciego boku"));
if(b1==b2 && b2 == b3)
{
    document.write("Jest to trojkat rownoboczny");
}
if(b1==b2 || b2 == b3 || b1==b3)
{
    document.write("Jest to trojkat rownoramienny");
}
else
{
    document.write("Jest to trojkat roznoboczny"); 
}