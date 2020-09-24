// from data.js
var tableData = data;
 
// Get a reference to the table body
var tbody = d3.select("tbody");

// Iterating through each dictionary in the array, creating and appending to a new row for each element
tableData.forEach((ufoSiting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSiting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
 
  // Filtering the data by the user input
  var filteredData = tableData.filter(tableData => 
    tableData.datetime === inputValue || 
    tableData.city === inputValue ||
    tableData.state === inputValue ||
    tableData.country === inputValue ||
    tableData.shape === inputValue);
  
  console.log(filteredData);

  tbody.html("");

  filteredData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

// Select reset button
var button = d3.select("#reset-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runReset);
form.on("submit",runReset);

function runReset() {
  // Get a reference to the table body
  var tbody = d3.select("tbody");

  // Iterating through each dictionary in the array, creating and appending to a new row for each element
  tableData.forEach((ufoSiting) => {
      var row = tbody.append("tr");
      Object.entries(ufoSiting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
}

