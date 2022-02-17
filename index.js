function calcularSuma(notatotal, nota)
{   

    return notatotal = notatotal+nota
}

function calcularPromedio(notatotal, cantidad_notas)
{
    return notatotal / cantidad_notas
}

function agregarNotas(cantidad_notas)
{
    let notatotal = 0;
    for(var i =cantidad_notas;  i > 0; i--)
    {
        let nota = parseFloat(prompt("agregue las notas"))
        notatotal = calcularSuma(notatotal, nota)
        console.log(notatotal)
    }

    notatotal = calcularPromedio (notatotal, cantidad_notas)
    parseFloat(alert("Su promedio es "+ notatotal))
}


agregarNotas(parseInt(prompt("agregue la cantidad de notas")))