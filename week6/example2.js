var element = document.getElementById('myChart').getContext('2d');

var chartType = 'pie'; // The type of chart we want to create

var chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'My First dataset',
       borderColor: 'rgb(255, 99, 132)',
        backgroundColor: [
            'rgba(25, 990, 32, 0.2)',
            'rgba(540, 16, 350, 0.2)',
            'rgba(50, 20, 806, 0.2)',
            'rgba(750, 312, 96, 0.2)',
            'rgba(53, 910, 55, 0.2)',
            'rgba(50, 159, 964, 0.2)',
            'rgba(655, 15, 64, 0.2)'
        ],
              data: [0, 10, 5, 2, 20, 30, 45]
    }]
};

// Configuration options go here
var chartOptions = {};
var chart = new Chart(element, {type:chartType, data: chartData, options: chartOptions});
