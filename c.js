const rules = {
    x: function (a, b, c) { console.log(a) },
    y: function (a, b, c) { console.log(b) },
    z: function (a, b, c) { console.log(c) }
}

function determineAction(a, b, c) {
    switch (true) {
        case a > b && a > c:
            return 'x';
        case b > a && b > c:
            return 'y';
        case c > a && c > b:
            return 'z';
        default:
            throw new Error('Invalid input');
    }
}

function demo(a, b, c) {
    const action = determineAction(a, b, c);
    return rules[action](a, b, c);
}

demo(4, 2, 3); // Output: 4