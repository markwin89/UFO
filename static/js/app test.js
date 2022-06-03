// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple Python print statement
'def print_hello():'
    print("Hello there!")

// Simple JavaScript console.log statement
function printHello();


// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }

// Functions can call other functions
function doubleAddition(C, D) {
    var total = addition(4, 5) * 2;
    return total;
  }



// Simple JavaScript log statement
function printHello() {
  return "Hello there!";
}
printHello = () => "Hello there!";


// Original addition function
function addition(a, b) {
  return a + b;
}
// Converted to an arrow function
addition = (a, b) => a + b;

// Original doubleAddition function
function doubleAddition(c, d) {
  var total = addition(c, d) * 2;
  return total;
}

doubleAddition = (c, d)

=> addition(c, d) * 2;



let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

function listLoop(userList) {
  for (var i = 0; i < userList.length; i++) {
    console.log(userList[i]);
  }
}


let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
}

var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

for (var i = 0; i < 5; i++) {
  console.log("I am " + i);
}


function buildTable(data) {

}
//cleaning the table so the above formula is cleared.
function buildTable(data) {
  tbody.html("");
}

data.forEach((dataRow) => {

});


let row = tbody.append("tr");

Object.values(dataRow).forEach((val) => {
});


let cell = row.append("td");

cell.text(val);


data.forEach((dataRow) => {
  let row = tbody.append("tr");
  Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
    }
  );
});


{
  datetime: "1/1/2010",
  city: "benton",
  state: "ar",
  country: "us",
  shape: "circle",
  durationMinutes: "5 mins.",
  comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
},


function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}

function handleClick() {
  let date = d3.select("#datetime").property("value");

  let filteredData = tableData;


// if-statement syntax
if ( condition ) { code to execute }


// pseudocode practice
if (a date is entered) {
  Filter the default data to show only the date entered
};


if (date) {
  filteredData = filteredData.filter(row => row.datetime === date);
};


if (date) {
  filteredData = filteredData.filter(row => row.datetime === date);
};


function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  };

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
};



buildTable(tableData);


function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

