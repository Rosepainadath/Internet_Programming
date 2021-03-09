var element = document.getElementById('myChart').getContext('2d');
var chartType= 'bar';
var chartData = {
    labels: ['USA', 'India', 'Russia', 'UK','France' ],
    datasets: [{
        label: 'New Cases',
       borderColor: 'rgb(25, 990, 132)',
        backgroundColor: [
            'rgba(25, 990, 32, 0.2)',
            'rgba(540, 16, 350, 0.2)',
            'rgba(50, 20, 806, 0.2)',
            'rgba(50, 312, 960, 0.2)',
            'rgba(530, 10, 55, 0.2)'
                    ],
        data: [8313,14821,10253,4712,5327]
    }]
};

var chartOptions = {};
var chart = new Chart(element, {type:chartType, data: chartData, options: chartOptions});
