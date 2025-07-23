let rollHistory = [];

function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("result").innerText = `Roll Result: ${roll}`;
    rollHistory.push(roll);
    updateHistoryTable();
}

function rollFiveTimes() {
    let lastRoll;
    for (let i = 0; i < 5; i++) {
        lastRoll = Math.floor(Math.random() * 6) + 1;
        rollHistory.push(lastRoll);
    }
    document.getElementById("result").innerText = `Roll Result: ${lastRoll}`;
    updateHistoryTable();
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
