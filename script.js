// script.js

let totalRolls = 0;
let twoCount = 0;

// Arrays to hold data for the chart
const labels = [];       // [1, 2, 3, ...]
const freqData = [];     // [0.0, 0.5, 0.33, ...]

function rollDice() {
  const value = Math.floor(Math.random() * 6) + 1;
  totalRolls++;
  if (value === 2) twoCount++;

  updateDisplay(value);
  recordHistory(value);
  updateChartData();
}

function rollFiveTimes() {
  for (let i = 0; i < 5; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    totalRolls++;
    if (value === 2) twoCount++;
    recordHistory(value);
  }
  updateDisplay('5 rolls');
  updateChartData();  
}

function updateDisplay(lastRoll) {
  document.getElementById('result').textContent = `Roll Result: ${lastRoll}`;
  document.getElementById('twoCount').textContent = `Number of Twos: ${twoCount}`;
  document.getElementById('totalRolls').textContent = `Total Rolls: ${totalRolls}`;
  const relFreq = (twoCount / totalRolls).toFixed(3);
  document.getElementById('frequency').textContent = `Relative Frequency of Twos: ${relFreq}`;
}

function recordHistory(value) {
  const row = document.createElement('tr');
  const cell1 = document.createElement('td');
  const cell2 = document.createElement('td');
  cell1.textContent = totalRolls;
  cell2.textContent = value;
  row.append(cell1, cell2);
  document.getElementById('history').appendChild(row);
}

function updateChartData() {
  // Push new data point
  labels.push(totalRolls);
  freqData.push((twoCount / totalRolls).toFixed(3));

  // Update the Chart.js dataset and re-render
  frequencyChart.data.labels = labels;
  frequencyChart.data.datasets[0].data = freqData;
  frequencyChart.update();
}

// Create the chart once on page load
const ctx = document.getElementById('frequencyChart').getContext('2d');
const frequencyChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Rel. Freq. of 2s',
      data: freqData,
      fill: false,
      tension: 0.1
    }]
  },
  options: {
    scales: {
      x: {
        title: { display: true, text: 'Total Rolls' },
        beginAtZero: true
      },
      y: {
        title: { display: true, text: 'Relative Frequency' },
        suggestedMin: 0,
        suggestedMax: 1
      }
    }
  }
});
