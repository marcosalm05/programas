function secante(f, x1, x2, tol) {
    let n = 0, xm, x0, c;
    if (f(x1) * f(x2) < 0) {
        do {
            // calcular la raíz intermedia
            x0 = (x1 * f(x2) - x2 * f(x1)) / (f(x2) - f(x1));

            // reajustar los límites
            c = f(x1) * f(x0);
            x1 = x2;
            x2 = x0;

            // verifica si x0 es la raíz
            if (c == 0)
                break;

            xm = (x1 * f(x2) - x2 * f(x1)) / (f(x2) - f(x1));
            n++;

        } while (Math.abs(xm - x0) >= tol); // repite hasta que el error sea menor que la tolerancia

        console.log("La raíz es: " + x0);
    }
    else
        console.log("No se puede usar el método de la secante ya que f(x1) y f(x2) tienen el mismo signo.");
}

// Definir la función
// Aquí se utiliza x^3 - x^2 + 2 como ejemplo
function func(x) {
    return x * x * x - x * x + 2;
}

let x1 =-200, x2 = 300;
let tolerancia = 0.01;

secante(func, x1, x2, tolerancia);
