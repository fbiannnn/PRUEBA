import os
os.system("cls")

casoPrueba = [1, 2, 3, 4, 5, 6, 7]
def escalera(lista):

    lista_unica = sorted(set(lista))

    if set([1, 10, 11, 12, 13]).issubset(set(lista)):
        return "ESCALERA REAL"
    
    for i in range(len(lista_unica) - 1):
        if lista_unica[i] + 1 != lista_unica[i + 1]:
            return "NO TIENES ESCALERA"
    return "ESCALERA"

def verifListas(listas):
    resultados = []
    for l in listas:
        resultados.append(escalera(l))
    return resultados



print(escalera(casoPrueba))