function calculaDelta(a, b, c) {
    var delta = b * b - 4 * a * c;
    return delta;
}

function calculaX1(a, b, c) {
    var delta = calculaDelta(a, b, c);

    if (delta < 0) {
        throw new Error("A equação não tem raízes reais.");
    }

    var x1 = (-b + Math.sqrt(delta)) / (2 * a);
    return x1;
}

function calculaX2(a, b, c) {
    var delta = calculaDelta(a, b, c);

    if (delta < 0) {
        throw new Error("A equação não tem raízes reais.");
    }

    var x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return x2;
}

var a, b, c;
a = 2;
b = 4;
c = 2;

try {
    console.log("x1:", calculaX1(a, b, c));
    console.log("x2:", calculaX2(a, b, c));
} catch (error) {
    console.error(error.message);
}