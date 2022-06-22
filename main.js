let ctx = document.getElementById('myChart').getContext('2d');
let informacoes = ['info1', 'info2', 'info3', 'info4', 'info5'];
let cores = ['#FB3640', '#EFCA08', '#43AA8B', '#253D5B', '#0d6efd'];


let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [30, 5, 40, 20, 5],
            backgroundColor: cores,
        }],
        labels: informacoes,

    },
    plugins: [ChartDataLabels],
    options: {

        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom' },

            datalabels: {
                color: '#fff',
                anchor: 'end',
                align: 'start',
                offset: -2,
                borderWidth: 2,
                borderColor: '#fff',
                textStrokeColor: 'black',
                borderRadius: 10,
                backgroundColor: (context) => {
                    return context.dataset.backgroundColor;
                },
                font: {
                    weight: 'bold',
                    size: '15'
                },
                formatter: (value) => {
                    return value + ' %';
                }
            }
        }

    }
})