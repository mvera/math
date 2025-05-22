(function() {
// Données pour le graphique
let x = [];
let f = [];      // f(x) = x²

for (let i = 0; i <= 10.2; i += 0.1) {
    x.push(i);
    f.push(i * i);
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
    title: 'représentation graphique de f(x) = x * x',
    xaxis: { title: 'x' },
    yaxis: { title: 'valeur' }
};

Plotly.newPlot('graph3', data, layout);
})();