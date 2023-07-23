// Updating values every second
document.addEventListener("DOMContentLoaded", () => {
    setInterval(updateValues, 1000);
});

// Function to generate random values within a range
function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to update the table values based on the time interval
function updateValues() {

    // Instant Normal Case (Hourly)
    var powerDemandHourly = getRandomValue(4.5, 5.5);
    var solarPVHourly = getRandomValue(2.5, 3.5);
    var fuelCellHourly = getRandomValue(2, 2.5);
    var gridSupplyHourly = powerDemandHourly - solarPVHourly - fuelCellHourly;

    document.getElementById("powerDemandHourly").innerText = powerDemandHourly.toFixed(2) + " MW";
    document.getElementById("solarPVHourly").innerText = solarPVHourly.toFixed(2) + " MW";
    document.getElementById("fuelCellHourly").innerText = fuelCellHourly.toFixed(2) + " MW";
    // document.getElementById("gridSupplyHourly").innerText = gridSupplyHourly.toFixed(2) + " MW";

    // Low Demand Case (Hourly)
    var powerDemandLowHourly = getRandomValue(3, 4);
    var solarPVLowHourly = getRandomValue(2, 4);
    var fuelCellLowHourly = getRandomValue(1, 2);
    var gridSupplyLowHourly = powerDemandLowHourly - solarPVLowHourly - fuelCellLowHourly;

    document.getElementById("powerDemandLowHourly").innerText = powerDemandLowHourly.toFixed(2) + " MW";
    document.getElementById("solarPVLowHourly").innerText = solarPVLowHourly.toFixed(2) + " MW";
    document.getElementById("fuelCellLowHourly").innerText = fuelCellLowHourly.toFixed(2) + " MW";
    // document.getElementById("gridSupplyLowHourly").innerText = gridSupplyLowHourly.toFixed(2) + " MW";

    // High Demand Case (Hourly)
    var powerDemandHighHourly = getRandomValue(6, 8);
    var solarPVHighHourly = getRandomValue(3.5, 6);
    var fuelCellHighHourly = getRandomValue(2.5, 3.5);
    var gridSupplyHighHourly = powerDemandHighHourly - solarPVHighHourly - fuelCellHighHourly;

    document.getElementById("powerDemandHighHourly").innerText = powerDemandHighHourly.toFixed(2) + " MW";
    document.getElementById("solarPVHighHourly").innerText = solarPVHighHourly.toFixed(2) + " MW";
    document.getElementById("fuelCellHighHourly").innerText = fuelCellHighHourly.toFixed(2) + " MW";
    // document.getElementById("gridSupplyHighHourly").innerText = gridSupplyHighHourly.toFixed(2) + " MW";


    // Low Demand Case (Weekly)
    var powerDemandLowWeekly = getRandomValue(40, 60);
    var solarPVLowWeekly = getRandomValue(25, 30);
    var fuelCellLowWeekly = getRandomValue(35, 40);
    var gridSupplyLowWeekly = powerDemandLowWeekly - solarPVLowWeekly - fuelCellLowWeekly;

    document.getElementById("powerDemandLowWeekly").innerText = powerDemandLowWeekly.toFixed(2) + " MW";
    document.getElementById("solarPVLowWeekly").innerText = solarPVLowWeekly.toFixed(2) + " MW";
    document.getElementById("fuelCellLowWeekly").innerText = fuelCellLowWeekly.toFixed(2) + " MW";
    // document.getElementById("gridSupplyLowWeekly").innerText = gridSupplyLowWeekly.toFixed(2) + " MW";

    // High Demand Case (Weekly)
    var powerDemandHighWeekly = getRandomValue(50, 80);
    var solarPVHighWeekly = getRandomValue(25, 35);
    var fuelCellHighWeekly = getRandomValue(35, 40);
    var gridSupplyHighWeekly = powerDemandHighWeekly - solarPVHighWeekly - fuelCellHighWeekly;

    document.getElementById("powerDemandHighWeekly").innerText = powerDemandHighWeekly.toFixed(2) + " MW";
    document.getElementById("solarPVHighWeekly").innerText = solarPVHighWeekly.toFixed(2) + " MW";
    document.getElementById("fuelCellHighWeekly").innerText = fuelCellHighWeekly.toFixed(2) + " MW";
    // document.getElementById("gridSupplyHighWeekly").innerText = gridSupplyHighWeekly.toFixed(2) + " MW";

    // Low Demand Case (Monthly)
    var powerDemandLowMonthly = getRandomValue(210, 285);
    var solarPVLowMonthly = getRandomValue(75, 100);
    var fuelCellLowMonthly = getRandomValue(150, 210);
    var gridSupplyLowMonthly = powerDemandLowMonthly - solarPVLowMonthly - fuelCellLowMonthly;

    document.getElementById("powerDemandLowMonthly").innerText = powerDemandLowMonthly.toFixed(2) + " MW";
    document.getElementById("solarPVLowMonthly").innerText = solarPVLowMonthly.toFixed(2) + " MW";
    document.getElementById("fuelCellLowMonthly").innerText = fuelCellLowMonthly.toFixed(2) + " MW";
    // document.getElementById("gridSupplyLowMonthly").innerText = gridSupplyLowMonthly.toFixed(2) + " MW";

    // High Demand Case (Monthly)
    var powerDemandHighMonthly = getRandomValue(300, 342);
    var solarPVHighMonthly = getRandomValue(125, 180);
    var fuelCellHighMonthly = getRandomValue(150, 220);
    var gridSupplyHighMonthly = powerDemandHighMonthly - solarPVHighMonthly - fuelCellHighMonthly;

    document.getElementById("powerDemandHighMonthly").innerText = powerDemandHighMonthly.toFixed(2) + " MW";
    document.getElementById("solarPVHighMonthly").innerText = solarPVHighMonthly.toFixed(2) + " MW";
    document.getElementById("fuelCellHighMonthly").innerText = fuelCellHighMonthly.toFixed(2) + " MW";
    // document.getElementById("gridSupplyHighMonthly").innerText = gridSupplyHighMonthly.toFixed(2) + " MW";

    // Low Demand Case (Yearly)
    var powerDemandLowYearly = getRandomValue(1.2, 1.5);
    var solarPVLowYearly = getRandomValue(450, 620);
    var fuelCellLowYearly = getRandomValue(900, 1260);
    var gridSupplyLowYearly = powerDemandLowYearly - solarPVLowYearly - fuelCellLowYearly;

    document.getElementById("powerDemandLowYearly").innerText = powerDemandLowYearly.toFixed(2) + " GW";
    document.getElementById("solarPVLowYearly").innerText = solarPVLowYearly.toFixed(2) + " MW";
    document.getElementById("fuelCellLowYearly").innerText = fuelCellLowYearly.toFixed(2) + " MW";
    // document.getElementById("gridSupplyLowYearly").innerText = gridSupplyLowYearly.toFixed(2) + " MW";

    // High Demand Case (Yearly)
    var powerDemandHighYearly = getRandomValue(1.4, 1.8);
    var solarPVHighYearly = getRandomValue(750, 1000);
    var fuelCellHighYearly = getRandomValue(900, 1620);
    var gridSupplyHighYearly = powerDemandHighYearly - solarPVHighYearly - fuelCellHighYearly;

    document.getElementById("powerDemandHighYearly").innerText = powerDemandHighYearly.toFixed(2) + " GW";
    document.getElementById("solarPVHighYearly").innerText = solarPVHighYearly.toFixed(2) + " MW";
    document.getElementById("fuelCellHighYearly").innerText = fuelCellHighYearly.toFixed(2) + " MW";
    // document.getElementById("gridSupplyHighYearly").innerText = gridSupplyHighYearly.toFixed(2) + " MW";
}

// Function to create and update the dynamic line chart
function updateLineChart(datapoints, suggestedMin, suggestedMax, criteria) {
    // Get a reference to the canvas element
    const canvas = document.getElementById("lineChart");

    // Generate some random data points (e.g., 10 data points)
    const dataPoints = [];
    for (let i = 0; i < 10; i++) {
        dataPoints.push(getRandomValue(1, 100));
    }

    // Create the line chart
    const lineChart = new Chart(canvas, {
        type: "bar",
        data: {
            labels: ["PD", "SPVG", "FCG", "GSP"],
            datasets: [{
                label: "DEMAND & SUPPLY",
                data: dataPoints,
                borderColor: "#272c12",
                backgroundColor: "#272c32",
                borderWidth: 0,
                fill: true,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: criteria,
                    },
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: "POWER (MW)",
                    },
                    suggestedMin: suggestedMin || 0,
                    suggestedMax: suggestedMax || 100,
                },
            },
        },
    });
}

// Call the updateLineChart function to create the initial line chart
updateLineChart();


// FILTER FUNCTION

function filterFunction(value) {
    let filterOption = document.getElementById(value)
    let filterValue = document.getElementById(value + '-cases-filter')
    let span = document.getElementById(value + '-span')

    let allSpans = document.getElementsByClassName('spans')
    let allCases = document.getElementsByClassName('cases')

    if (filterOption.classList.contains('active')) {
        for (let i = 0; i < allCases.length; i++) {
            allCases[i].classList.add('active-block')
            allCases[i].classList.remove('inactive')
        }

        filterOption.classList.remove('active')
        span.classList.remove('active')
        span.classList.add('inactive')
    }
    else {

        for (let i = 0; i < allCases.length; i++) {
            allCases[i].classList.remove('active-block')
            allCases[i].classList.add('inactive')
            allSpans[i].classList.remove('active')
            allSpans[i].classList.add('inactive')
        }

        filterOption.classList.remove('inactive')
        filterOption.classList.add('active')
        span.classList.remove('inactive')
        span.classList.add('active')

        filterValue.classList.remove('inactive')
        filterValue.classList.add('active-block')
    }

}