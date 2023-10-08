document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("tbody");
    const addDeviceBtn = document.getElementById("add-device-btn");

    addDeviceBtn.addEventListener("click", function () {
        // Generate random data for the new row
        const deviceId = generateRandomId();
        const deviceStatus = getRandomStatus();
        const location = getRandomLocation();

        // Create a new table row and append it to the table
        const newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${deviceId}</td><td>${deviceStatus}</td><td>${location}</td>`;
        tableBody.appendChild(newRow);
    });

    // Function to generate a random device ID (6-digit number)
    function generateRandomId() {
        return Math.floor(100000 + Math.random() * 900000);
    }

    // Function to get a random device status
    function getRandomStatus() {
        const statuses = ["Online", "Offline"];
        return statuses[Math.floor(Math.random() * statuses.length)];
    }

    // Function to get a random location
    function getRandomLocation() {
        const locations = ["Living Room", "Bedroom", "Kitchen", "Office", "Bathroom"];
        return locations[Math.floor(Math.random() * locations.length)];
    }
});
