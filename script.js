let rollHistory = [];
let twoCount = 0;

function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("result").innerText = `Roll Result: ${roll}`;
    rollHistory.push(roll);
    if (roll === 2) {
        twoCount++;
    }
    updateHistoryTable();
    updateStatistics();
}

function rollFiveTimes() {
    let lastRoll;
    for (let i = 0; i < 5; i++) {
        lastRoll = Math.floor(Math.random() * 6) + 1;
        rollHistory.push(lastRoll);
        if (lastRoll === 2) {
            twoCount++;
        }
    }
    document.getElementById("result").innerText = `Roll Result: ${lastRoll}`;
    updateHistoryTable();
    updateStatistics();
}

function updateHistoryTable() {
    const tbody = document.getElementById("history");
    tbody.innerHTML = "";
    rollHistory.forEach((roll, idx) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${idx + 1}</td><td>${roll}</td>`;
        tbody.appendChild(row);
    });
}

function updateStatistics() {
    const totalRolls = rollHistory.length;
    const frequency = totalRolls === 0 ? 0 : (twoCount / totalRolls).toFixed(2);
    document.getElementById("twoCount").innerText = `Number of Twos: ${twoCount}`;
    document.getElementById("totalRolls").innerText = `Total Rolls: ${totalRolls}`;
    document.getElementById("frequency").innerText = `Relative Frequency of Twos: ${frequency}`;
}
