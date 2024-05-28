fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {
    
    sortByCountryPopulation(data);

    
    const top30Countries = data.slice(-30).reverse();

    
    const countries = top30Countries.map(item => item.country);
    const populations = top30Countries.map(item => item.population);

    
    const trace = {
        x: countries,
        y: populations,
        type: 'bar'
    };

    const layout = {
        title: 'Les 30 pays avec la plus grande population',
        xaxis: {
            title: 'Pays',
            tickangle: -35  
        },
        yaxis: {
            title: 'Population'
        },
        margin: {
            b: 150
        }
    };
    Plotly.newPlot('data-viz', [trace], layout);
}

function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1);
}
