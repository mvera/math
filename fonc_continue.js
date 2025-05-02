(function () {
    // Données pour le graphique
    let g2_xx = [];
    let g2_y = [];

    // Génération des points pour la fonction f(x) = sin(x + 1)
    for (let i = -1; i <= 5; i += 0.1) {
        g2_xx.push(i);
        g2_y.push(Math.sin(i + 1));
    }



    // Définition du point a
    let g2_a = Math.PI / 2;  // Choix de a = π
    let g2_epsilon = 0.3; // Choix de ε = 0.5
    let g2_delta = 0.2; // Choix de δ = 0.2

    // Tracer la courbe
    const g2_trace = {
        x: g2_xx,
        y: g2_y,
        mode: 'lines',
        name: 'f(x) = sin(x)',
        line: { color: 'blue' }
    };

    // Tracer les annotations pour a, ε et δ
    const g2_annotations = [
        // Point a
        {
            x: g2_a,
            y: 0,
            text: 'a',
            xref: 'x',
            yref: 'y',
            showarrow: true,
            arrowhead: 2,
            ax: 0,
            ay: -160,
            font: { size: 12, color: 'black' }
        },
        // Intervalle [a - δ, a + δ]
        {
            x: g2_a - g2_delta,
            y: 0,
            xref: 'x',
            yref: 'y',
            showarrow: true,
            arrowhead: 2,
            ax: 0,
            ay: -140,
            text: 'a - δ',
            font: { size: 12, color: 'green' },
            arrowcolor: 'green'
        },
        {
            x: g2_a + g2_delta,
            y: 0,
            xref: 'x',
            yref: 'y',
            showarrow: true,
            arrowhead: 2,
            ax: 0,
            ay: -140,
            text: 'a + δ',
            font: { size: 12, color: 'green' },
            arrowcolor: 'green'
        },
        // Intervalle [f(a) - ε, f(a) + ε]
        {
            x: 4,
            y: Math.sin(g2_a + 1) - g2_epsilon,
            xref: 'x',
            yref: 'y',
            showarrow: false,
            arrowhead: 2,
            ax: 0,
            ay: -40,
            text: 'f(a) - ε',
            font: { size: 12, color: 'red' },
            arrowcolor: 'red'
        },
        {
            x: 4,
            y: Math.sin(g2_a + 1) + g2_epsilon,
            xref: 'x',
            yref: 'y',
            showarrow: false,
            arrowhead: 2,
            ax: 0,
            ay: -40,
            text: 'f(a) + ε',
            font: { size: 12, color: 'red' },
            arrowcolor: 'red'
        }
    ];

    // Définir les caractéristiques de la ligne horizontale
    const g2_horizontalLineESup = {
        type: 'line',
        x0: 0.5,       // Position x de départ du segment horizontal
        y0: Math.sin(g2_a + 1) + g2_epsilon,         // Position y de départ (valeur constante pour la ligne horizontale)
        x1: 3.5,        // Position x de fin du segment horizontal
        y1: Math.sin(g2_a + 1) + g2_epsilon,         // Position y de départ (valeur constante pour la ligne horizontale)
        line: {
            color: 'red',  // Couleur de la ligne horizontale
            width: 2         // Largeur de la ligne horizontale
        }
    };

    const g2_horizontalLineEInf = {
        type: 'line',
        x0: 0.5,       // Position x de départ du segment horizontal
        y0: Math.sin(g2_a + 1) - g2_epsilon,         // Position y de départ (valeur constante pour la ligne horizontale)
        x1: 3.5,        // Position x de fin du segment horizontal
        y1: Math.sin(g2_a + 1) - g2_epsilon,         // Position y de départ (valeur constante pour la ligne horizontale)
        line: {
            color: 'red',  // Couleur de la ligne horizontale
            width: 2         // Largeur de la ligne horizontale
        }
    };

    const g2_layout = {
        title: 'f(x) = sin(x + 1)',
        xaxis: { title: 'x' },
        yaxis: { title: 'f(x)' },
        showlegend: false,
        annotations: g2_annotations,
        shapes: [g2_horizontalLineESup, g2_horizontalLineEInf]
    };

    Plotly.newPlot('g2', [g2_trace], g2_layout);
})();
