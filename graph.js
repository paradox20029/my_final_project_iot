document.addEventListener("DOMContentLoaded", function () {
    const numberOfDataPoints = 5; // Number of data points for the charts

    // Generate randomized data for brightness and status
    const brightnessData = Array.from({ length: numberOfDataPoints }, () => Math.floor(Math.random() * 100) + 1);
    const statusData = Array.from({ length: numberOfDataPoints }, () => Math.random() < 0.5 ? 'On' : 'Off');

    // Plotly chart for brightness data
    const brightnessChart = document.getElementById('brightness-chart');
    Plotly.newPlot(brightnessChart, [{
        y: brightnessData,
        type: 'bar',
        marker: {
            color: 'rgba(255, 153, 51, 0.6)'
        }
    }]);

    // Plotly chart for status data
    const statusChart = document.getElementById('status-chart');
    Plotly.newPlot(statusChart, [{
        labels: ['On', 'Off'],
        values: [statusData.filter(status => status === 'On').length, statusData.filter(status => status === 'Off').length],
        type: 'pie'
    }]);
});
