var element = document.getElementById('myChart').getContext('2d');

var chartType = 'line'; // The type of chart we want to create

// The data for our dataset
var chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(457, 9, 13)',
        borderColor: 'rgb(25, 9, 13)',
        data: [0, 10, 5, 2, 20, 30, 45]
    }]
};

// Configuration options go here
var chartOptions = {
        layout: {
            padding: {
                left: 50,
                right: 0,
                top: 0,
                bottom: 0
            }
        }
    }

// new Chart(x, y) creates a new chart object where:
// x is the object for the html element.
// y is JSON object of type {a,b,c} see below.

var chart = new Chart(element, {type:chartType, data: chartData, options: chartOptions});
