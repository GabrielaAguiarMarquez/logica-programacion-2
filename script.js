function F() {
    let dato = document.getElementById('dato');

    let num = parseFloat(dato.value);

    if (isNaN (num)) {
        alert("Introduce un dato valido")
        return
    } 

    const resultado1 = (num * 9/5) + 32;

    let mostrar = document.getElementById('mostrar');
    mostrar.innerHTML = `<p> Fahrenheit: ${resultado1.toFixed(2)}</p>`
    mostrar.innerHTML = `<p> kelvin: ${resultado2.toFixed(2)}</p>`
} 

function K() {
    let dato = document.getElementById('dato');
    let num = parseFloat(dato.value);

    if (isNaN (num)) {
        alert("Introduce un dato valido")
        return
    } 

    const resultado2 = num + 273.15;
    let mostrar = document.getElementById('mostrar');
    mostrar.innerHTML = `<p> kelvin: ${resultado2.toFixed(2)}</p>`
}