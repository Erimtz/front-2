#encodin:UTF-8

import random

Import: random

while True:
    aleatorio = random.aleatorio(0,3)
    elijePc = ""
    print("1.piedra")
    print("2.piedra")
    print("3.piedra")
    opcion = int(input("Elige tu opción"))

    if opcion == 1:
        elijeUsuario = "Piedra"
    elif opcion == 2:
        elijeUsuario = "Papel"
    elif opcion == 3:
        elijeUsuario = "Tijera"
    print("Elejiste: ", elijeUsuario)

    if aleatorio == 0:
        elijePc = "Piedra"
    elif aleatorio == 1:
        elijePc = "Papel"
    elif aleatorio == 2:
        elijePc = "Tijera"
    print("La máquina elijio: ", elijePc)
    print("...")

    if elijePc == "Piedra" and elijeUsuario == "Papel":
        print("Ganaste, papel envuelve a la Piedra")
    elif elijePc == "Papel" and elijeUsuario == "Tijera":
        print("Ganaste, Tijera corta papel") 
    elif elijePc == "Tijera" and elijeUsuario == "Piedra":
        print("Ganaste, Piedra machaca Tijera")
    if elijePc == "Papel" and elijeUsuario == "Piedra":
        print("Perdiste, papel envuelve Piedra")
    elif elijePc == "Tijera" and elijeUsuario == "Papel":
        print("Perdiste, Tijera corta papel")      
    elif elijePc == "Piedra" and elijeUsuario == "Tijera":
        print("Perdiste, Piedra machaca Tijera")
    elif elijePc == elijeUsuario:
        print("empate") 


    play_again = input("Quieres jugar de nuevo (s/n): ")
    if play_again.lower() != "s":   
        break                           

    
