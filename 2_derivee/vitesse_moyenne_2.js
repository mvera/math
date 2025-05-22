(function() {
// Données pour le graphique
let x = [];
let f = [];      // f(x) = x²

for (let i = 0; i <= 2; i += 0.1) {
    x.push(i);
    f.push(0);
}

for (let i = 2; i <= 8; i += 0.1) {
    x.push(i);
    f.push(5 * i - 10);
}

// Tracer les courbes
const trace1 = {
    x: x,
    y: f,
    mode: 'lines',
    name: 'f(x) = 3x',
    line: { color: 'blue' }
};

const data = [trace1];

const layout = {
    title: 'position du point 2',
    xaxis: { title: 'x' },
    yaxis: { title: 'valeur' }
};

Plotly.newPlot('graph2', data, layout);
})();