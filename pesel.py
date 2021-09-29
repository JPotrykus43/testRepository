
x = (input("Podaj pesel: ")); 
pesel = int(x[9]);
def sprawdzenie(pesel):
    if pesel % 2  ==0:print("K");
    else: print("M");

print(sprawdzenie(pesel));
