function biseccion(f, a, b, tol) {
    if (f(a) * f(b) > 0) {
        console.log("No se puede aplicar el método de bisección ya que f(a) y f(b) tienen el mismo signo.");
        return;
    }

    let c = a;
    while ((b - a) >= tol) {
        // Encuentra el punto medio
        c = (a + b) / 2;

        // Comprueba si el punto medio es la raíz
        if (f(c) == 0.0)
            break;

        // Decide el lado al que seguir
        if (f(c) * f(a) < 0)
            b = c;
        else
            a = c;
    }
    return c;
}

// Definir la función
// Aquí se utiliza x^3 - x^2 + 2 como ejemplo
function func(x) {
    return x * x * x - x * x + 2;
}

let a =-200, b = 300;
let tolerancia = 0.01;

let raiz = biseccion(func, a, b, tolerancia);

console.log("La raíz es: " + raiz);