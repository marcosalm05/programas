function newtonRaphson(f, df, x, tol) {
    let h = f(x) / df(x);
    while (Math.abs(h) >= tol) {
        h = f(x) / df(x);

        // x(i+1) = x(i) - f(x) / f'(x)
        x = x - h;
    }

    return x;
}

// Definir la función
// Aquí se utiliza x^3 - x^2 + 2 como ejemplo
function func(x) {
    return x * x * x - x * x + 2;
}

// Definir la derivada de la función
function dfunc(x) {
    return 3 * x * x - 2 * x;
}

let x0 =-20;
let tolerancia = 0.01;

let raiz = newtonRaphson(func, dfunc, x0, tolerancia);

console.log("La raíz es: " + raiz);
