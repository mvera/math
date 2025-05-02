// Données pour le graphique
let x = [];
let f = [];      // f(x) = x²

for (let i = -2; i <= 2; i += 0.1) {
    x.push(i);
    f.push(i * i);
}

// Tracer les courbes
const trace1 = {
    x: x,
    y: f,
    mode: 'lines',
    name: 'f(x) = x²',
    line: { color: 'blue' }
};

const data = [trace1];

const layout = {
    title: 'représentation graphique de f',
    xaxis: { title: 'x' },
    yaxis: { title: 'valeur' }
};

Plotly.newPlot('graph', data, layout);
